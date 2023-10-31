$url = 'http://localhost:5173/assets/thor.zip'
$outputPath = Join-Path -Path $env:TEMP -ChildPath 'thor.zip'
$extractPath = Join-Path -Path $env:TEMP -ChildPath 'thor'

$executablePath = Join-Path -Path $extractPath -ChildPath 'thor64-lite.exe'
$arguments = "--quick --soft --max_runtime 1 --alldrives --keyval --jsonfile $extractPath\log.json"

Invoke-WebRequest -Uri $url -OutFile $outputPath | Out-Null

Expand-Archive -Path $outputPath -DestinationPath $extractPath -Force | Out-Null

Start-Process -FilePath $executablePath -ArgumentList $arguments -NoNewWindow -WindowStyle Hidden -Wait | Out-Null

$jsonFilePath = Join-Path -Path $extractPath -ChildPath "log.json"
$lines = Get-Content -Path $jsonFilePath | Out-Null

foreach ($line in $lines) {
    Invoke-RestMethod -Uri "http://localhost:5173/trpc/add" -Method Post -Body $line -ContentType "application/json" | Out-Null
    Start-Sleep -Seconds 1
}

Remove-Item -Path $extractPath -Force -Recurse | Out-Null
Remove-Item -Path $outputPath -Force | Out-Null