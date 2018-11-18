Das Projekt baut intensiv auf node und gulp auf.

### Gulp Tasks ###
watch : {
    - startet BrowserSync.
    - (dev) observe css und/oder js files.
    - rebundle css und/oder js beim speichern.
    - page refresh on save.
}

icons : {
    - generiert spreatsheets
    - png / svg
}

build : {
    - bundlet alle files in "./dist"
    - komprimiert,
    - aktualisiert
    - minifiziert,
    - und reversioniert relevante dateien.
}

pvDist : {
    - dist Browser vorschau
}

### Git repo auf http://bruckmann.webfactional.com/site.git