function populateresultsTexas(feature) {
    console.log(feature);
    console.log(feature.properties['basin_name']);
    results = [];
    CharsUsed = [];
    resultscom = [];
    speciesresults = [];
    resultsAllChars = [];
    try {
        RegionSelectedName = feature.properties['Mussel_province'];
        RegionSelected = RegionSelectedName.replace(/\s+/g, '');
        RegionSelected = RegionSelected.replace(/[-]/g, '');
        RegionSelected = RegionSelected.replace(/[.]/g, '');
    }
    catch (err) {
        RegionSelectedName = feature.properties['basin_name'];
        RegionSelected = RegionSelectedName;
    }
    CharsUsed[0] = RegionSelected;
    for (var i = 0; i < AllTexasClams.length; i++) {
        if (AllTexasClams[i][RegionSelected] == 1 && AllTexasClams[i].Status != 'P') {
            speciesresults.push(AllTexasClams[i].ProperName);
            resultsAllChars.push(AllTexasClams[i]);
            if (AllTexasClams[i].ProperName == 'Pyganodon grandis') {
                results.push(AllTexasClams[i].ProperName + ' (elongate)');
                resultscom.push(AllTexasClams[i].CommonName);
            }
            else if (AllTexasClams[i].ProperName == 'Cyclonaias nodulata') {
                resultscom.push(AllTexasClams[i].CommonName);
                resultscom.push(AllTexasClams[i].CommonName);
                results.push(AllTexasClams[i].ProperName + ' (smooth)');
                results.push(AllTexasClams[i].ProperName + ' (rough)');
            }
            else if (AllTexasClams[i].ProperName == 'Cyclonaias pustulosa') {
                resultscom.push(AllTexasClams[i].CommonName);
                resultscom.push(AllTexasClams[i].CommonName);
                results.push(AllTexasClams[i].ProperName + ' (smooth)');
                results.push(AllTexasClams[i].ProperName + ' (rough)');
            }
            else if (AllTexasClams[i].sexualDimorphism == 1) {
                results.push(AllTexasClams[i].ProperName + ' (male)');
                results.push(AllTexasClams[i].ProperName + ' (female)');
                resultscom.push(AllTexasClams[i].CommonName);
                resultscom.push(AllTexasClams[i].CommonName);
            }
            else {
                resultscom.push(AllTexasClams[i].CommonName);
                results.push(AllTexasClams[i].ProperName);
            }
        }

    };
    if (RegionSelectedName.includes("_")){RegionSelectedName=RegionSelectedName.replace(/_/g, " ")}
    if (RegionSelectedName.includes("DASH")){RegionSelectedName=RegionSelectedName.replace(/DASH/g, "-")}
    $("#RegionSelect").html(RegionSelectedName + " : " + speciesresults.length);
}
function populateresults(feature) {
    console.log(feature);
    console.log(feature.properties['basin_name']);
    results = [];
    CharsUsed = [];
    resultscom = [];
    speciesresults = [];
    try {
        RegionSelectedName = feature.properties['Mussel_province'];
        RegionSelected = RegionSelectedName.replace(/\s+/g, '');
        RegionSelected = RegionSelected.replace(/[-]/g, '');
        RegionSelected = RegionSelected.replace(/[.]/g, '');
    }
    catch (err) {
        RegionSelectedName = feature.properties['basin_name'];
        RegionSelected = RegionSelectedName;
    }
    CharsUsed[0] = RegionSelected;
    for (var i = 0; i < AllClams.length; i++) {
        if (AllClams[i][RegionSelected] == 1 && AllClams[i].Status != 'P') {
            speciesresults.push(AllClams[i].ProperName);
            resultsAllChars.push(AllClams[i]);
            if (AllClams[i].ProperName == 'Pyganodon grandis') {
                results.push(AllClams[i].ProperName + ' (elongate)');
                resultscom.push(AllClams[i].CommonName);
            }
            else if (AllClams[i].ProperName == 'Cyclonaias nodulata') {
                resultscom.push(AllClams[i].CommonName);
                resultscom.push(AllClams[i].CommonName);
                results.push(AllClams[i].ProperName + ' (smooth)');
                results.push(AllClams[i].ProperName + ' (rough)');
            }
            else if (AllClams[i].ProperName == 'Cyclonaias pustulosa') {
                resultscom.push(AllClams[i].CommonName);
                resultscom.push(AllClams[i].CommonName);
                results.push(AllClams[i].ProperName + ' (smooth)');
                results.push(AllClams[i].ProperName + ' (rough)');
            }
            else if (AllClams[i].sexualDimorphism == 1) {
                results.push(AllClams[i].ProperName + ' (male)');
                results.push(AllClams[i].ProperName + ' (female)');
                resultscom.push(AllClams[i].CommonName);
                resultscom.push(AllClams[i].CommonName);
            }
            else {
                resultscom.push(AllClams[i].CommonName);
                results.push(AllClams[i].ProperName);
            }
        }

    };

    $("#RegionSelect").html(RegionSelectedName + ": " + speciesresults.length);
};
function riverbasin_feature(feature, layer) {
    layer.on({
        click: function (e) {
            let basin_name = (String(feature.properties['basin_name']));
            if (basin_name.includes("DASH")){basin_name = basin_name.replace(/DASH/g,"-")};
            if (basin_name.includes("_")){basin_name = basin_name.replace(/_/g," ")};
            var popupContent = '<table>\
            <tr>\
                <td colspan="2">River Basin Selected:<br /><strong>' + (basin_name !== null ? Autolinker.link(String(basin_name)) : '')  + '</strong></td>\
            </tr>\
            <tr>\
                <td colspan="2">Species in this River Basin:<br /><strong>' + (feature.properties['NumSpecies'] !== null ? Autolinker.link(String(feature.properties['NumSpecies'])) : '') + '</strong></td>\
            </tr>\
        </table>';
            layer.bindPopup(popupContent, { maxHeight: 400 });
            populateresultsTexas(feature)
        }
    })
}
function riverbasinselect(feature, map, bounds_group) {
    RegionSelectedName = feature.properties['Mussel_province'];
    console.log(RegionSelectedName);
    switch (RegionSelectedName) {
        case 'Central Texas':
            //    map.removeLayer(layer_cb2017usstate500k_0);

            //Nora start copying from here

            map.createPane('pane_Brazos_0');
            map.getPane('pane_Brazos_0').style.zIndex = 400;
            map.getPane('pane_Brazos_0').style['mix-blend-mode'] = 'normal';
            var layer_Brazos_0 = new L.geoJson(json_Brazos_0, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Brazos_0',
                style: style_Brazos_0,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Brazos_0);
            map.addLayer(layer_Brazos_0);

            map.createPane('pane_BrazosColorado_1');
            map.getPane('pane_BrazosColorado_1').style.zIndex = 400;
            map.getPane('pane_BrazosColorado_1').style['mix-blend-mode'] = 'normal';
            var layer_BrazosColorado_1 = new L.geoJson(json_BrazosColorado_1, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_BrazosColorado_1',
                style: style_BrazosColorado_1,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_BrazosColorado_1);
            map.addLayer(layer_BrazosColorado_1);
            

            map.createPane('pane_Colorado_2');
            map.getPane('pane_Colorado_2').style.zIndex = 400;
            map.getPane('pane_Colorado_2').style['mix-blend-mode'] = 'normal';
            var layer_Colorado_2 = new L.geoJson(json_Colorado_2, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Colorado_2',
                style: style_Colorado_2,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Colorado_2);
            map.addLayer(layer_Colorado_2);
            

            map.createPane('pane_ColoradoLavaca_3');
            map.getPane('pane_ColoradoLavaca_3').style.zIndex = 400;
            map.getPane('pane_ColoradoLavaca_3').style['mix-blend-mode'] = 'normal';
            var layer_ColoradoLavaca_3 = new L.geoJson(json_ColoradoLavaca_3, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_ColoradoLavaca_3',
                style: style_ColoradoLavaca_3,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_ColoradoLavaca_3);
            map.addLayer(layer_ColoradoLavaca_3);


            map.createPane('pane_Guadalupe_4');
            map.getPane('pane_Guadalupe_4').style.zIndex = 400;
            map.getPane('pane_Guadalupe_4').style['mix-blend-mode'] = 'normal';
            var layer_Guadalupe_4 = new L.geoJson(json_Guadalupe_4, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Guadalupe_4',
                style: style_Guadalupe_4,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Guadalupe_4);
            map.addLayer(layer_Guadalupe_4);


            map.createPane('pane_Lavaca_5');
            map.getPane('pane_Lavaca_5').style.zIndex = 400;
            map.getPane('pane_Lavaca_5').style['mix-blend-mode'] = 'normal';
            var layer_Lavaca_5 = new L.geoJson(json_Lavaca_5, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Lavaca_5',
                style: style_Lavaca_5,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Lavaca_5);
            map.addLayer(layer_Lavaca_5);
   

            map.createPane('pane_LavacaGuadalupe_6');
            map.getPane('pane_LavacaGuadalupe_6').style.zIndex = 400;
            map.getPane('pane_LavacaGuadalupe_6').style['mix-blend-mode'] = 'normal';
            var layer_LavacaGuadalupe_6 = new L.geoJson(json_LavacaGuadalupe_6, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_LavacaGuadalupe_6',
                style: style_LavacaGuadalupe_6,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_LavacaGuadalupe_6);
            map.addLayer(layer_LavacaGuadalupe_6);
     

            map.createPane('pane_Nueces_7');
            map.getPane('pane_Nueces_7').style.zIndex = 400;
            map.getPane('pane_Nueces_7').style['mix-blend-mode'] = 'normal';
            var layer_Nueces_7 = new L.geoJson(json_Nueces_7, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Nueces_7',
                style: style_Nueces_7,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Nueces_7);
            map.addLayer(layer_Nueces_7);
   

            map.createPane('pane_NuecesRio_Grande_8');
            map.getPane('pane_NuecesRio_Grande_8').style.zIndex = 400;
            map.getPane('pane_NuecesRio_Grande_8').style['mix-blend-mode'] = 'normal';
            var layer_NuecesRio_Grande_8 = new L.geoJson(json_NuecesRio_Grande_8, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_NuecesRio_Grande_8',
                style: style_NuecesRio_Grande_8,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_NuecesRio_Grande_8);
            map.addLayer(layer_NuecesRio_Grande_8);
   

            map.createPane('pane_San_Antonio_9');
            map.getPane('pane_San_Antonio_9').style.zIndex = 400;
            map.getPane('pane_San_Antonio_9').style['mix-blend-mode'] = 'normal';
            var layer_San_Antonio_9 = new L.geoJson(json_San_Antonio_9, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_San_Antonio_9',
                style: style_San_Antonio_9,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_San_Antonio_9);
            map.addLayer(layer_San_Antonio_9);
  

            map.createPane('pane_San_AntonioNueces_10');
            map.getPane('pane_San_AntonioNueces_10').style.zIndex = 400;
            map.getPane('pane_San_AntonioNueces_10').style['mix-blend-mode'] = 'normal';
            var layer_San_AntonioNueces_10 = new L.geoJson(json_San_AntonioNueces_10, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_San_AntonioNueces_10',
                style: style_San_AntonioNueces_10,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_San_AntonioNueces_10);
            map.addLayer(layer_San_AntonioNueces_10);
       
            //Nora Stop copying here 

            break;

        case 'Great Plains':
            //Nora start copying from here

            map.createPane('pane_RedGreat_Planes_0');
            map.getPane('pane_RedGreat_Planes_0').style.zIndex = 400;
            map.getPane('pane_RedGreat_Planes_0').style['mix-blend-mode'] = 'normal';
            var layer_RedGreat_Planes_0 = new L.geoJson(json_RedGreat_Planes_0, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_RedGreat_Planes_0',
                style: style_RedGreat_Planes_0,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_RedGreat_Planes_0);
            map.addLayer(layer_RedGreat_Planes_0);
         

            map.createPane('pane_Canadian_1');
            map.getPane('pane_Canadian_1').style.zIndex = 400;
            map.getPane('pane_Canadian_1').style['mix-blend-mode'] = 'normal';
            var layer_Canadian_1 = new L.geoJson(json_Canadian_1, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Canadian_1',
                style: style_Canadian_1,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Canadian_1);
            map.addLayer(layer_Canadian_1);
          
            //Nora Stop copying here

            break;
        case 'Mississippi Embayment':
            //Nora start copying from here

            map.createPane('pane_Cypress_0');
            map.getPane('pane_Cypress_0').style.zIndex = 400;
            map.getPane('pane_Cypress_0').style['mix-blend-mode'] = 'normal';
            var layer_Cypress_0 = new L.geoJson(json_Cypress_0, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Cypress_0',
                style: style_Cypress_0,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Cypress_0);
            map.addLayer(layer_Cypress_0);
     

            map.createPane('pane_Red_Mississippi_Embayment_1');
            map.getPane('pane_Red_Mississippi_Embayment_1').style.zIndex = 400;
            map.getPane('pane_Red_Mississippi_Embayment_1').style['mix-blend-mode'] = 'normal';
            var layer_Red_Mississippi_Embayment_1 = new L.geoJson(json_Red_Mississippi_Embayment_1, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Red_Mississippi_Embayment_1',
                style: style_Red_Mississippi_Embayment_1,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Red_Mississippi_Embayment_1);
            map.addLayer(layer_Red_Mississippi_Embayment_1);
      

            map.createPane('pane_Sulphur_2');
            map.getPane('pane_Sulphur_2').style.zIndex = 400;
            map.getPane('pane_Sulphur_2').style['mix-blend-mode'] = 'normal';
            var layer_Sulphur_2 = new L.geoJson(json_Sulphur_2, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Sulphur_2',
                style: style_Sulphur_2,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Sulphur_2);
            map.addLayer(layer_Sulphur_2);
 
            //Nora Stop copying here
            break;

        case 'Sabine-Trinity':
            //Nora start copying from here

            map.createPane('pane_Neches_0');
            map.getPane('pane_Neches_0').style.zIndex = 400;
            map.getPane('pane_Neches_0').style['mix-blend-mode'] = 'normal';
            var layer_Neches_0 = new L.geoJson(json_Neches_0, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Neches_0',
                style: style_Neches_0,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Neches_0);
            map.addLayer(layer_Neches_0);
   

            map.createPane('pane_NuecesTrinity_1');
            map.getPane('pane_NuecesTrinity_1').style.zIndex = 400;
            map.getPane('pane_NuecesTrinity_1').style['mix-blend-mode'] = 'normal';
            var layer_NuecesTrinity_1 = new L.geoJson(json_NuecesTrinity_1, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_NuecesTrinity_1',
                style: style_NuecesTrinity_1,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_NuecesTrinity_1);
            map.addLayer(layer_NuecesTrinity_1);
        

            map.createPane('pane_Sabine_2');
            map.getPane('pane_Sabine_2').style.zIndex = 400;
            map.getPane('pane_Sabine_2').style['mix-blend-mode'] = 'normal';
            var layer_Sabine_2 = new L.geoJson(json_Sabine_2, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Sabine_2',
                style: style_Sabine_2,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Sabine_2);
            map.addLayer(layer_Sabine_2);
     

            map.createPane('pane_San_Jacinto_3');
            map.getPane('pane_San_Jacinto_3').style.zIndex = 400;
            map.getPane('pane_San_Jacinto_3').style['mix-blend-mode'] = 'normal';
            var layer_San_Jacinto_3 = new L.geoJson(json_San_Jacinto_3, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_San_Jacinto_3',
                style: style_San_Jacinto_3,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_San_Jacinto_3);
            map.addLayer(layer_San_Jacinto_3);
         

            map.createPane('pane_San_JacintoBrazos_6');
            map.getPane('pane_San_JacintoBrazos_6').style.zIndex = 400;
            map.getPane('pane_San_JacintoBrazos_6').style['mix-blend-mode'] = 'normal';
            var layer_San_JacintoBrazos_6 = new L.geoJson(json_San_JacintoBrazos_6, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_San_JacintoBrazos_6',
                style: style_San_JacintoBrazos_6,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_San_JacintoBrazos_6);
            map.addLayer(layer_San_JacintoBrazos_6);
         

            map.createPane('pane_Trinity_5');
            map.getPane('pane_Trinity_5').style.zIndex = 400;
            map.getPane('pane_Trinity_5').style['mix-blend-mode'] = 'normal';
            var layer_Trinity_5 = new L.geoJson(json_Trinity_5, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_Trinity_5',
                style: style_Trinity_5,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_Trinity_5);
            map.addLayer(layer_Trinity_5);
        

            map.createPane('pane_TrinitySan_Jacinto_4');
            map.getPane('pane_TrinitySan_Jacinto_4').style.zIndex = 400;
            map.getPane('pane_TrinitySan_Jacinto_4').style['mix-blend-mode'] = 'normal';
            var layer_TrinitySan_Jacinto_4 = new L.geoJson(json_TrinitySan_Jacinto_4, {
                // < !--attribution: '<a href=""></a>', -->
                pane: 'pane_TrinitySan_Jacinto_4',
                style: style_TrinitySan_Jacinto_4,
                onEachFeature: riverbasin_feature
            });

            bounds_group.addLayer(layer_TrinitySan_Jacinto_4);
            map.addLayer(layer_TrinitySan_Jacinto_4);
           break;
        //Nora Stop copying here
        default:
            alert("No River Basins available")
    }
}