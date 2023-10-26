$executablePath = Join-Path -Path $destinationPath -ChildPath "thor64-lite.exe"
$arguments = "--quick --soft --max_runtime 1 --alldrives --keyval --jsonfile log.json"

Start-Process -FilePath $executablePath -ArgumentList $arguments -Wait
# Read the content of the JSON file
$jsonFilePath = Join-Path -Path $destinationPath -ChildPath "log.json"
$lines = Get-Content -Path $jsonFilePath

# Send each line as an HTTP POST request
foreach ($line in $lines) {
    Invoke-RestMethod -Uri "http://localhost:5173/trpc/addLog" -Method Post -Body $line -ContentType "application/json"
    Start-Sleep -Seconds 1
}

# Cleanup: Remove the downloaded folder and ZIP file
Remove-Item -Path $destinationPath -Force -Recurse
Remove-Item -Path "$destinationPath.zip" -Force