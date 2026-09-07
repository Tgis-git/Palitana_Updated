var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.938000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Landsat9_SR_AllBands_2026_May_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat9_SR_AllBands_2026_May<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat9_SR_AllBands_2026_May_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat9_SR_AllBands_2025_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat9_SR_AllBands_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat9_SR_AllBands_2025_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat8_SR_AllBands_2018_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat8_SR_AllBands_2018<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat8_SR_AllBands_2018_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_2008_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_2008<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_2008_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_1998_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_1998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_1998_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat7_SR_AllBands_1989_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat7_SR_AllBands_1989<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat7_SR_AllBands_1989_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984770.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_Landsat3_MSS_AllBands_1980_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landsat3_MSS_AllBands_1980<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Landsat3_MSS_AllBands_1980_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984740.000000, 2445829.459945, 7995180.000000, 2453051.128227]
        })
    });
var lyr_1980_FRG_10 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980_FRG<br />\
    <img src="styles/legend/1980_FRG_10_0.png" /> Patch<br />\
    <img src="styles/legend/1980_FRG_10_1.png" /> Edge<br />\
    <img src="styles/legend/1980_FRG_10_2.png" /> Perforated<br />\
    <img src="styles/legend/1980_FRG_10_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1980_FRG_10_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_FRG_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_1989_FRG_11 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989_FRG<br />\
    <img src="styles/legend/1989_FRG_11_0.png" /> Patch<br />\
    <img src="styles/legend/1989_FRG_11_1.png" /> Edge<br />\
    <img src="styles/legend/1989_FRG_11_2.png" /> Perforated<br />\
    <img src="styles/legend/1989_FRG_11_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1989_FRG_11_4.png" /> Core (250-500 acres) <br />\
    <img src="styles/legend/1989_FRG_11_5.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_FRG_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878618]
        })
    });
var lyr_1998_FRG_12 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998_FRG<br />\
    <img src="styles/legend/1998_FRG_12_0.png" /> Patch<br />\
    <img src="styles/legend/1998_FRG_12_1.png" /> Edge<br />\
    <img src="styles/legend/1998_FRG_12_2.png" /> Perforated<br />\
    <img src="styles/legend/1998_FRG_12_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/1998_FRG_12_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_FRG_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878618]
        })
    });
var lyr_2008_FRG_13 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008_FRG<br />\
    <img src="styles/legend/2008_FRG_13_0.png" /> Patch<br />\
    <img src="styles/legend/2008_FRG_13_1.png" /> Edge<br />\
    <img src="styles/legend/2008_FRG_13_2.png" /> Perforated<br />\
    <img src="styles/legend/2008_FRG_13_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2008_FRG_13_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_FRG_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178272, 2453203.878623]
        })
    });
var lyr_2018_FRG_14 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018_FRG<br />\
    <img src="styles/legend/2018_FRG_14_0.png" /> Patch<br />\
    <img src="styles/legend/2018_FRG_14_1.png" /> Edge<br />\
    <img src="styles/legend/2018_FRG_14_2.png" /> Perforated<br />\
    <img src="styles/legend/2018_FRG_14_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2018_FRG_14_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_FRG_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178272, 2453203.878623]
        })
    });
var lyr_2025_FRG_15 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025_FRG<br />\
    <img src="styles/legend/2025_FRG_15_0.png" /> Patch<br />\
    <img src="styles/legend/2025_FRG_15_1.png" /> Edge<br />\
    <img src="styles/legend/2025_FRG_15_2.png" /> Perforated<br />\
    <img src="styles/legend/2025_FRG_15_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2025_FRG_15_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_FRG_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.256726, 2453156.784284]
        })
    });
var lyr_2026_FRG_16 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026_FRG<br />\
    <img src="styles/legend/2026_FRG_16_0.png" /> Patch<br />\
    <img src="styles/legend/2026_FRG_16_1.png" /> Edge<br />\
    <img src="styles/legend/2026_FRG_16_2.png" /> Perforated<br />\
    <img src="styles/legend/2026_FRG_16_3.png" /> Core (<250 acres)<br />\
    <img src="styles/legend/2026_FRG_16_4.png" /> Core (>500 acres)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_FRG_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178264, 2453203.878587]
        })
    });
