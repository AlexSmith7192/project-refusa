//configurações do mapa
var map = L.map('map', {
    center: [-5.1, -42.8], // centro do mapa
    zoom: 10, // zoom inicial
    fullscreenControl: {} //tela cheia
 });


// adicionando mapas bases
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var ewi = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var ewtm = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

//adicionando arquivos geojson
var limite_semiarido = L.geoJSON(limite_semiarido, {
    color: 'green',
    opacity: 0.5,
})

//grupo de camadas bases
var baseMaps = [
    {
        groupName : "Camadas",
        layers : {
            "OpenStreetMap" : osm,
            "Esri World Imagery" : ewi,
            "Esri World Topo Map" : ewtm
        }
    }
];

//grupo de camadas com as divisões politicas
var overlayers = [
    {
        groupName: "Limites Políticos",
        layers: {
            "Limite do Semiárido": limite_semiarido,
        }
    }
]

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
  
//estilo do controlador de camadas
var optionsControl = {
    container_width : "300px",
    container_maxHeight : "500px",
    group_maxHeight : "200px",
    exclusive : false,
    collapsed : true
};

//controlador de camadas
var control = L.Control.styledLayerControl(baseMaps, overlayers, optionsControl);
map.addControl(control);

//controle de escala
L.control.scale().addTo(map);
