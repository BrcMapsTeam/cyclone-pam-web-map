pamPathLegendContent = function(){
    var html = "<h4>Cyclone Strength</h4>";
    html = html +'<p><i style="background-color:#91cf60"></i>Tropical Storm</p>';
    html = html +'<p><i style="background-color:#d9ef8b"></i>Cyclone Category 1</p>';
    html = html +'<p><i style="background-color:#ffffbf"></i>Cyclone Category 2</p>';
    html = html +'<p><i style="background-color:#fee08b"></i>Cyclone Category 3</p>';
    html = html +'<p><i style="background-color:#fc8d59"></i>Cyclone Category 4</p>';
    html = html +'<p><i style="background-color:#d73027"></i>Cyclone Category 5</p>';
    html += "<br />Source: <a href='http://weather.unisys.com/hurricane/s_pacific/2015/index.php' target='_blank'>Weather UNISYS</a>";
    return html;
};

vanPopLegendContent = function(){
    var labels = ["0-9","10-19","20-49","50-99","100+"];
    var html = "<p>Population Density</p>";
    for(i=0;i<5;i++){
        html = html +'<p><i style="background-color:' + blueColor[i]+'"></i> '+labels[i]+'</p>';
    }
    html += "<br />Source: <a href='http://pcrafi.sopac.org/search/?q=vanuatu' target='_blank'>PCRAFI</a>";
    return html;
};