var lyr_1980_FNF_17 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980_F&NF<br />\
    <img src="styles/legend/1980_FNF_17_0.png" /> 1<br />\
    <img src="styles/legend/1980_FNF_17_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_FNF_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_1989_FNF_18 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989_F&NF<br />\
    <img src="styles/legend/1989_FNF_18_0.png" /> 1<br />\
    <img src="styles/legend/1989_FNF_18_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_FNF_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_1998_FNF_19 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998_F&NF<br />\
    <img src="styles/legend/1998_FNF_19_0.png" /> 1<br />\
    <img src="styles/legend/1998_FNF_19_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_FNF_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2008_FNF_20 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008_F&NF<br />\
    <img src="styles/legend/2008_FNF_20_0.png" /> 1<br />\
    <img src="styles/legend/2008_FNF_20_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_FNF_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_2018_FNF_21 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018_F&NF<br />\
    <img src="styles/legend/2018_FNF_21_0.png" /> 1<br />\
    <img src="styles/legend/2018_FNF_21_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_FNF_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_2025_FNF_22 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025_F&NF<br />\
    <img src="styles/legend/2025_FNF_22_0.png" /> 1<br />\
    <img src="styles/legend/2025_FNF_22_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_FNF_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.453539, 2453167.736062]
        })
    });
var lyr_2026_FNF_23 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026_F&NF<br />\
    <img src="styles/legend/2026_FNF_23_0.png" /> 1<br />\
    <img src="styles/legend/2026_FNF_23_1.png" /> 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_FNF_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1989over1980_24 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989over1980<br />\
    <img src="styles/legend/1989over1980_24_0.png" /> VDF - VDF<br />\
    <img src="styles/legend/1989over1980_24_1.png" /> MDF - VDF<br />\
    <img src="styles/legend/1989over1980_24_2.png" /> VDF - MDF<br />\
    <img src="styles/legend/1989over1980_24_3.png" /> OF - VDF<br />\
    <img src="styles/legend/1989over1980_24_4.png" /> MDF- MDF<br />\
    <img src="styles/legend/1989over1980_24_5.png" /> VDF - OF<br />\
    <img src="styles/legend/1989over1980_24_6.png" /> SCRUB - VDF<br />\
    <img src="styles/legend/1989over1980_24_7.png" /> OF - MDF<br />\
    <img src="styles/legend/1989over1980_24_8.png" /> MDF - OF<br />\
    <img src="styles/legend/1989over1980_24_9.png" /> VDF - SCRUB<br />\
    <img src="styles/legend/1989over1980_24_10.png" /> SCRUB - MDF<br />\
    <img src="styles/legend/1989over1980_24_11.png" /> OF - OF<br />\
    <img src="styles/legend/1989over1980_24_12.png" /> MDF - SCRUB<br />\
    <img src="styles/legend/1989over1980_24_13.png" /> NF - MDF<br />\
    <img src="styles/legend/1989over1980_24_14.png" /> SCRUB - OF<br />\
    <img src="styles/legend/1989over1980_24_15.png" /> OF - SCRUB<br />\
    <img src="styles/legend/1989over1980_24_16.png" /> MDF - NF<br />\
    <img src="styles/legend/1989over1980_24_17.png" /> NF - OF<br />\
    <img src="styles/legend/1989over1980_24_18.png" /> SCRUB - SCRUB<br />\
    <img src="styles/legend/1989over1980_24_19.png" /> OF - NF<br />\
    <img src="styles/legend/1989over1980_24_20.png" /> NF - SCRUB<br />\
    <img src="styles/legend/1989over1980_24_21.png" /> SCRUB - NF<br />\
    <img src="styles/legend/1989over1980_24_22.png" /> NF - NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989over1980_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984677.328177, 2445729.450996, 7995263.936034, 2453171.085062]
        })
    });
