//configurações do mapa
const map = L.map('map', {
  center: [-8.5, -41.0], // centro do mapa
  zoom: 6, // zoom inicial
  fullscreenControl: {} //tela cheia
});

// adicionando mapas bases
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const googleSat = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }
);

const ewi = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  }
);

const ewtm = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  {
    attribution:
      'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
  }
);

//adicionando arquivos geojson
// var municipios_piaui = L.geoJSON(municipios_piaui, {
//   color: 'blue',
//   opacity: 1
// }).addTo(map);

var limite_semiarido = L.geoJSON(limite_semiarido, {
  color: 'black',
  opacity: 1
}).addTo(map);

// LOTE 01
var batalha_maganos = L.geoJSON(batalha_maganos, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Maganos<br>Área: 264,9312 Ha<br>Perímetro: 7369,6526 m<br>Quantidade de famílias: 12<br>Município: Batalha<br>Território de Desenvolvimento: Cocais'
  );

// TERRA ATIVA

var batalha_bacabas = L.geoJSON(batalha_bacabas, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Bacabas<br>Área: 411,2077 Ha<br>Perímetro: 8301,1565 m<br>Quantidade de famílias: <br>Município: Batalha<br>Território de Desenvolvimento: Cocais'
  );

// SANTA MARIA

var pedroii_pedrabranca = L.geoJSON(pedroii_pedrabranca, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Pedra Branca<br>Área: 501,1361 Ha<br>Perímetro: 11098,8375 m<br>Quantidade de famílias: 20<br>Município: Pedro II<br>Território de Desenvolvimento: Cocais'
  );

var piripiri_sabia = L.geoJSON(piripiri_sabia, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Sabiá<br>Área: 181,7974 Ha<br>Perímetro: 6145,0488 m<br>Quantidade de famílias: 10<br>Município: Piripiri<br>Território de Desenvolvimento: Cocais'
  );

// PALMEIRA II

// MONTEVIDEO

// LOTE 02
var jatoba_santa_luz = L.geoJSON(jatoba_santa_luz, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Santa Luz<br>Área: 1270,2428 Ha<br>Perímetro: 17572,9401 m<br>Quantidade de famílias: <br>Município: Jatobá do Piauí<br>Território de Desenvolvimento: Carnaubais'
  );
// Santa Paz - Sigefredo Pacheco
// José de Dentro - Castelo do Piauí

var buritidosmontes_canabrava = L.geoJSON(buritidosmontes_canabrava, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Cana Brava<br>Área: 972,0705 Ha<br>Perímetro: 16861,4499 m<br>Quantidade de famílias: 20<br>Município: Buriti dos Montes<br>Território de Desenvolvimento: Carnaubais'
  );

// LOTE 03
var beneditinos_buritizinho = L.geoJSON(beneditinos_buritizinho, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Buritizinho<br>Área: 427,3041 Ha<br>Perímetro: 9133,4969 m<br>Quantidade de famílias: 20<br>Município: Beneditinos<br>Território de Desenvolvimento: Entre Rios'
  );

var josedefreitas_lembrada = L.geoJSON(josedefreitas_lembrada, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Lembrada<br>Área: 1013,6538 Ha<br>Perímetro: 13029,9086 m<br>Quantidade de famílias: 30<br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios'
  );

var josedefreitas_altoalegre = L.geoJSON(josedefreitas_altoalegre, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Alto Alegre<br>Área: 310,1311 Ha<br>Perímetro: 7491,4437 m<br>Quantidade de famílias: <br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios'
  );

var josedefreitas_solnascente = L.geoJSON(josedefreitas_solnascente, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Sol Nascente<br>Área: 127,245 Ha<br>Perímetro: 7425,8625 m<br>Quantidade de famílias: <br>Município: José de Freitas<br>Território de Desenvolvimento: Entre Rios'
  );

// Espraiado - Demerval Lobão

