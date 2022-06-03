function changeTile(newTile){
            tile.setUrl(newTile)
        }

var map = L.map('map', {
    crs: L.CRS.Simple,
}).setView([-.5, .43], 9);

var tile = L.tileLayer('https://cartocollective.blob.core.windows.net/vieques/oblique/View1/{z}/{x}_{y}.png', {
    // L.tileLayer('/Users/javierarce/Downloads/MagickSlicer-master/View_036_files/{z}/{x}_{y}.png', {
    attribution: 'Archivo Histórico de Vieques - Colección Bonnie Donohue',
    minZoom: 0,
    maxZoom: 14,
    maxNativeZoom: 11,
    tileSize: 256,
}).addTo(map);

map.addControl(new L.Control.Fullscreen());