var lyr_1998over1989_25 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998over1989<br />\
    <img src="styles/legend/1998over1989_25_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/1998over1989_25_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/1998over1989_25_2.png" /> VDF-MDF<br />\
    <img src="styles/legend/1998over1989_25_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/1998over1989_25_4.png" /> MDF-OF<br />\
    <img src="styles/legend/1998over1989_25_5.png" /> OF-OF<br />\
    <img src="styles/legend/1998over1989_25_6.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/1998over1989_25_7.png" /> SCRUB-OF<br />\
    <img src="styles/legend/1998over1989_25_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/1998over1989_25_9.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/1998over1989_25_10.png" /> OF-NF<br />\
    <img src="styles/legend/1998over1989_25_11.png" /> NF-SCRUB<br />\
    <img src="styles/legend/1998over1989_25_12.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998over1989_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_2008over1998_26 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008over1998<br />\
    <img src="styles/legend/2008over1998_26_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2008over1998_26_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/2008over1998_26_2.png" /> MDF-MDF<br />\
    <img src="styles/legend/2008over1998_26_3.png" /> OF-VDF<br />\
    <img src="styles/legend/2008over1998_26_4.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2008over1998_26_5.png" /> OF-MDF<br />\
    <img src="styles/legend/2008over1998_26_6.png" /> MDF-NF<br />\
    <img src="styles/legend/2008over1998_26_7.png" /> OF-OF<br />\
    <img src="styles/legend/2008over1998_26_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2008over1998_26_9.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2008over1998_26_10.png" /> OF-NF<br />\
    <img src="styles/legend/2008over1998_26_11.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2008over1998_26_12.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2008over1998_26_13.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2008over1998_26_14.png" /> NF-OF<br />\
    <img src="styles/legend/2008over1998_26_15.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2008over1998_26_16.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008over1998_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2018over2008_27 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018over2008<br />\
    <img src="styles/legend/2018over2008_27_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2018over2008_27_1.png" /> MDF-VDF<br />\
    <img src="styles/legend/2018over2008_27_2.png" /> VDF-MDF<br />\
    <img src="styles/legend/2018over2008_27_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/2018over2008_27_4.png" /> VDF-OF<br />\
    <img src="styles/legend/2018over2008_27_5.png" /> OF-MDF<br />\
    <img src="styles/legend/2018over2008_27_6.png" /> MDF-OF<br />\
    <img src="styles/legend/2018over2008_27_7.png" /> VDF-SCRUB<br />\
    <img src="styles/legend/2018over2008_27_8.png" /> NF-VDF<br />\
    <img src="styles/legend/2018over2008_27_9.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2018over2008_27_10.png" /> OF-OF<br />\
    <img src="styles/legend/2018over2008_27_11.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2018over2008_27_12.png" /> NF-MDF<br />\
    <img src="styles/legend/2018over2008_27_13.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2018over2008_27_14.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2018over2008_27_15.png" /> MDF-NF<br />\
    <img src="styles/legend/2018over2008_27_16.png" /> NF-OF<br />\
    <img src="styles/legend/2018over2008_27_17.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2018over2008_27_18.png" /> OF-NF<br />\
    <img src="styles/legend/2018over2008_27_19.png" /> NF-SCURB<br />\
    <img src="styles/legend/2018over2008_27_20.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2018over2008_27_21.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018over2008_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2025over2018_28 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025over2018<br />\
    <img src="styles/legend/2025over2018_28_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2025over2018_28_1.png" /> VDF-MDF<br />\
    <img src="styles/legend/2025over2018_28_2.png" /> MDF-VDF<br />\
    <img src="styles/legend/2025over2018_28_3.png" /> MDF-MDF<br />\
    <img src="styles/legend/2025over2018_28_4.png" /> MDF-OF<br />\
    <img src="styles/legend/2025over2018_28_5.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2025over2018_28_6.png" /> MDF-NF<br />\
    <img src="styles/legend/2025over2018_28_7.png" /> OF-OF<br />\
    <img src="styles/legend/2025over2018_28_8.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2025over2018_28_9.png" /> OF-NF<br />\
    <img src="styles/legend/2025over2018_28_10.png" /> SCRUB - VDF<br />\
    <img src="styles/legend/2025over2018_28_11.png" /> SCRUB-MDF<br />\
    <img src="styles/legend/2025over2018_28_12.png" /> SCRUB-OF<br />\
    <img src="styles/legend/2025over2018_28_13.png" /> SCRUB-SCRUB<br />\
    <img src="styles/legend/2025over2018_28_14.png" /> SCRUB-NF<br />\
    <img src="styles/legend/2025over2018_28_15.png" /> NF-MDF<br />\
    <img src="styles/legend/2025over2018_28_16.png" /> NF-OF<br />\
    <img src="styles/legend/2025over2018_28_17.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2025over2018_28_18.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025over2018_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2026over2025_29 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026over2025<br />\
    <img src="styles/legend/2026over2025_29_0.png" /> VDF-VDF<br />\
    <img src="styles/legend/2026over2025_29_1.png" /> VDF-MDF<br />\
    <img src="styles/legend/2026over2025_29_2.png" /> VDF-OF<br />\
    <img src="styles/legend/2026over2025_29_3.png" /> VDF-SCRUB<br />\
    <img src="styles/legend/2026over2025_29_4.png" /> MDF-VDF<br />\
    <img src="styles/legend/2026over2025_29_5.png" /> MDF-MDF<br />\
    <img src="styles/legend/2026over2025_29_6.png" /> MDF-OF<br />\
    <img src="styles/legend/2026over2025_29_7.png" /> MDF-SCRUB<br />\
    <img src="styles/legend/2026over2025_29_8.png" /> OF-VDF<br />\
    <img src="styles/legend/2026over2025_29_9.png" /> OF-MDF<br />\
    <img src="styles/legend/2026over2025_29_10.png" /> OF-OF<br />\
    <img src="styles/legend/2026over2025_29_11.png" /> OF-SCRUB<br />\
    <img src="styles/legend/2026over2025_29_12.png" /> OF-NF<br />\
    <img src="styles/legend/2026over2025_29_13.png" /> SCRUB-VDF<br />\
    <img src="styles/legend/2026over2025_29_14.png" /> SCRUB - MDF<br />\
    <img src="styles/legend/2026over2025_29_15.png" /> SCRUB - OF<br />\
    <img src="styles/legend/2026over2025_29_16.png" /> SCRUB - SCRUB<br />\
    <img src="styles/legend/2026over2025_29_17.png" /> SCRUB - NF<br />\
    <img src="styles/legend/2026over2025_29_18.png" /> NF-SCRUB<br />\
    <img src="styles/legend/2026over2025_29_19.png" /> NF-NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026over2025_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var format_Forest_Type_2023_30 = new ol.format.GeoJSON();