var teresina_bomsossego = L.geoJSON(teresina_bomsossego, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Bom Sossego<br>Área: 311,9144 Ha<br>Perímetro: 7856,0311 m<br>Quantidade de famílias: 25<br>Município: Teresina<br>Território de Desenvolvimento: Entre Rios'
  );

var teresina_caitetus = L.geoJSON(teresina_caitetus, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Caitetús<br>Área: 856,0573 Ha<br>Perímetro: 19715,0245 m<br>Quantidade de famílias: 20<br>Município: Teresina<br>Território de Desenvolvimento: Entre Rios'
  );

// LOTE 04
var floriano_caneladevelho = L.geoJSON(floriano_caneladevelho, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Canela de Velho<br>Área: 555,0978 Ha<br>Perímetro: 10777,9780 m<br>Quantidade de famílias: 23<br>Município: Floriano<br>Território de Desenvolvimento: Vale dos Rios Piauí e Itaueira'
  );
// Casa Nova - Itaueira
// Lagoa do Vento - Itaueira
var jardimdomulato_lagoadoscocos = L.geoJSON(jardimdomulato_lagoadoscocos, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Lagoa dos Cocos<br>Área: 130,9703 Ha<br>Perímetro: 9180,6615 m<br>Quantidade de famílias: 18<br>Município: Jardim do Mulato<br>Território de Desenvolvimento: Entre Rios'
  );

var lagoadopiaui_espiritosanto = L.geoJSON(lagoadopiaui_espiritosanto, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Espírito Santo<br>Área: 330,8044 Ha<br>Perímetro: 9468,8485 m<br>Quantidade de famílias: 12<br>Município: Lagoa do Piauí<br>Território de Desenvolvimento: Entre Rios'
  );
// Todos os Santos - São Pedro do Piauí

// LOTE 05
var aroazes_barrovermelho = L.geoJSON(aroazes_barrovermelho, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Barro Vermelho<br>Área: 399,9886 Ha<br>Perímetro: 8787,2631 m<br>Quantidade de famílias: 15<br>Município: Aroazes<br>Território de Desenvolvimento: Vale do Sambito'
  );

var elesbaoveloso_caraibas = L.geoJSON(elesbaoveloso_caraibas, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Assentamento Caraíbas<br>Área: 614,0244 Ha<br>Perímetro: 12115,4115 m<br>Quantidade de famílias: 16<br>Município: Elesbão Veloso<br>Território de Desenvolvimento: Vale do Sambito'
  );

// Vila Nova - Santa Cruz

var novooriente_maedagua = L.geoJSON(novooriente_maedagua, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    "Assentamento Mãe D'Água<br>Área: 311,1109 Ha<br>Perímetro: 8461,7694 m<br>Quantidade de famílias: 13<br>Município: Novo Oriente<br>Território de Desenvolvimento: Vale do Sambito"
  );

// Ininga - Valança do Piauí
// São José - Valença do Piauí
// Santa Rosa - Valença do Piauí

// LOTE 06
var andarai_moco = L.geoJSON(andarai_moco, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação comunitaria dos pequenos produtores rurais da Fazenda Mocó<br>Área: 914,7391 Ha<br>Perímetro: 18822,3974 m<br>Quantidade de famílias: 45<br>Município: Andaraí - BA'
  );

var itaberaba_valedoprogresso = L.geoJSON(itaberaba_valedoprogresso, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação comunitaria Vale do Progresso<br>Área: 488,9613 Ha<br>Perímetro: 11710.6588 m<br>Quantidade de famílias: 25<br>Município: Itaberaba - BA'
  );

var jussara_araripina = L.geoJSON(jussara_araripina, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação dos pequenos produtores rurais da Fazenda Araripina<br>Área: 887,8282 Ha<br>Perímetro: 14707,4951 m<br>Quantidade de famílias: 29<br>Município: Jussara - BA'
  );

