"use strict";

var brokenSongs = [];

brokenSongs[brokenSongs.length] = "Estimated Prophet > by The Grateful Dead on the album Terrapin Station";
brokenSongs[brokenSongs.length] = "Legs > by Z*ZTop on the album Eliminator";
brokenSongs[brokenSongs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
brokenSongs[brokenSongs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
brokenSongs[brokenSongs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
brokenSongs[brokenSongs.length] ="Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
brokenSongs[brokenSongs.length] ="Terrapin Station > by The Grateful Dead on the album Terrapin Station";

var songElement = $("#song--0");
var songsContainer = $("#main");

let Load = require("./loadJSON.js");
let Filter = require("./filterSongs.js");
let Views = require("./handleViews.js");

// Event Handlers
$.ajax({
	url: "../music.json"
}).done(Load.dataRequestComplete);

// Convert broken songs into song objects
var fixedSongs = Filter.filter(brokenSongs);

// When document is ready, populate the DOM
$( document ).ready(function() {
    console.log( "ready!" );
    // populateDOM();
    Views.populateDOM();
});
