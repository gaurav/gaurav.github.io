/*
 * Panels: A Javascript Way To Display Stuff
 * Copyright (C) Gaurav Vaidya, 2018
 */

 // Set up Vue to make managing the panels easier.
 var vm = new Vue({
     el: '#panel-container',
     data: {
         panels: []
     }
 });

// Read panels from all input JSON and add them to a container.
function read_panels_from_json_url(json_url) {
    $.getJSON(json_url, {}, function(data, textStatus, jqXHR) {
        console.log("Loading '" + json_url + "': ", data);
        for(panel of data) {
            console.log("Adding panel: ", panel);
            vm.panels.push(panel);
        }
    });
}

// Make all draggable panels draggable.
$('.panel.draggable').draggable({
});
