param(
  [switch]$Install
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $PSScriptRoot

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

function Start-Terminal {
  param(
    [string]$Title,
    [string]$Path,
    [string]$Command
  )

  Write-Host "Starting $Title"
  Start-Process `
    -FilePath "powershell" `
    -WindowStyle Hidden `
    -WorkingDirectory $Path `
    -ArgumentList @("-NoExit", "-ExecutionPolicy", "Bypass", "-Command", "`$Host.UI.RawUI.WindowTitle='$Title'; $Command")
}

$MovieFrontend = Join-Path $Root "linked-projects\movie-predictor\frontend"
$MovieBackend = Join-Path $Root "linked-projects\movie-predictor\backend"
$QrmApp = Join-Path $Root "linked-projects\qrm-portfolio"
$QcpFrontend = Join-Path $Root "linked-projects\qcp-gst-f5\frontend"
$QcpBackend = Join-Path $Root "linked-projects\qcp-gst-f5\backend"

Ensure-NodeDependencies $MovieFrontend
Ensure-NodeDependencies $QrmApp
Ensure-NodeDependencies $QcpFrontend

$MoviePython = Ensure-PythonEnvironment $MovieBackend
$QcpPython = Ensure-PythonEnvironment $QcpBackend

Start-Terminal `
  -Title "QCP GST F5 API :8000" `
  -Path $QcpBackend `
  -Command "& '$QcpPython' -m uvicorn main:app --host 127.0.0.1 --port 8000"

Start-Terminal `
  -Title "Movie Predictor API :8001" `
  -Path $MovieBackend `
  -Command "`$env:FRONTEND_ORIGIN='http://127.0.0.1:5174'; & '$MoviePython' -m uvicorn main:app --host 127.0.0.1 --port 8001"

Start-Terminal `
  -Title "QCP GST F5 Frontend :5173" `
  -Path $QcpFrontend `
  -Command "npm run dev -- --host 127.0.0.1 --port 5173"

Start-Terminal `
  -Title "Movie Predictor Frontend :5174" `
  -Path $MovieFrontend `
  -Command "`$env:VITE_API_BASE_URL='http://127.0.0.1:8001'; npm run dev -- --host 127.0.0.1 --port 5174"

Start-Terminal `
  -Title "QRM Portfolio App :3002" `
  -Path $QrmApp `
  -Command "npm run dev -- -p 3002"

Write-Host ""
Write-Host "Interactive app URLs:"
Write-Host "  QCP GST F5:        http://127.0.0.1:5173"
Write-Host "  Movie Predictor:   http://127.0.0.1:5174"
Write-Host "  QRM Portfolio:     http://127.0.0.1:3002"
Write-Host ""
Write-Host "Portfolio launch pages:"
Write-Host "  http://localhost:3000/apps/qcp-gst-f5"
Write-Host "  http://localhost:3000/apps/movie-predictor"
Write-Host "  http://localhost:3000/apps/qrm-portfolio"