var features_Forest_Type_2023_30 = format_Forest_Type_2023_30.readFeatures(json_Forest_Type_2023_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_Type_2023_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_Type_2023_30.addFeatures(features_Forest_Type_2023_30);
var lyr_Forest_Type_2023_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_Type_2023_30, 
                style: style_Forest_Type_2023_30,
                popuplayertitle: 'Forest_Type_2023',
                interactive: true,
    title: 'Forest_Type_2023<br />\
    <img src="styles/legend/Forest_Type_2023_30_0.png" /> 3B/C2 Southern moist mixed deciduous forest<br />\
    <img src="styles/legend/Forest_Type_2023_30_1.png" /> 5/DS4 Dry Grassland<br />\
    <img src="styles/legend/Forest_Type_2023_30_2.png" /> 5/E 8c Salvadora-T amarix scrub<br />\
    <img src="styles/legend/Forest_Type_2023_30_3.png" /> 5/E1 Anogeissus pendula Foorest<br />\
    <img src="styles/legend/Forest_Type_2023_30_4.png" /> 5/E1 anogeissus pendula forest<br />\
    <img src="styles/legend/Forest_Type_2023_30_5.png" /> 5/E1 Anogeissus pendula forest<br />\
    <img src="styles/legend/Forest_Type_2023_30_6.png" /> 5/E1 Anogeissus pendula Forest<br />\
    <img src="styles/legend/Forest_Type_2023_30_7.png" /> 6/E4 Salvadora scrub<br />\
    <img src="styles/legend/Forest_Type_2023_30_8.png" /> Acacia senegal forest<br />\
    <img src="styles/legend/Forest_Type_2023_30_9.png" /> Water<br />' });
var format_Forest_cover_2023_1_31 = new ol.format.GeoJSON();
var features_Forest_cover_2023_1_31 = format_Forest_cover_2023_1_31.readFeatures(json_Forest_cover_2023_1_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_cover_2023_1_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_cover_2023_1_31.addFeatures(features_Forest_cover_2023_1_31);
var lyr_Forest_cover_2023_1_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_cover_2023_1_31, 
                style: style_Forest_cover_2023_1_31,
                popuplayertitle: 'Forest_cover_2023_1',
                interactive: true,
    title: 'Forest_cover_2023_1<br />\
    <img src="styles/legend/Forest_cover_2023_1_31_0.png" /> MODERATELY DENSE FOREST (Tree Canopy density 40% & above but < 70%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_31_1.png" /> OPEN FOREST (Tree Canopy density 10% & above but < 40%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_31_2.png" /> SCRUB (Tree Canopy density < 10%)<br />\
    <img src="styles/legend/Forest_cover_2023_1_31_3.png" /> WATER<br />' });
