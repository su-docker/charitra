function initMap() {
    d3.xml("image/world_map.svg", "image/svg+xml", function (xml) {
        document.body.appendChild(xml.documentElement);
        initSize();
        initZoom();
    });
}

function initSize() {
    $("#map").parent().attr("height", $(document).height());
    $("#map").parent().attr("width", $(document).width());
}

function initZoom() {
    console.log("initialized zoom");
    d3.select("#map").call(d3.behavior.zoom().on("zoom", redraw));
//                    .attr("transform", "scale(1.75,1.75)");
}

function redraw() {
    translation = [d3.event.translate[0] * 1.5, d3.event.translate[1] * 1.5]
    d3.select("#map").attr("transform", "translate(" + d3.event.translate + ")" + "scale(" + (d3.event.scale) + ")");
}


