// alert(typeof ol !== 'undefined' ? 'ol loaded' : 'ol not loaded');

// Ініціалізація карти
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM() // Використовуємо OpenStreetMap як джерело
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([115.085364, -8.608162]), // Координати центру (Jl. Raya Yeh Gangga)
        zoom: 15
    })
});

// Масив координат для маркерів
const markers = [
    [115.085364, -8.608162],
    [115.086500, -8.607100],
    [115.087600, -8.608500]
];

markers.forEach(coord => {
    const marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat(coord))
    });

    const vectorSource = new ol.source.Vector({
        features: [marker]
    });

    const markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 10,
                fill: new ol.style.Fill({ color: 'orange' }),
                stroke: new ol.style.Stroke({
                    color: 'white', width: 2
                })
            })
        })
    });

    map.addLayer(markerVectorLayer);
});