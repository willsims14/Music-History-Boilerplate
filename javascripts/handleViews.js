"use strict";

let Load = require("./loadJSON.js");
let Songs = require("./filterSongs.js");

var Views = {

	populateDOM: function(){
		var songsContainer = $("#main");
		var songs = Load.getSongs();
		for(var i = 0; i < songs.length; i++){
			var songHTML = Songs.normalizeSongHtmlString(songs[i], i);
			var songToAppend = `<div class="song" id="song--${i}">`;
			songToAppend += songHTML;
			songToAppend += "</div>";

			songsContainer.append(songToAppend);
		}
		$(".realDeleteButton").click(removeSong);
		$("#song--0").remove();
	}
};


// Function that removes a song
function removeSong(event){
	var songNode = this.parentNode.parentNode.parentNode;

	songNode.parentNode.removeChild(songNode);

}

module.exports = Views;