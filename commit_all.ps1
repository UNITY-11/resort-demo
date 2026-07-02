git reset
$env:GIT_AUTHOR_DATE="2026-07-02T12:00:00"
$env:GIT_COMMITTER_DATE="2026-07-02T12:00:00"
git ls-files -m --others --exclude-standard | ForEach-Object {
    git add $_
    $name = Split-Path $_ -Leaf
    git commit -m "update $name" --date="2026-07-02T12:00:00"
}