var lyr_Seived_1980_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1980<br />\
    <img src="styles/legend/Seived_1980_32_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1980_32_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1980_32_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1980_32_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1980_32_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1980_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984615.292221, 2445673.029361, 7995324.250586, 2453237.726772]
        })
    });
var lyr_Seived_1989_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1989<br />\
    <img src="styles/legend/Seived_1989_33_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1989_33_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1989_33_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1989_33_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1989_33_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1989_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_Seived_1998_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_1998<br />\
    <img src="styles/legend/Seived_1998_34_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_1998_34_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_1998_34_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_1998_34_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_1998_34_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_1998_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_Seived_2008_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2008<br />\
    <img src="styles/legend/Seived_2008_35_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2008_35_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2008_35_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2008_35_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2008_35_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2008_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_Seived_2018_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2018<br />\
    <img src="styles/legend/Seived_2018_36_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2018_36_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2018_36_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2018_36_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2018_36_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2018_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178265, 2453203.878623]
        })
    });
var lyr_Seived_2025_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2025<br />\
    <img src="styles/legend/Seived_2025_37_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2025_37_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2025_37_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2025_37_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2025_37_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2025_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984755.084040, 2445789.869989, 7995220.453539, 2453167.736062]
        })
    });
var lyr_Seived_2026_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Seived_2026<br />\
    <img src="styles/legend/Seived_2026_38_0.png" /> Barren<br />\
    <img src="styles/legend/Seived_2026_38_1.png" /> Builtup<br />\
    <img src="styles/legend/Seived_2026_38_2.png" /> Dense Vegetation<br />\
    <img src="styles/legend/Seived_2026_38_3.png" /> Scrub/Sparse<br />\
    <img src="styles/legend/Seived_2026_38_4.png" /> Waterbody<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Seived_2026_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_2026_39 = new ol.layer.Image({
        opacity: 1,
        
    title: '2026<br />\
    <img src="styles/legend/2026_39_0.png" /> VDF<br />\
    <img src="styles/legend/2026_39_1.png" /> MDF<br />\
    <img src="styles/legend/2026_39_2.png" /> OF<br />\
    <img src="styles/legend/2026_39_3.png" /> SCRUB<br />\
    <img src="styles/legend/2026_39_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2026_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2025_40 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025<br />\
    <img src="styles/legend/2025_40_0.png" /> VDF<br />\
    <img src="styles/legend/2025_40_1.png" /> MDF<br />\
    <img src="styles/legend/2025_40_2.png" /> OF<br />\
    <img src="styles/legend/2025_40_3.png" /> SCRUB<br />\
    <img src="styles/legend/2025_40_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2018_41 = new ol.layer.Image({
        opacity: 1,
        
    title: '2018<br />\
    <img src="styles/legend/2018_41_0.png" /> VDF<br />\
    <img src="styles/legend/2018_41_1.png" /> MDF<br />\
    <img src="styles/legend/2018_41_2.png" /> OF<br />\
    <img src="styles/legend/2018_41_3.png" /> SCRUB<br />\
    <img src="styles/legend/2018_41_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2018_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_2008_42 = new ol.layer.Image({
        opacity: 1,
        
    title: '2008<br />\
    <img src="styles/legend/2008_42_0.png" /> VDF<br />\
    <img src="styles/legend/2008_42_1.png" /> MDF<br />\
    <img src="styles/legend/2008_42_2.png" /> OF<br />\
    <img src="styles/legend/2008_42_3.png" /> SCRUB<br />\
    <img src="styles/legend/2008_42_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2008_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.073103, 2445689.153156, 7995274.178263, 2453203.878515]
        })
    });
var lyr_1998_43 = new ol.layer.Image({
        opacity: 1,
        
    title: '1998<br />\
    <img src="styles/legend/1998_43_0.png" /> VDF<br />\
    <img src="styles/legend/1998_43_1.png" /> MDF<br />\
    <img src="styles/legend/1998_43_2.png" /> OF<br />\
    <img src="styles/legend/1998_43_3.png" /> SCRUB<br />\
    <img src="styles/legend/1998_43_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1998_43.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1989_44 = new ol.layer.Image({
        opacity: 1,
        
    title: '1989<br />\
    <img src="styles/legend/1989_44_0.png" /> VDF<br />\
    <img src="styles/legend/1989_44_1.png" /> MDF<br />\
    <img src="styles/legend/1989_44_2.png" /> OF<br />\
    <img src="styles/legend/1989_44_3.png" /> SCRUB<br />\
    <img src="styles/legend/1989_44_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1989_44.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984676.072993, 2445689.153048, 7995274.178263, 2453203.878517]
        })
    });