var jussara_morrodohigino = L.geoJSON(jussara_morrodohigino, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação comunitaria dos moradores e de pequenos produtores rurais do Morro do Hígino<br>Área: 887,8282 Ha<br>Perímetro: 14707,4951 m<br>Quantidade de famílias: 29<br>Município: Jussara - BA'
  );

var lencois_padrecicero = L.geoJSON(lencois_padrecicero, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação dos trabalhadores rurais da Fazenda Padre Cicero<br>Área: 514,5827 Ha<br>Perímetro: 12389,3851 m<br>Quantidade de famílias: 29<br>Município: Lencóis - BA'
  );

var piritiba_ruralesperanca = L.geoJSON(piritiba_ruralesperanca, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação Rural Esperança<br>Área: 290,0147 Ha<br>Perímetro: 10577,4929 m<br>Quantidade de famílias: 27<br>Município: Piritiba - BA'
  );

var saogabriel_esplanada = L.geoJSON(saogabriel_esplanada, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação de produtores rurais da Fazenda Esplanada<br>Área: 782,2154 Ha<br>Perímetro: 12555.195 m<br>Quantidade de famílias: 25<br>Município: São Gabriel - BA'
  );

var saogabriel_novosbandeirantes = L.geoJSON(saogabriel_novosbandeirantes, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação comunitaria de Novos Bandeirantes<br>Área: 482,3098 Ha<br>Perímetro: 11213,5838 m<br>Quantidade de famílias: 37<br>Município: São Gabriel - BA'
  );

// LOTE 07
var coribe_bora = L.geoJSON(coribe_bora, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação comunitaria do Borá<br>Área: 1007,2972 Ha<br>Perímetro: 14568,9456 m<br>Quantidade de famílias: 37<br>Município: Coribe - BA'
  );

var coribe_ranchinho = L.geoJSON(coribe_ranchinho, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação dos moradores e produtores de Ranchinho e Água Branca<br>Área: 1165,7004 Ha<br>Perímetro: 17538,4242 m<br>Quantidade de famílias: 53<br>Município: Coribe - BA'
  );

var saofelixdocoribe_boasorte = L.geoJSON(saofelixdocoribe_boasorte, {
  color: 'red',
  opacity: 1
})
  .addTo(map)
  .bindPopup(
    'Associação de pequenos produtores de São Félix do Coribe - Boa Sorte<br>Área: 1054,1858 Ha<br>Perímetro: 15687,7156 m<br>Quantidade de famílias: 40<br>Município: São Felix do Coribe - BA'
  );

var saofelixdocoribe_parquedeexposicao = L.geoJSON(
  saofelixdocoribe_parquedeexposicao,
  {
    color: 'red',
    opacity: 1
  }
)
  .addTo(map)
  .bindPopup(
    'Associação dos moradores e trabalhadores de Parque de Exposição<br>Área: 677,7417 Ha<br>Perímetro: 15906,4137 m<br>Quantidade de famílias: 40<br>Município: São Felix do Coribe - BA'
  );

var saofelixdocoribe_santamariadavitoria = L.geoJSON(
  saofelixdocoribe_santamariadavitoria,
  {
    color: 'red',
    opacity: 1
  }
)
  .addTo(map)
  .bindPopup(
    'Associação dos pequenos produtores rurais de Santa Maria da Vitória - Lontra<br>Área: 799,1012 Ha<br>Perímetro: 13508,7186 m<br>Quantidade de famílias: 33<br>Município: São Felix do Coribe - BA'
  );

//grupo de camadas bases
var baseMaps = [
  {
    groupName: 'Camadas Bases',
    layers: {
      OpenStreetMap: osm,
      'Google Satelite': googleSat,
      'Esri World Imagery': ewi,
      'Esri World Topo Map': ewtm
    }
  }
];

