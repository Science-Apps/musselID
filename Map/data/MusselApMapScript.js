var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
        highlightLayer.setStyle({
            color: '#ffff00',
        });
    } else {
        highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 1
        });
    }
}
function makeMap() {
    var map = L.map('map', {
        zoomControl: false, maxZoom: 14, minZoom: 4
    });
    var hash = new L.Hash(map);
    /*map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>'); */
    /*L.control.locate().addTo(map); */
    var bounds_group = new L.featureGroup([]);
    function setBounds() {
        /*alert("Howdy"); */
        if (bounds_group.getLayers().length) {
            /*	alert("doody"); */
            map.fitBounds(bounds_group.getBounds());
        }
        map.setMaxBounds(map.getBounds());
    }


    function style_cb2017usstate500k_0_0() {
        return {
            pane: 'pane_cb2017usstate500k_0',
            opacity: 1,
            color: 'rgba(0,0,0,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0,
            fillOpacity: 1,
            fillColor: 'rgba(104,114,225,0.0)',
        }
    }
    map.createPane('pane_cb2017usstate500k_0');
    map.getPane('pane_cb2017usstate500k_0').style.zIndex = 400;
    map.getPane('pane_cb2017usstate500k_0').style['mix-blend-mode'] = 'normal';
    var layer_cb2017usstate500k_0 = new L.geoJson(json_cb2017usstate500k_0, {
        attribution: '<a href=""></a>',
        pane: 'pane_cb2017usstate500k_0',
        //onEachFeature: pop_cb2017usstate500k_0,
        style: style_cb2017usstate500k_0_0,
    });
    //bounds_group.addLayer(layer_cb2017usstate500k_0);
    //map.addLayer(layer_cb2017usstate500k_0);


    function pop_MusselProvinces_0(feature, layer) {

        layer.on({
            mouseout: function (e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });

        layer.on('dblclick', function (e) {
            map.removeLayer(layer_MusselProvinces_0);
            riverbasinselect(feature, map, bounds_group);
        });
        layer.on('click', function (e) { populateresults(feature); });
        var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">Mussel Province Selected:<br /><strong>' + (feature.properties['Mussel_province'] !== null ? Autolinker.link(String(feature.properties['Mussel_province'])) : '') + '</strong></td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Species in this Province:<br /><strong>' + (feature.properties['NumSpecies'] !== null ? Autolinker.link(String(feature.properties['NumSpecies'])) : '') + '</strong></td>\
                    </tr>\
                </table>';
        layer.bindPopup(popupContent, { maxHeight: 400 });


    }

    map.createPane('pane_MusselProvinces_0');
    map.getPane('pane_MusselProvinces_0').style.zIndex = 400;
    map.getPane('pane_MusselProvinces_0').style['mix-blend-mode'] = 'normal';
    var layer_MusselProvinces_0 = new L.geoJson(json_MusselProvinces_1, {
        // < !--attribution: '<a href=""></a>', -->
        pane: 'pane_MusselProvinces_0',
        onEachFeature: pop_MusselProvinces_0,
        style: style_MusselProvinces_0_0,
    });
    bounds_group.addLayer(layer_MusselProvinces_0);
    map.addLayer(layer_MusselProvinces_0);

    setBounds();
    bounds_group.addLayer(layer_cb2017usstate500k_0);
    map.addLayer(layer_cb2017usstate500k_0);

    $(window).on("resize", function () {
        $("#map").height($(window).height()).width($(window).width());
        map.invalidateSize();
    }).trigger("resize");

};
