function init(){
    
    var base_hotosm = L.tileLayer(
        'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',{
        attribution: '&copy; OpenStreetMap contributors, <a href="http://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>'}
    );

    var base_osm = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            attribution: '&copy; OpenStreetMap contributors'}
    );
    
    var pamPath = L.geoJson(pam_path,{
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },        
        style: pamPathStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>"+feature.properties.time+" - "+feature.properties.datelabel+"</b><br /><br />Windspeed: "+feature.properties.windspeed+" mph"+"<br />Category: "+feature.properties.stormtype);
        }
    });
    
    var vanPop = L.geoJson(van_pop,{
        style: vanPopStyle,
        onEachFeature: function (feature, layer) {
            layer.bindPopup("2010 Enumeration Area: "+feature.properties.Enumeratio+"<br />Population Density (Per sq. km): "+feature.properties.PopDensity);
        }
    });   
    
    var map = L.map('map', {
        center: [-17.7500,168.3000],
        zoom: 6,
        layers: [base_hotosm, pamPath]
    });

    L.control.layers({
        'HOT OSM':base_hotosm,
        'OSM':base_osm
    }, {
        'Cyclone Pam Path':pamPath,
        'Population Density 2010':vanPop
    }).addTo(map);   
    
    var pamPathLegend = L.control({position: 'bottomleft'});
    
    pamPathLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=pamPathLegendContent();
        return div;
    };
    
    var vanPopLegend = L.control({position: 'bottomleft'});
    
    vanPopLegend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'infolegend');
            div.innerHTML +=vanPopLegendContent();
        return div;
    };        
    
    map.on('overlayadd', function (eventLayer) {
        if(eventLayer.name=="Cyclone Pam Path"){
            pamPathLegend.addTo(this);
        };
        if(eventLayer.name=="Population Density 2010"){
            vanPopLegend.addTo(this);
        };        
    });
    
    map.on('overlayremove', function (eventLayer) {
        if(eventLayer.name=="Cyclone Pam Path"){
            this.removeControl(pamPathLegend);
        };
        if(eventLayer.name=="Population Density 2010"){
            this.removeControl(vanPopLegend);
        };            
    });
    
    pamPathLegend.addTo(map);
    
    
    
    return map;    
}


function resize(){
    $('#map').height($(window).height()-$('#header').height()-10);
    map.invalidateSize(false);
}

$(window).load(function(){
    resize();
});
$(window).resize(function(){
    resize();
});
    

var map = init();
