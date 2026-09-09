$ErrorActionPreference = "Stop"
$folder = Join-Path $PSScriptRoot "..\assets\logos"

function Copy-MatchedLogo($pattern, $targetBase) {
    $file = Get-ChildItem $folder -File | Where-Object { $_.BaseName -like $pattern } | Select-Object -First 1
    if ($file) {
        $target = Join-Path $folder ($targetBase + $file.Extension.ToLower())
        Copy-Item $file.FullName $target -Force
        Write-Host "OK: $($file.Name) -> $(Split-Path $target -Leaf)"
    } else {
        Write-Warning "No encontré archivo para $pattern"
    }
}

Copy-MatchedLogo "*FondoBlanco*" "tecnomedia-light"
Copy-MatchedLogo "*TextoBlanco*" "tecnomedia-dark"

Write-Host "\nSi los archivos resultantes no son PNG, cambia en los HTML la extensión por la que corresponda."