var lyr_1980_45 = new ol.layer.Image({
        opacity: 1,
        
    title: '1980<br />\
    <img src="styles/legend/1980_45_0.png" /> VDF<br />\
    <img src="styles/legend/1980_45_1.png" /> MDF<br />\
    <img src="styles/legend/1980_45_2.png" /> OF<br />\
    <img src="styles/legend/1980_45_3.png" /> SCRUB<br />\
    <img src="styles/legend/1980_45_4.png" /> NF<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1980_45.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7984677.328177, 2445729.450996, 7995263.936034, 2453171.085062]
        })
    });
var format_PalitanaCadastralTGISDigitized_46 = new ol.format.GeoJSON();
var features_PalitanaCadastralTGISDigitized_46 = format_PalitanaCadastralTGISDigitized_46.readFeatures(json_PalitanaCadastralTGISDigitized_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PalitanaCadastralTGISDigitized_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalitanaCadastralTGISDigitized_46.addFeatures(features_PalitanaCadastralTGISDigitized_46);
var lyr_PalitanaCadastralTGISDigitized_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalitanaCadastralTGISDigitized_46, 
                style: style_PalitanaCadastralTGISDigitized_46,
                popuplayertitle: 'Palitana Cadastral (TGIS Digitized)',
                interactive: true,
                title: '<img src="styles/legend/PalitanaCadastralTGISDigitized_46.png" /> Palitana Cadastral (TGIS Digitized)'
            });
var format_CadastralKML_47 = new ol.format.GeoJSON();
var features_CadastralKML_47 = format_CadastralKML_47.readFeatures(json_CadastralKML_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CadastralKML_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CadastralKML_47.addFeatures(features_CadastralKML_47);
var lyr_CadastralKML_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CadastralKML_47, 
                style: style_CadastralKML_47,
                popuplayertitle: 'Cadastral (KML)',
                interactive: true,
                title: '<img src="styles/legend/CadastralKML_47.png" /> Cadastral (KML)'
            });
var format_WrongAdpurGochar20Acres_48 = new ol.format.GeoJSON();
var features_WrongAdpurGochar20Acres_48 = format_WrongAdpurGochar20Acres_48.readFeatures(json_WrongAdpurGochar20Acres_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WrongAdpurGochar20Acres_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WrongAdpurGochar20Acres_48.addFeatures(features_WrongAdpurGochar20Acres_48);
var lyr_WrongAdpurGochar20Acres_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WrongAdpurGochar20Acres_48, 
                style: style_WrongAdpurGochar20Acres_48,
                popuplayertitle: 'WrongAdpurGochar20Acres',
                interactive: true,
                title: '<img src="styles/legend/WrongAdpurGochar20Acres_48.png" /> WrongAdpurGochar20Acres'
            });
var format_Gauchar_49 = new ol.format.GeoJSON();
var features_Gauchar_49 = format_Gauchar_49.readFeatures(json_Gauchar_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gauchar_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gauchar_49.addFeatures(features_Gauchar_49);
var lyr_Gauchar_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gauchar_49, 
                style: style_Gauchar_49,
                popuplayertitle: 'Gauchar',
                interactive: true,
                title: '<img src="styles/legend/Gauchar_49.png" /> Gauchar'
            });
var format_Villages_50 = new ol.format.GeoJSON();
var features_Villages_50 = format_Villages_50.readFeatures(json_Villages_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Villages_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_50.addFeatures(features_Villages_50);
var lyr_Villages_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_50, 
                style: style_Villages_50,
                popuplayertitle: 'Villages',
                interactive: true,
                title: '<img src="styles/legend/Villages_50.png" /> Villages'
            });
var format_Forest_51 = new ol.format.GeoJSON();
var features_Forest_51 = format_Forest_51.readFeatures(json_Forest_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_51.addFeatures(features_Forest_51);
var lyr_Forest_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Forest_51, 
                style: style_Forest_51,
                popuplayertitle: 'Forest',
                interactive: true,
                title: '<img src="styles/legend/Forest_51.png" /> Forest'
            });
