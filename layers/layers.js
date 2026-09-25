var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Clippedmask_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_1_0.png" /> 3<br />\
    <img src="styles/legend/Clippedmask_1_1.png" /> 40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12268710.000000, -896608.536472, 12303150.000000, -867381.272438]
        })
    });
var format_kerentananbanjir_2 = new ol.format.GeoJSON();
var features_kerentananbanjir_2 = format_kerentananbanjir_2.readFeatures(json_kerentananbanjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kerentananbanjir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kerentananbanjir_2.addFeatures(features_kerentananbanjir_2);
var lyr_kerentananbanjir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kerentananbanjir_2, 
                style: style_kerentananbanjir_2,
                popuplayertitle: 'kerentanan banjir',
                interactive: true,
    title: 'kerentanan banjir<br />\
    <img src="styles/legend/kerentananbanjir_2_0.png" /> Rendah<br />\
    <img src="styles/legend/kerentananbanjir_2_1.png" /> Sedang<br />\
    <img src="styles/legend/kerentananbanjir_2_2.png" /> Tinggi<br />' });
var format_Biomassshp_3 = new ol.format.GeoJSON();
var features_Biomassshp_3 = format_Biomassshp_3.readFeatures(json_Biomassshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biomassshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biomassshp_3.addFeatures(features_Biomassshp_3);
var lyr_Biomassshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biomassshp_3, 
                style: style_Biomassshp_3,
                popuplayertitle: 'Biomass.shp)',
                interactive: true,
    title: 'Biomass.shp)<br />\
    <img src="styles/legend/Biomassshp_3_0.png" /> Formasi Hutan<br />\
    <img src="styles/legend/Biomassshp_3_1.png" /> Tumbuhan Non-Hutan Lainnya<br />\
    <img src="styles/legend/Biomassshp_3_2.png" /> Sawah<br />\
    <img src="styles/legend/Biomassshp_3_3.png" /> Pertanian Lainnya<br />\
    <img src="styles/legend/Biomassshp_3_4.png" /> Non-Vegetasi Lainnya<br />\
    <img src="styles/legend/Biomassshp_3_5.png" /> Tambak<br />\
    <img src="styles/legend/Biomassshp_3_6.png" /> Sungai, Danau, Laut<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);lyr_kerentananbanjir_2.setVisible(true);lyr_Biomassshp_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Clippedmask_1,lyr_kerentananbanjir_2,lyr_Biomassshp_3];
lyr_kerentananbanjir_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kategori': 'Kategori', });
lyr_Biomassshp_3.set('fieldAliases', {'fid': 'fid', 'gridcode': 'gridcode', 'class_id': 'class_id', 'class_en': 'class_en', 'class_id_b': 'class_id_b', 'lv1_en': 'lv1_en', 'lv1_id': 'lv1_id', 'hex_color': 'hex_color', });
lyr_kerentananbanjir_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'Kategori': 'TextEdit', });
lyr_Biomassshp_3.set('fieldImages', {'fid': 'Range', 'gridcode': 'Range', 'class_id': 'Range', 'class_en': 'TextEdit', 'class_id_b': 'TextEdit', 'lv1_en': 'TextEdit', 'lv1_id': 'TextEdit', 'hex_color': 'TextEdit', });
lyr_kerentananbanjir_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Kategori': 'inline label - visible with data', });
lyr_Biomassshp_3.set('fieldLabels', {'fid': 'no label', 'gridcode': 'no label', 'class_id': 'no label', 'class_en': 'no label', 'class_id_b': 'inline label - visible with data', 'lv1_en': 'no label', 'lv1_id': 'no label', 'hex_color': 'no label', });
lyr_Biomassshp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});