git remote add origin https://github.com/ajmalfaris11/resort.git
git branch -M main

$files = git ls-files --others --exclude-standard

foreach ($file in $files) {
    if (-not [string]::IsNullOrWhiteSpace($file)) {
        git add $file
        git commit -m "Add $file"
    }
}

git push -u origin main
