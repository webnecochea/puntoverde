var wms_layers = [];

        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreet',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });var format_Plsticos_1 = new ol.format.GeoJSON();
var features_Plsticos_1 = format_Plsticos_1.readFeatures(json_Plsticos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plsticos_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Plsticos_1.addFeatures(features_Plsticos_1);var lyr_Plsticos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plsticos_1, 
                style: style_Plsticos_1,
                title: '<img src="styles/legend/Plsticos_1.png" /> Plásticos'
            });var format_Aluminio_2 = new ol.format.GeoJSON();
var features_Aluminio_2 = format_Aluminio_2.readFeatures(json_Aluminio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aluminio_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Aluminio_2.addFeatures(features_Aluminio_2);var lyr_Aluminio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aluminio_2, 
                style: style_Aluminio_2,
                title: '<img src="styles/legend/Aluminio_2.png" /> Aluminio'
            });var format_Aceites_3 = new ol.format.GeoJSON();
var features_Aceites_3 = format_Aceites_3.readFeatures(json_Aceites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aceites_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Aceites_3.addFeatures(features_Aceites_3);var lyr_Aceites_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aceites_3, 
                style: style_Aceites_3,
                title: '<img src="styles/legend/Aceites_3.png" /> Aceites'
            });var format_Cartnypapel_4 = new ol.format.GeoJSON();
var features_Cartnypapel_4 = format_Cartnypapel_4.readFeatures(json_Cartnypapel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cartnypapel_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Cartnypapel_4.addFeatures(features_Cartnypapel_4);var lyr_Cartnypapel_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cartnypapel_4, 
                style: style_Cartnypapel_4,
                title: '<img src="styles/legend/Cartnypapel_4.png" /> Cartón y papel'
            });var format_Tetrabrick_5 = new ol.format.GeoJSON();
var features_Tetrabrick_5 = format_Tetrabrick_5.readFeatures(json_Tetrabrick_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tetrabrick_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Tetrabrick_5.addFeatures(features_Tetrabrick_5);var lyr_Tetrabrick_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tetrabrick_5, 
                style: style_Tetrabrick_5,
                title: '<img src="styles/legend/Tetrabrick_5.png" /> Tetra brick'
            });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Plsticos_1.setVisible(true);lyr_Aluminio_2.setVisible(true);lyr_Aceites_3.setVisible(true);lyr_Cartnypapel_4.setVisible(true);lyr_Tetrabrick_5.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Plsticos_1,lyr_Aluminio_2,lyr_Aceites_3,lyr_Cartnypapel_4,lyr_Tetrabrick_5];
lyr_Plsticos_1.set('fieldAliases', {'Entidad_': 'Entidad_', 'Dirección': 'Dirección', 'Lugar_': 'Lugar_', });
lyr_Aluminio_2.set('fieldAliases', {'Entidad_': 'Entidad_', 'Dirección': 'Dirección', 'Lugar_': 'Lugar_', });
lyr_Aceites_3.set('fieldAliases', {'Entidad_': 'Entidad_', 'Dirección': 'Dirección', 'Lugar_': 'Lugar_', });
lyr_Cartnypapel_4.set('fieldAliases', {'Entidad_': 'Entidad_', 'Dirección': 'Dirección', 'Lugar_': 'Lugar_', });
lyr_Tetrabrick_5.set('fieldAliases', {'Entidad_': 'Entidad_', 'Dirección': 'Dirección', 'Lugar_': 'Lugar_', });
lyr_Plsticos_1.set('fieldImages', {'Entidad_': 'TextEdit', 'Dirección': 'TextEdit', 'Lugar_': 'TextEdit', });
lyr_Aluminio_2.set('fieldImages', {'Entidad_': 'TextEdit', 'Dirección': 'TextEdit', 'Lugar_': 'TextEdit', });
lyr_Aceites_3.set('fieldImages', {'Entidad_': 'TextEdit', 'Dirección': 'TextEdit', 'Lugar_': 'TextEdit', });
lyr_Cartnypapel_4.set('fieldImages', {'Entidad_': 'TextEdit', 'Dirección': 'TextEdit', 'Lugar_': 'TextEdit', });
lyr_Tetrabrick_5.set('fieldImages', {'Entidad_': 'TextEdit', 'Dirección': 'TextEdit', 'Lugar_': 'TextEdit', });
lyr_Plsticos_1.set('fieldLabels', {'Entidad_': 'inline label', 'Dirección': 'inline label', 'Lugar_': 'inline label', });
lyr_Aluminio_2.set('fieldLabels', {'Entidad_': 'inline label', 'Dirección': 'inline label', 'Lugar_': 'inline label', });
lyr_Aceites_3.set('fieldLabels', {'Entidad_': 'inline label', 'Dirección': 'inline label', 'Lugar_': 'inline label', });
lyr_Cartnypapel_4.set('fieldLabels', {'Entidad_': 'inline label', 'Dirección': 'inline label', 'Lugar_': 'inline label', });
lyr_Tetrabrick_5.set('fieldLabels', {'Entidad_': 'inline label', 'Dirección': 'inline label', 'Lugar_': 'inline label', });
lyr_Tetrabrick_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
