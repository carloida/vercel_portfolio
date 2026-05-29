param(
  [switch]$Install,
  [switch]$NoOpen
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

function Test-Port {
  param([int]$Port)
  return [bool](Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue)
}

function Ensure-NodeDependencies {
  param([string]$Path)

  if ($Install -or -not (Test-Path (Join-Path $Path "node_modules"))) {
    Write-Host "Installing npm dependencies in $Path"
    npm install --prefix $Path
  }
}

function Ensure-PythonEnvironment {
  param([string]$Path)

  $Venv = Join-Path $Path ".venv"
  $Python = Join-Path $Venv "Scripts\python.exe"

  if ($Install -or -not (Test-Path $Python)) {
    Write-Host "Creating Python environment in $Path"
    py -m venv $Venv
    & $Python -m pip install --upgrade pip
    & $Python -m pip install -r (Join-Path $Path "requirements.txt")
  }

  return $Python
}

function Start-HiddenService {
  param(
    [string]$Title,
    [string]$Path,
    [string]$Command,
    [int]$Port
  )

  if (Test-Port $Port) {
    Write-Host "$Title already running on port $Port"
    return
  }

  Write-Host "Starting $Title on port $Port"
  Start-Process `
    -FilePath "powershell" `
    -WindowStyle Hidden `
    -WorkingDirectory $Path `
    -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "`$Host.UI.RawUI.WindowTitle='$Title'; $Command")
}

function Wait-Url {
  param(
    [string]$Url,
    [string]$Name
  )

  for ($i = 0; $i -lt 24; $i++) {
    try {
      $response = Invoke-WebRequest -UseBasicParsing -Uri $Url -TimeoutSec 5
      if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500) {
        Write-Host "$Name ready: $Url"
        return $true
      }
    } catch {
      Start-Sleep -Seconds 3
    }
  }

  Write-Warning "$Name did not respond yet: $Url"
  return $false
}

$MovieFrontend = Join-Path $Root "linked-projects\movie-predictor\frontend"
$MovieBackend = Join-Path $Root "linked-projects\movie-predictor\backend"
$QrmApp = Join-Path $Root "linked-projects\qrm-portfolio"
$QcpFrontend = Join-Path $Root "linked-projects\qcp-gst-f5\frontend"
$QcpBackend = Join-Path $Root "linked-projects\qcp-gst-f5\backend"
$MedSealFrontend = Join-Path $Root "linked-projects\med-seal-rad\apps\ai-frontend"

Ensure-NodeDependencies $Root
Ensure-NodeDependencies $MedSealFrontend
Ensure-NodeDependencies $MovieFrontend
Ensure-NodeDependencies $QrmApp
Ensure-NodeDependencies $QcpFrontend

$MoviePython = Ensure-PythonEnvironment $MovieBackend
$QcpPython = Ensure-PythonEnvironment $QcpBackend

Start-HiddenService `
  -Title "Carlo Portfolio :3000" `
  -Path $Root `
  -Port 3000 `
  -Command "npm run dev -- -p 3000"

Start-HiddenService `
  -Title "QCP GST F5 API :8000" `
  -Path $QcpBackend `
  -Port 8000 `
  -Command "& '$QcpPython' -m uvicorn main:app --host 127.0.0.1 --port 8000"

Start-HiddenService `
  -Title "Movie Predictor API :8001" `
  -Path $MovieBackend `
  -Port 8001 `
  -Command "`$env:FRONTEND_ORIGIN='http://127.0.0.1:5174'; & '$MoviePython' -m uvicorn main:app --host 127.0.0.1 --port 8001"

Start-HiddenService `
  -Title "Med-SEAL ClinOS Frontend :3001" `
  -Path $MedSealFrontend `
  -Port 3001 `
  -Command "npm run dev -- --host 127.0.0.1 --port 3001"

Start-HiddenService `
  -Title "QCP GST F5 Frontend :5173" `
  -Path $QcpFrontend `
  -Port 5173 `
  -Command "npm run dev -- --host 127.0.0.1 --port 5173"

Start-HiddenService `
  -Title "Movie Predictor Frontend :5174" `
  -Path $MovieFrontend `
  -Port 5174 `
  -Command "`$env:VITE_API_BASE_URL='http://127.0.0.1:8001'; npm run dev -- --host 127.0.0.1 --port 5174"

Start-HiddenService `
  -Title "QRM Portfolio App :3002" `
  -Path $QrmApp `
  -Port 3002 `
  -Command "npm run dev -- -p 3002"

$FailedChecks = @()

if (-not (Wait-Url -Name "Main portfolio" -Url "http://localhost:3000")) { $FailedChecks += "Main portfolio" }
if (-not (Wait-Url -Name "Med-SEAL ClinOS" -Url "http://127.0.0.1:3001")) { $FailedChecks += "Med-SEAL ClinOS" }
if (-not (Wait-Url -Name "Movie Predictor" -Url "http://127.0.0.1:5174")) { $FailedChecks += "Movie Predictor" }
if (-not (Wait-Url -Name "Movie API" -Url "http://127.0.0.1:8001/health")) { $FailedChecks += "Movie API" }
if (-not (Wait-Url -Name "QRM Portfolio" -Url "http://127.0.0.1:3002")) { $FailedChecks += "QRM Portfolio" }
if (-not (Wait-Url -Name "GST F5 app" -Url "http://127.0.0.1:5173")) { $FailedChecks += "GST F5 app" }
if (-not (Wait-Url -Name "GST F5 API" -Url "http://127.0.0.1:8000/health")) { $FailedChecks += "GST F5 API" }

if (-not $NoOpen) {
  Start-Process "http://localhost:3000"
}

Write-Host ""
Write-Host "Portfolio system is ready."
Write-Host "Main portfolio:   http://localhost:3000"
Write-Host "Med-SEAL ClinOS:  http://127.0.0.1:3001"
Write-Host "Movie Predictor:  http://127.0.0.1:5174"
Write-Host "QRM Portfolio:    http://127.0.0.1:3002"
Write-Host "GST F5 Filing:    http://127.0.0.1:5173"

if ($FailedChecks.Count -gt 0) {
  Write-Warning "Some services did not respond: $($FailedChecks -join ', ')"
  exit 1
}
