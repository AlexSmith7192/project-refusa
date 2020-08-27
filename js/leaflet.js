//configurações do mapa
var map = L.map('map', {
    center: [-5.107358, -42.116089], // centro do mapa
    zoom: 8, // zoom inicial
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
    color: 'black',
    opacity: 1,
})

var municipios_piaui = L.geoJSON(municipios_piaui, {
    color: 'blue',
    opacity: 1,
})

var altolonga_bomlugar = L.geoJSON(altolonga_bomlugar, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Área: <br> Perímetro: <br> Quantidade de moradores: <br> Território de Desenvolvimento: Entre Rios")

var altolonga_marinopolis = L.geoJSON(altolonga_marinopolis, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var altos_bispado = L.geoJSON(altos_bispado, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var altos_malhadadaspedras = L.geoJSON(altos_malhadadaspedras, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var amarante_vivafeliz = L.geoJSON(amarante_vivafeliz, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var angical_chapadadohamilton = L.geoJSON(angical_chapadadohamilton, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var aroazes_barrovermelho = L.geoJSON(aroazes_barrovermelho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var batalha_maganos = L.geoJSON(batalha_maganos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var beneditinos_buritizinho = L.geoJSON(beneditinos_buritizinho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var buritidosmontes_canabrava = L.geoJSON(buritidosmontes_canabrava, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var campomaior_tangara = L.geoJSON(campomaior_tangara, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var elesbaoveloso_caraibas = L.geoJSON(elesbaoveloso_caraibas, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var flores_tamboril = L.geoJSON(flores_tamboril, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var floriano_caneladevelho = L.geoJSON(floriano_caneladevelho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var geminiano_cacimbinha = L.geoJSON(geminiano_cacimbinha, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var jardimdomulato_lagoadoscocos = L.geoJSON(jardimdomulato_lagoadoscocos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var josedefreitas_lembrada = L.geoJSON(josedefreitas_lembrada, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var lagoadopiaui_espiritosanto = L.geoJSON(lagoadopiaui_espiritosanto, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var novooriente_maedagua = L.geoJSON(novooriente_maedagua, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var patos_palma = L.geoJSON(patos_palma, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var pedroii_arara = L.geoJSON(pedroii_arara, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var pedroii_pedrabranca = L.geoJSON(pedroii_pedrabranca, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var piripiri_cachoeira = L.geoJSON(piripiri_cachoeira, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var piripiri_sabia = L.geoJSON(piripiri_sabia, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var santacruzdopiaui_vilanova = L.geoJSON(santacruzdopiaui_vilanova, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var saomigueldabaixagrande_mcruz = L.geoJSON(saomigueldabaixagrande_mcruz, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var saopedro_caraibas = L.geoJSON(saopedro_caraibas, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var saopedro_todosossantos = L.geoJSON(saopedro_todosossantos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var teresina_bomsossego = L.geoJSON(teresina_bomsossego, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var teresina_caitetus = L.geoJSON(teresina_caitetus, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

var valenca_santamaria = L.geoJSON(valenca_santamaria, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Testando popup")

//grupo de camadas bases
var baseMaps = [
    {
        groupName : "Camadas Bases",
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
        groupName: "Camadas",
        layers: {
            "Semiárido": limite_semiarido,
            "Municípios do Piauí": municipios_piaui,
            "Bom Lugar, Alto Longá": altolonga_bomlugar,
            "Marinopolis": altolonga_marinopolis,
            "Bispado": altos_bispado,
            "Malhada das Pedras": altos_malhadadaspedras,
            "Viva Feliz": amarante_vivafeliz,
            "Chapada do Hamilton": angical_chapadadohamilton,
            "Barro Vermelho": aroazes_barrovermelho,
            "Maganos": batalha_maganos,
            "Buritizinho": beneditinos_buritizinho,
            "Cana Brava": buritidosmontes_canabrava,
            "Tangara": campomaior_tangara,
            "Caraíbas": elesbaoveloso_caraibas,
            "Tamboril": flores_tamboril,
            "Canela de Velho": floriano_caneladevelho,
            "Cacimbinha": geminiano_cacimbinha,
            "Lagoa dos Cocos": jardimdomulato_lagoadoscocos,
            "Lembrada": josedefreitas_lembrada,
            "Espirito Santo": lagoadopiaui_espiritosanto,
            "Mãe D'Água": novooriente_maedagua,
            "Palma": patos_palma,
            "Arara": pedroii_arara,
            "Pedra Branca": pedroii_pedrabranca,
            "Cachoeira": piripiri_cachoeira,
            "Sabiá": piripiri_sabia,
            "Vila Nova": santacruzdopiaui_vilanova,
            "M. Cruz": saomigueldabaixagrande_mcruz,
            "Caraibas": saopedro_caraibas,
            "Todos os Santos": saopedro_todosossantos,
            "Bom Sossêgo": teresina_bomsossego,
            "Caitetus": teresina_caitetus,
            "Santa Maria": valenca_santamaria,
        },
    }
];

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