//grupo de camadas com as divisões politicas e os assentamentos
var overlayers = [
  {
    groupName: 'Assentamentos Piauí',
    layers: {
      'Semiárido': limite_semiarido,
      // 'Municípios do Piauí': municipios_piaui,
      
      // Lote 01 - Faltam quatro
      'Maganos': batalha_maganos,
      // Terra Ativa - Batalha
      'Bacabas': batalha_bacabas,
      // Santa Maria - Batalha
      'Pedra Branca': pedroii_pedrabranca,
      'Sabiá': piripiri_sabia,
      // Palmeira II - Piripiri
      // Montivideo - Piripiri
      
      // Lote 02 - Faltam dois
      'Santa Cruz': jatoba_santa_luz,
      // Santa Paz - Sigefredo Pacheco
      // José de Dentro - Castelo do Piauí
      'Cana Brava': buritidosmontes_canabrava,
      
      // Lote 03 - Falta um
      'Buritizinho': beneditinos_buritizinho,
      'Lembrada': josedefreitas_lembrada,
      'Alto Alegre': josedefreitas_altoalegre,
      'Sol Nascente': josedefreitas_solnascente,
      // Espraiado - Demerval Lobão
      'Caitetus': teresina_caitetus,
      'Bom Sossêgo': teresina_bomsossego,
      
      // Lote 04 - Faltam três
      'Canela de Velho': floriano_caneladevelho,
      // Casa Nova - Itaueira
      // Lagoa do Vento - Itaueira
      'Lagoa dos Cocos': jardimdomulato_lagoadoscocos,
      'Espirito Santo': lagoadopiaui_espiritosanto,
      // Todos os Santos - São Pedro do Piauí
      
      // Lote 05 - Falta três
      'Barro Vermelho': aroazes_barrovermelho,
      'Caraíbas': elesbaoveloso_caraibas,
      // Vila Nova - Santa Cruz
      "Mãe D'Água": novooriente_maedagua,
      // Ininga - Valança do Piauí
      // São José - Valença do Piauí
      // Santa Rosa - Valença do Piauí
    }
  },
  {
    groupName: 'Assentamentos Bahia',
    layers: {
      // Lote 06
      'Fazenda Mocó': andarai_moco,
      'Vale do Progresso': itaberaba_valedoprogresso,
      'Fazenda Araripina': jussara_araripina,
      'Morro do Higino': jussara_morrodohigino,
      'Fazenda Padre Cicero': lencois_padrecicero,
      'Rural Esperança': piritiba_ruralesperanca,
      'Fazenda Esplanada': saogabriel_esplanada,
      'Novos Bandeirantes': saogabriel_novosbandeirantes,
      
      // Lote 07
      'Bora': coribe_bora,
      'Ranchinho': coribe_ranchinho,
      'Boa sorte': saofelixdocoribe_boasorte,
      'Parque de Exposição': saofelixdocoribe_parquedeexposicao,
      'Santa Maria da Vitória': saofelixdocoribe_santamariadavitoria
    }
  }
];

// Coordenadas da posição do mouse no mapa
L.control
  .mousePosition({
    position: 'bottomleft',
    separator: ';',
    numDigits: 6
  })
  .addTo(map);

// Plugin Leaflet.NavBar
L.control
  .navbar({
    position: 'topleft'
  })
  .addTo(map);

// zoom na área
L.Control.boxzoom({ position: 'topleft' }).addTo(map);

// medir área no mapa
var measureControl = L.control
  .measure({
    position: 'topleft',
    primaryAreaUnit: 'hectares', // Unidade de área
    primaryLengthUnit: 'kilometers', // Unidade de distancia
    secondaryLengthUnit: 'meters', // Unidade de distancia
    localization: 'pt-br'
  })
  .addTo(map);

//estilo do controlador de camadas
var optionsControl = {
  container_width: '300px',
  container_maxHeight: '500px',
  group_maxHeight: '200px',
  exclusive: false,
  collapsed: true
};

//controlador de camadas
var control = L.Control.styledLayerControl(baseMaps, overlayers, optionsControl);
map.addControl(control);

//controle de escala
L.control.scale().addTo(map);
