// mapa
var map = L.map('map', {
    center: [-5.1, -42.8], // centro do mapa
    zoom: 10, // zoom inicial
    fullscreenControl: {} //tela cheia
 });

// adicionando mapas bases
var baseMaps = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map),
    "Esri World Imagery": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }),
    "Esri World Topo Map": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    }),
};//finish basemaps

// marcadores
var ifpi = L.marker([-5.0887267199904604, -42.81088024377823]).bindPopup('<b>Instituto Federal do Piauí</b>');

// grupo de marcadores
var ifpis = new L.LayerGroup();
    L.marker([-5.102090110297968, -42.81304478645325]).bindPopup('<b>Instituto Federal do Piauí</b>').addTo(ifpis),
    L.marker([-5.098568956057855, -42.74048030376434]).bindPopup('<b>Instituto Federal do Piauí</b>').addTo(ifpis);

var markers = {
    "IFPI": ifpi,
    "IFPIs": ifpis
};

// Coordenadas da posição do mouse no mapa
L.control.mousePosition({
    position: 'bottomleft',
    separator: ';',
    numDigits: 6,
  }).addTo(map);

// Plugin Leaflet.NavBar
L.control.navbar({
    position: 'topleft',
  }).addTo(map);

// zoom na área
L.Control.boxzoom({ position:'topleft' }).addTo(map);

// medir área no mapa
var measureControl = L.control.measure({
    position: 'topleft',
  primaryAreaUnit: 'hectares', // Unidade de área
  primaryLengthUnit: 'kilometers',// Unidade de distancia
  secondaryLengthUnit: 'meters', // Unidade de distancia
  localization: 'pt-br',
  }).addTo(map);
  
//controle das camadas
L.control.layers(baseMaps, markers).addTo(map);

//controle de escala
L.control.scale().addTo(map);