var format_Greenwash_52 = new ol.format.GeoJSON();
var features_Greenwash_52 = format_Greenwash_52.readFeatures(json_Greenwash_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Greenwash_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenwash_52.addFeatures(features_Greenwash_52);
var lyr_Greenwash_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenwash_52, 
                style: style_Greenwash_52,
                popuplayertitle: 'Greenwash',
                interactive: false,
                title: '<img src="styles/legend/Greenwash_52.png" /> Greenwash'
            });
var format_StudyArea_53 = new ol.format.GeoJSON();
var features_StudyArea_53 = format_StudyArea_53.readFeatures(json_StudyArea_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_53.addFeatures(features_StudyArea_53);
var lyr_StudyArea_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_53, 
                style: style_StudyArea_53,
                popuplayertitle: 'Study Area',
                interactive: false,
                title: '<img src="styles/legend/StudyArea_53.png" /> Study Area'
            });
var group_KML = new ol.layer.Group({
                                layers: [lyr_CadastralKML_47,lyr_WrongAdpurGochar20Acres_48,lyr_Gauchar_49,lyr_Villages_50,lyr_Forest_51,],
                                fold: 'open',
                                title: 'KML'});
var group_ForestCover = new ol.layer.Group({
                                layers: [lyr_2026_39,lyr_2025_40,lyr_2018_41,lyr_2008_42,lyr_1998_43,lyr_1989_44,lyr_1980_45,],
                                fold: 'close',
                                title: 'Forest Cover'});
var group_LULC = new ol.layer.Group({
                                layers: [lyr_Seived_1980_32,lyr_Seived_1989_33,lyr_Seived_1998_34,lyr_Seived_2008_35,lyr_Seived_2018_36,lyr_Seived_2025_37,lyr_Seived_2026_38,],
                                fold: 'close',
                                title: 'LULC'});
var group_FSI = new ol.layer.Group({
                                layers: [lyr_Forest_Type_2023_30,lyr_Forest_cover_2023_1_31,],
                                fold: 'close',
                                title: 'FSI'});
var group_Vegetation_change = new ol.layer.Group({
                                layers: [lyr_1989over1980_24,lyr_1998over1989_25,lyr_2008over1998_26,lyr_2018over2008_27,lyr_2025over2018_28,lyr_2026over2025_29,],
                                fold: 'close',
                                title: 'Vegetation_change'});
var group_ForestNonForest = new ol.layer.Group({
                                layers: [lyr_1980_FNF_17,lyr_1989_FNF_18,lyr_1998_FNF_19,lyr_2008_FNF_20,lyr_2018_FNF_21,lyr_2025_FNF_22,lyr_2026_FNF_23,],
                                fold: 'close',
                                title: 'Forest&NonForest'});
var group_FRAGSTAT = new ol.layer.Group({
                                layers: [lyr_1980_FRG_10,lyr_1989_FRG_11,lyr_1998_FRG_12,lyr_2008_FRG_13,lyr_2018_FRG_14,lyr_2025_FRG_15,lyr_2026_FRG_16,],
                                fold: 'close',
                                title: 'FRAGSTAT'});
