var cycloneColor = ["#91cf60","#d9ef8b","#ffffbf","#fee08b","#fc8d59","#d73027"];
var blueColor = ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"];

var pamPathStyle = function(feature){
    if(feature.properties.stormtype==="CYCLONE-1"){
        return {radius:8,color: cycloneColor[1],fillColor: cycloneColor[1],fillOpacity:0.8,opacity:0.8,weight:2};
    }
    if(feature.properties.stormtype==="CYCLONE-2"){
        return {radius:8,color: cycloneColor[2],fillColor: cycloneColor[2],fillOpacity:0.8,opacity:0.8,weight:2};
    }
    if(feature.properties.stormtype==="CYCLONE-3"){
        return {radius:8,color: cycloneColor[3],fillColor: cycloneColor[3],fillOpacity:0.8,opacity:0.8,weight:2};
    }
    if(feature.properties.stormtype==="CYCLONE-4"){
        return {radius:8,color: cycloneColor[4],fillColor: cycloneColor[4],fillOpacity:0.8,opacity:0.8,weight:2};
    }
    if(feature.properties.stormtype==="CYCLONE-5"){
        return {radius:8,color: cycloneColor[5],fillColor: cycloneColor[5],fillOpacity:0.8,opacity:0.8,weight:2};
    }
    return {radius:8,color: cycloneColor[0],fillColor: cycloneColor[0],fillOpacity:0.8,opacity:0.8,weight:2};
};

var vanPopStyle = function(feature){
    if(feature.properties.PopDensity<10){
        return {color: blueColor[0],fillColor: blueColor[0],fillOpacity:0.6,opacity:0.7,weight:2};
    }
    if(feature.properties.PopDensity<20){
        return {color: blueColor[1],fillColor: blueColor[1],fillOpacity:0.6,opacity:0.7,weight:2};
    }
    if(feature.properties.PopDensity<50){
        return {color: blueColor[2],fillColor: blueColor[2],fillOpacity:0.6,opacity:0.7,weight:2};
    }
    if(feature.properties.PopDensity<100){
        return {color: blueColor[3],fillColor: blueColor[3],fillOpacity:0.6,opacity:0.7,weight:2};
    }    
    return {color: blueColor[4],fillColor: blueColor[4],fillOpacity:0.6,opacity:0.7,weight:2}; 
};
