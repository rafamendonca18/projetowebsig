const apiKey = 'pk.eyJ1IjoicmFmYW1lbmRvbmNhMTgiLCJhIjoiY2t4ajhpeWRyMHViZjJwdWJlaGlreDVwMyJ9.WV9Pvj_-eymnoA52IeMk3w'

const map = L.map('map').setView([41.165222, -8.650537], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// Áreas Administrativas
var concelho;
concelho = L.geoJSON(municipios,{
    style:shape});
concelho.addTo(map)

function corshape(d) {
    return d === 0  ? '#F5F500' :
              '';
}
/// Atribuir cor à densidade
function shape(feature) {
    return {
        fillColor: corshape(feature.properties.fid),
        fillOpacity: 0.5,
        weight: 2,
        color: 'grey',
        dashArray: '1',  
};
}
// Pop-up Marks
var musicaimg = L.icon ({
    iconUrl: 'casamusica.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var edificioimg = L.icon ({
    iconUrl: 'transparente.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var joseimg = L.icon ({
    iconUrl: 'jose.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var civicoimg = L.icon ({
    iconUrl: 'civico.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var escolaimg = L.icon ({
    iconUrl: 'escola.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var i3simg = L.icon ({
    iconUrl: 'i3s.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var cooplord = L.icon ({
    iconUrl: 'cooplordelo.png',
    iconSize: [100, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var parque = L.icon ({
    iconUrl: 'auto.png',
    iconSize: [100, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var caridade = L.icon ({
    iconUrl: 'cruz.png',
    iconSize: [100, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var escolapireslima = L.icon ({
    iconUrl: 'escolapires.png',
    iconSize: [100, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var igrejfoco = L.icon ({
    iconUrl: 'igrejafoco.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var casas = L.icon ({
    iconUrl: 'habitacao.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})
var mercsebast = L.icon ({
    iconUrl: 'sebastiao.png',
    iconSize: [120, 70],
    iconAnchor: [50, 50],
    popupAnchor: [20, -50]
})

// Add Marker
var foco = L.marker([41.161846, -8.646825], {icon: igrejfoco}),
    cooperativalordelo = L.marker([41.159106, -8.653338], {icon: cooplord}),
    silo = L.marker([41.152446, -8.606833], {icon: parque}),
    centrocaridade = L.marker([41.162727, -8.602759], {icon: caridade}),
    pireslima = L.marker([41.148850, -8.592842], {icon: escolapireslima}),
    sache = L.marker([41.170057, -8.662346], {icon: casas}),
    sebastiao = L.marker([41.143700, -8.611274], {icon: mercsebast}),
    casamusica = L.marker([41.158883, -8.630691], {icon: musicaimg}),
    ediftransparente = L.marker([41.171514, -8.687824], {icon: edificioimg}),
    saojose = L.marker([41.133870, -8.600140], {icon: joseimg}),
    custoias = L.marker([41.202459, -8.641265], {icon: civicoimg}),
    escolaleca = L.marker([41.217018, -8.632611], {icon: escolaimg}),
    i3s = L.marker([41.175651, -8.603092], {icon: i3simg});

// Add Pop-up
let imagem1 = `
    <h3 style="text-align:center">Cooperativa de Lordelo do Ouro</h3>
    <div style="text-align:center">
        <img width="150" height="150"src="cooperativa.jpg"/>
    </div>
    <p><strong>Ano:</strong> 1963<p>
    <p><strong>Morada:</strong> Rua Prof. Augusto Nobre 193, Porto</p>
`
cooperativalordelo.bindPopup(imagem1);

let imagem3 = `
<h3 style="text-align:center">Silo Auto</h3>
<div style="text-align:center">
    <img width="150" height="100"src="silo.jpg"/>
</div>
<p><strong>Ano:</strong> 1964<p>
<p><strong>Morada:</strong> Rua Guedes de Azevedo 180, Porto</p>
`
silo.bindPopup(imagem3);

let imagem4 = `
<h3 style="text-align:center">Centro de Caridade Nossa Senhora do Perpétuo Socorro</h3>
<div style="text-align:center">
    <img width="150" height="150"src="centro.jpg"/>
</div>
<p><strong>Ano:</strong> 1973<p>
<p><strong>Morada:</strong> Rua de Costa Cabral 120, Porto</p>
`
centrocaridade.bindPopup(imagem4);

let imagem5 = `
<h3 style="text-align:center">Escola Pires de Lima</h3>
<div style="text-align:center">
    <img width="150" height="150"src="pireslima.jpg"/>
</div>
<p><strong>Ano:</strong> 1972<p>
<p><strong>Morada:</strong> Rua de António Carneiro 290, Porto</p>
`
pireslima.bindPopup(imagem5);

let imagem6 = `
<h3 style="text-align:center">Igreja do Foco</h3>
<div style="text-align:center">
    <img width="150" height="150"src="foco.jpg"/>
</div>
<p><strong>Ano:</strong> 1979<p>
<p><strong>Morada:</strong> Rua Azevedo Coutinho 141, Porto</p>
`
foco.bindPopup(imagem6);

let imagem7 = `
<h3 style="text-align:center">Conjunto habitacional da cooperativa SACHE</h3>
<div style="text-align:center">
    <img width="150" height="150"src="sache.jpg"/>
</div>
<p><strong>Ano:</strong> 1989<p>
<p><strong>Morada:</strong> Rua de Moçambique, Porto</p>
`
sache.bindPopup(imagem7);

let imagem8 = `
<h3 style="text-align:center">Mercado de São Sebastião</h3>
<div style="text-align:center">
    <img width="150" height="100"src="mercadinho.jpg"/>
</div>
<p><strong>Ano:</strong> 1998<p>
<p><strong>Morada:</strong> Tv. de São Sebastião 25, Porto</p>
`
sebastiao.bindPopup(imagem8);

let imagem10 = `
<h3 style="text-align:center">Casa da Música</h3>
<div style="text-align:center">
    <img width="150" height="150"src="musicacasa.jpg"/>
</div>
<p><strong>Ano:</strong> 2005<p>
<p><strong>Morada:</strong> Av. da Boavista 604-610, Porto</p>
`
casamusica.bindPopup(imagem10);

let imagem11 = `
<h3 style="text-align:center">Edifício Transparente</h3>
<div style="text-align:center">
    <img width="150" height="150"src="edificio.jpg"/>
</div>
<p><strong>Ano:</strong> 2005<p>
<p><strong>Morada:</strong> Via do Castelo do Queijo 395, Porto</p>
`
ediftransparente.bindPopup(imagem11);

let imagem12 = `
<h3 style="text-align:center">Capela São José</h3>
<div style="text-align:center">
    <img width="150" height="150"src="capela.jpg"/>
</div>
<p><strong>Ano:</strong> 2005<p>
<p><strong>Morada:</strong> Rua Dr. Alfredo Faria de Magalhães 134, Vila Nova de Gaia</p>
`
saojose.bindPopup(imagem12);

let imagem13 = `
<h3 style="text-align:center">Centro Cívico de Custóias</h3>
<div style="text-align:center">
    <img width="150" height="150"src="centrociv.jpg"/>
</div>
<p><strong>Ano:</strong> 2006<p>
<p><strong>Morada:</strong> Largo Souto, Custóias</p>
`
custoias.bindPopup(imagem13);

let imagem14 = `
<h3 style="text-align:center">Escola EB2/3 Leça do Balio</h3>
<div style="text-align:center">
    <img width="150" height="150"src="escolinha.jpg"/>
</div>
<p><strong>Ano:</strong> 2013<p>
<p><strong>Morada:</strong> Alameda Dom Manuel Martins, Leça do Balio</p>
`
escolaleca.bindPopup(imagem14);

let imagem15 = `
<h3 style="text-align:center">i3s</h3>
<div style="text-align:center">
    <img width="150" height="150"src="instituto.jpg"/>
</div>
<p><strong>Ano:</strong> 2015<p>
<p><strong>Morada:</strong> Rua Alfredo Allen 208, Porto</p>
`
i3s.bindPopup(imagem15);


// Group Layers
var seculo20 = L.layerGroup([cooperativalordelo, silo, centrocaridade, pireslima, foco, sache, sebastiao]);
var seculo21 = L.layerGroup([casamusica, ediftransparente, saojose, custoias,escolaleca, i3s]);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

// Regiões Administrativas

// Layers
var baseLayers = {
    "Grayscale": grayscale,
    "Open Street Map": streets,
};

var overlays = {
    "Século XX": seculo20,
    "Século XXI": seculo21,
};

L.control.layers(baseLayers, overlays).addTo(map);