var group_FCC = new ol.layer.Group({
                                layers: [lyr_Landsat9_SR_AllBands_2026_May_3,lyr_Landsat9_SR_AllBands_2025_4,lyr_Landsat8_SR_AllBands_2018_5,lyr_Landsat7_SR_AllBands_2008_6,lyr_Landsat7_SR_AllBands_1998_7,lyr_Landsat7_SR_AllBands_1989_8,lyr_Landsat3_MSS_AllBands_1980_9,],
                                fold: 'close',
                                title: 'FCC'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_Landsat9_SR_AllBands_2026_May_3.setVisible(false);lyr_Landsat9_SR_AllBands_2025_4.setVisible(false);lyr_Landsat8_SR_AllBands_2018_5.setVisible(false);lyr_Landsat7_SR_AllBands_2008_6.setVisible(false);lyr_Landsat7_SR_AllBands_1998_7.setVisible(false);lyr_Landsat7_SR_AllBands_1989_8.setVisible(false);lyr_Landsat3_MSS_AllBands_1980_9.setVisible(false);lyr_1980_FRG_10.setVisible(false);lyr_1989_FRG_11.setVisible(false);lyr_1998_FRG_12.setVisible(false);lyr_2008_FRG_13.setVisible(false);lyr_2018_FRG_14.setVisible(false);lyr_2025_FRG_15.setVisible(false);lyr_2026_FRG_16.setVisible(false);lyr_1980_FNF_17.setVisible(false);lyr_1989_FNF_18.setVisible(false);lyr_1998_FNF_19.setVisible(false);lyr_2008_FNF_20.setVisible(false);lyr_2018_FNF_21.setVisible(false);lyr_2025_FNF_22.setVisible(false);lyr_2026_FNF_23.setVisible(false);lyr_1989over1980_24.setVisible(false);lyr_1998over1989_25.setVisible(false);lyr_2008over1998_26.setVisible(false);lyr_2018over2008_27.setVisible(false);lyr_2025over2018_28.setVisible(false);lyr_2026over2025_29.setVisible(false);lyr_Forest_Type_2023_30.setVisible(false);lyr_Forest_cover_2023_1_31.setVisible(false);lyr_Seived_1980_32.setVisible(false);lyr_Seived_1989_33.setVisible(false);lyr_Seived_1998_34.setVisible(false);lyr_Seived_2008_35.setVisible(false);lyr_Seived_2018_36.setVisible(false);lyr_Seived_2025_37.setVisible(false);lyr_Seived_2026_38.setVisible(false);lyr_2026_39.setVisible(false);lyr_2025_40.setVisible(false);lyr_2018_41.setVisible(false);lyr_2008_42.setVisible(false);lyr_1998_43.setVisible(false);lyr_1989_44.setVisible(false);lyr_1980_45.setVisible(false);lyr_PalitanaCadastralTGISDigitized_46.setVisible(false);lyr_CadastralKML_47.setVisible(false);lyr_WrongAdpurGochar20Acres_48.setVisible(false);lyr_Gauchar_49.setVisible(false);lyr_Villages_50.setVisible(true);lyr_Forest_51.setVisible(false);lyr_Greenwash_52.setVisible(false);lyr_StudyArea_53.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_GoogleSatellite_2,group_FCC,group_FRAGSTAT,group_ForestNonForest,group_Vegetation_change,group_FSI,group_LULC,group_ForestCover,lyr_PalitanaCadastralTGISDigitized_46,group_KML,lyr_Greenwash_52,lyr_StudyArea_53];
lyr_Forest_Type_2023_30.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Forest_cover_2023_1_31.set('fieldAliases', {'Type': 'Type', 'ID': 'ID', });
lyr_PalitanaCadastralTGISDigitized_46.set('fieldAliases', {'id': 'id', 'Village': 'Village', 'Plot_No': 'Plot_No', 'layer': 'layer', 'path': 'path', });
lyr_CadastralKML_47.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', });
lyr_WrongAdpurGochar20Acres_48.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Gauchar_49.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Villages_50.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Forest_51.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Greenwash_52.set('fieldAliases', {'id': 'id', });
lyr_StudyArea_53.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'area': 'area', });
lyr_Forest_Type_2023_30.set('fieldImages', {'id': '', 'Type': '', });
lyr_Forest_cover_2023_1_31.set('fieldImages', {'Type': '', 'ID': '', });
lyr_PalitanaCadastralTGISDigitized_46.set('fieldImages', {'id': 'TextEdit', 'Village': 'TextEdit', 'Plot_No': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CadastralKML_47.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WrongAdpurGochar20Acres_48.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Gauchar_49.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Villages_50.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Forest_51.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Greenwash_52.set('fieldImages', {'id': '', });
lyr_StudyArea_53.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'area': '', });
lyr_Forest_Type_2023_30.set('fieldLabels', {'id': 'hidden field', 'Type': 'inline label - always visible', });
lyr_Forest_cover_2023_1_31.set('fieldLabels', {'Type': 'hidden field', 'ID': 'hidden field', });
lyr_PalitanaCadastralTGISDigitized_46.set('fieldLabels', {'id': 'hidden field', 'Village': 'inline label - always visible', 'Plot_No': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CadastralKML_47.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_WrongAdpurGochar20Acres_48.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Gauchar_49.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Villages_50.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Forest_51.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', });
lyr_Greenwash_52.set('fieldLabels', {'id': 'hidden field', });
lyr_StudyArea_53.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'area': 'hidden field', });
lyr_StudyArea_53.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});