//configurações do mapa
const map = L.map('map', {
    center: [-5.500000, -42.000000], // centro do mapa
    zoom: 8, // zoom inicial
    fullscreenControl: {} //tela cheia
 });


// adicionando mapas bases
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const ewi = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const ewtm = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
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
}).addTo(map).bindPopup("Assentamento Bom Lugar<br>Área: 141,9417 Ha<br>Perímetro: 5657,4218 m<br>Quantidade de famílias: 09<br>Município: Alto Longá<br>Território de Desenvolvimento: Entre Rios")

var altolonga_marinopolis = L.geoJSON(altolonga_marinopolis, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Marinópolis<br>Área: 1192,3550 Ha<br>Perímetro: 14327,0471 m<br>Quantidade de famílias: 30<br>Município: Alto Longá<br>Território de Desenvolvimento: Entre Rios")
    
var altos_bispado = L.geoJSON(altos_bispado, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Bispado<br>Área: 717,1448 Ha<br>Perímetro: 11453,0105 m<br>Quantidade de famílias: 13<br>Município: Altos<br>Território de Desenvolvimento: Entre Rios")

var altos_malhadadaspedras = L.geoJSON(altos_malhadadaspedras, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Malhada das Pedras<br>Área: 211,5521 Ha<br>Perímetro: 12580,471 m<br>Quantidade de famílias: 15<br>Município: Altos<br>Território de Desenvolvimento: Entre Rios")

var amarante_vivafeliz = L.geoJSON(amarante_vivafeliz, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Viva Feliz<br>Área: 442,8828 Ha<br>Perímetro: 9442,2107 m<br>Quantidade de famílias: 25<br>Município: Amarante<br>Território de Desenvolvimento: Entre Rios")

var angical_chapadadohamilton = L.geoJSON(angical_chapadadohamilton, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Chapada do Hamilton<br>Área: 664,6647 Ha<br>Perímetro: 10988,2124 m<br>Quantidade de famílias: 19<br>Município: Angical do Piauí<br>Território de Desenvolvimento: Entre Rios")

var aroazes_barrovermelho = L.geoJSON(aroazes_barrovermelho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Barro Vermelho<br>Área: 399,9886 Ha<br>Perímetro: 8787,2631 m<br>Quantidade de famílias: 15<br>Município: Aroazes<br>Território de Desenvolvimento: Vale do Sambito")

var batalha_bacabas = L.geoJSON(batalha_bacabas, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Bacabas<br>Área: 411,2077 Ha<br>Perímetro: 8301,1565 m<br>Quantidade de famílias: <br>Município: Batalha<br>Território de Desenvolvimento: Cocais")

var batalha_caicarinha = L.geoJSON(batalha_caicarinha, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Caiçarinha<br>Área: 272,7109 Ha<br>Perímetro: 7021,6467 m<br>Quantidade de famílias: <br>Município: Batalha<br>Território de Desenvolvimento: Cocais")

var batalha_maganos = L.geoJSON(batalha_maganos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Maganos<br>Área: 264,9312 Ha<br>Perímetro: 7369,6526 m<br>Quantidade de famílias: 12<br>Município: Batalha<br>Território de Desenvolvimento: Cocais")

var beneditinos_buritizinho = L.geoJSON(beneditinos_buritizinho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Buritizinho<br>Área: 427,3041 Ha<br>Perímetro: 9133,4969 m<br>Quantidade de famílias: 20<br>Município: Beneditinos<br>Território de Desenvolvimento: Entre Rios")

var buritidosmontes_canabrava = L.geoJSON(buritidosmontes_canabrava, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Cana Brava<br>Área: 972,0705 Ha<br>Perímetro: 16861,4499 m<br>Quantidade de famílias: 20<br>Município: Buriti dos Montes<br>Território de Desenvolvimento: Carnaubais")

var campomaior_tangara = L.geoJSON(campomaior_tangara, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Tangará<br>Área: 789,1977 Ha<br>Perímetro: 12780,6059 m<br>Quantidade de famílias: 25<br>Município: Campo Maior<br>Território de Desenvolvimento: Carnaubais")

var elesbaoveloso_caraibas = L.geoJSON(elesbaoveloso_caraibas, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Caraíbas<br>Área: 614,0244 Ha<br>Perímetro: 12115,4115 m<br>Quantidade de famílias: 16<br>Município: Elesbão Veloso<br>Território de Desenvolvimento: Vale do Sambito")

var flores_tamboril = L.geoJSON(flores_tamboril, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Tamboril<br>Área: 639,5015 Ha<br>Perímetro: 13514,9164 m<br>Quantidade de famílias: 20<br>Município: Flores do Piauí<br>Território de Desenvolvimento: Vale dos Rios Piauí e Itaueira")

var floriano_caneladevelho = L.geoJSON(floriano_caneladevelho, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Canela de Velho<br>Área: 555,0978 Ha<br>Perímetro: 10777,9780 m<br>Quantidade de famílias: 23<br>Município: Floriano<br>Território de Desenvolvimento: Vale dos Rios Piauí e Itaueira")

var geminiano_cacimbinha = L.geoJSON(geminiano_cacimbinha, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Cacimbinha<br>Área: 581,1940 Ha<br>Perímetro: 13502,1172 m<br>Quantidade de famílias: 27<br>Município: Geminiano<br>Território de Desenvolvimento: Vale do Rio Guaribas")

var jardimdomulato_lagoadoscocos = L.geoJSON(jardimdomulato_lagoadoscocos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Lagoa dos Cocos<br>Área: 130,9703 Ha<br>Perímetro: 9180,6615 m<br>Quantidade de famílias: 18<br>Município: Jardim do Mulato<br>Território de Desenvolvimento: Entre Rios")

var jatoba_santa_luz = L.geoJSON(jatoba_santa_luz, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Santa Luz<br>Área: 1270,2428 Ha<br>Perímetro: 17572,9401 m<br>Quantidade de famílias: <br>Município: Jatobá do Piauí<br>Território de Desenvolvimento: Carnaubais")

var joaquimpires_aninga = L.geoJSON(joaquimpires_aninga, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Aninga<br>Área: 483,7254 Ha<br>Perímetro: 11548,2945 m<br>Quantidade de famílias: <br>Município: Joaquim Pires<br>Território de Desenvolvimento: Cocais")

var josedefreitas_altoalegre = L.geoJSON(josedefreitas_altoalegre, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Alto Alegre<br>Área: 310,1311 Ha<br>Perímetro: 7491,4437 m<br>Quantidade de famílias: <br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios")

var josedefreitas_lembrada = L.geoJSON(josedefreitas_lembrada, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Lembrada<br>Área: 1013,6538 Ha<br>Perímetro: 13029,9086 m<br>Quantidade de famílias: 30<br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios")

var josedefreitas_solnascente = L.geoJSON(josedefreitas_solnascente, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Sol Nascente<br>Área: 127,245 Ha<br>Perímetro: 7425,8625 m<br>Quantidade de famílias: <br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios")

var lagoadopiaui_espiritosanto = L.geoJSON(lagoadopiaui_espiritosanto, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Espírito Santo<br>Área: 330,8044 Ha<br>Perímetro: 9468,8485 m<br>Quantidade de famílias: 12<br>Município: Lagoa do Piauí<br>Território de Desenvolvimento: Entre Rios")

var novooriente_maedagua = L.geoJSON(novooriente_maedagua, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Mãe D'Água<br>Área: 311,1109 Ha<br>Perímetro: 8461,7694 m<br>Quantidade de famílias: 13<br>Município: Novo Oriente<br>Território de Desenvolvimento: Vale do Sambito")

var patos_palma = L.geoJSON(patos_palma, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Palma<br>Área: 913,1994 Ha<br>Perímetro: 15490,3064 m<br>Quantidade de famílias: 29<br>Município: Patos<br>Território de Desenvolvimento: Chapada Vale do Rio Itaim")

var pedroii_arara = L.geoJSON(pedroii_arara, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Arara<br>Área: 669,3428 Ha<br>Perímetro: 12253,3802 m<br>Quantidade de famílias: 25<br>Município: Pedri II<br>Território de Desenvolvimento: Cocais")

var pedroii_pedrabranca = L.geoJSON(pedroii_pedrabranca, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Pedra Branca<br>Área: 501,1361 Ha<br>Perímetro: 11098,8375 m<br>Quantidade de famílias: 20<br>Município: Pedro II<br>Território de Desenvolvimento: Cocais")

var piripiri_cachoeira = L.geoJSON(piripiri_cachoeira, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Cachoeira<br>Área: 368,9189 Ha<br>Perímetro: 10560,0348 m<br>Quantidade de famílias: 15<br>Município: Piripiri<br>Território de Desenvolvimento: Cocais")

var piripiri_sabia = L.geoJSON(piripiri_sabia, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Sabiá<br>Área: 181,7974 Ha<br>Perímetro: 6145,0488 m<br>Quantidade de famílias: 10<br>Município: Piripiri<br>Território de Desenvolvimento: Cocais")

var santacruzdopiaui_vilanova = L.geoJSON(santacruzdopiaui_vilanova, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Vila Nova<br>Área: 845,9289 Ha<br>Perímetro: 16161,6352 m<br>Quantidade de famílias: 25<br>Município: Santa Crus do Piauí<br>Território de Desenvolvimento: Vale do Canindé")

var saojoaodoarraial_nossasenhoradefatima = L.geoJSON(saojoaodoarraial_nossasenhoradefatima, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Nossa Senhora de Fátima<br>Área: 1027,5816 Ha<br>Perímetro: 15360,957 m<br>Quantidade de famílias: <br>Município: São João do Arraial<br>Território de Desenvolvimento: Cocais")

var saojoaodoarraial_santaluzia = L.geoJSON(saojoaodoarraial_santaluzia, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Santa Luzia<br>Área: 774,1447 Ha<br>Perímetro: 19432,6375 m<br>Quantidade de famílias: <br>Município: São João do Arraial<br>Território de Desenvolvimento: Cocais")

var saomigueldabaixagrande_mcruz = L.geoJSON(saomigueldabaixagrande_mcruz, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento M. Cruz<br>Área: 336,3634 Ha<br>Perímetro: 11357,5705 m<br>Quantidade de famílias: 20<br>Município: São Miguel da Baixa Grande<br>Território de Desenvolvimento: Vale do Sambito")

var saopedro_caraibas = L.geoJSON(saopedro_caraibas, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Caraíbas<br>Área: 363,0171 Ha<br>Perímetro: 8292,9710 m<br>Quantidade de famílias: 18<br>Município: São Pedro do Piauí<br>Território de Desenvolvimento: Entre Rios")

var saopedro_todosossantos = L.geoJSON(saopedro_todosossantos, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Todos os Santos<br>Área: 141,2048 Ha<br>Perímetro: 5412,3920 m<br>Quantidade de famílias: 10<br>Município: São Pedro do Piauí<br>Território de Desenvolvimento: Entre Rios")

var teresina_bomsossego = L.geoJSON(teresina_bomsossego, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Bom Sossego<br>Área: 311,9144 Ha<br>Perímetro: 7856,0311 m<br>Quantidade de famílias: 25<br>Município: Teresina<br>Território de Desenvolvimento: Entre Rios")

var teresina_caitetus = L.geoJSON(teresina_caitetus, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Caitetús<br>Área: 856,0573 Ha<br>Perímetro: 19715,0245 m<br>Quantidade de famílias: 20<br>Município: Teresina<br>Território de Desenvolvimento: Entre Rios")

var valenca_santamaria = L.geoJSON(valenca_santamaria, {
    color: 'red',
    opacity: 1,
}).addTo(map).bindPopup("Assentamento Santa Maria<br>Área: 672,2017 Ha<br>Perímetro: 7856,0311 m<br>Quantidade de famílias: 17<br>Município: Valença<br>Território de Desenvolvimento: Entre Rios")

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

//grupo de camadas com as divisões politicas e os assentamentos
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
            "Bacabas": batalha_bacabas,
            "Caiçarihha": batalha_caicarinha,
            "Maganos": batalha_maganos,
            "Buritizinho": beneditinos_buritizinho,
            "Cana Brava": buritidosmontes_canabrava,
            "Tangara": campomaior_tangara,
            "Caraíbas": elesbaoveloso_caraibas,
            "Tamboril": flores_tamboril,
            "Canela de Velho": floriano_caneladevelho,
            "Cacimbinha": geminiano_cacimbinha,
            "Lagoa dos Cocos": jardimdomulato_lagoadoscocos,
            "Santa Cruz": jatoba_santa_luz,
            "Aninga": joaquimpires_aninga,
            "Alto Alegre": josedefreitas_altoalegre,
            "Lembrada": josedefreitas_lembrada,
            "Sol Nascente": josedefreitas_solnascente,
            "Espirito Santo": lagoadopiaui_espiritosanto,
            "Mãe D'Água": novooriente_maedagua,
            "Palma": patos_palma,
            "Arara": pedroii_arara,
            "Pedra Branca": pedroii_pedrabranca,
            "Cachoeira": piripiri_cachoeira,
            "Sabiá": piripiri_sabia,
            "Vila Nova": santacruzdopiaui_vilanova,
            "Nossa Senhora de Fátima": saojoaodoarraial_nossasenhoradefatima,
            "Santa Luzia": saojoaodoarraial_santaluzia,
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
