(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let Load = require("./loadJSON.js");
var songElement = $("#song--0");
var song = songElement.html();

var Filter = {

	filter: function(songs){

		var songsObj = [];

		// Put Each song into an object that will be inserted into an array
		for(var i = 0; i < songs.length; i++){
			var newSong = songs[i].replace(">", "-");
			newSong = newSong.replace("*", ".");

			var song = {
				name: songs[i].substring(0, songs[i].indexOf('>')),
				artist: songs[i].substring(songs[i].indexOf("by") + 2, songs[i].indexOf("on the")),
				album: songs[i].substring(songs[i].indexOf("on the album") + 12, songs[i].length)
			};

			song.artist = song.artist.replace("*", "");
			song.artist = song.artist.replace("@", "");
			song.name = song.name.replace("(", "");
			song.name = song.name.replace("!", "");
			song.artist = song.artist.replace("ZT", "Z T");
			songsObj[i] = song;
			Load.addSong(song);
		}
		return songsObj;
	},
	normalizeSongHtmlString: function(mySong, i){

		var song = songElement.html();

		// Replace placeholder names with values from array of objects
		song= song.replace("SONG_NAME", mySong.name);
		song= song.replace("SONG_ARTIST", mySong.artist);
		song= song.replace("SONG_GENRE", "Genre");
		song= song.replace("SONG_ALBUM", mySong.album);
		song= song.replace(`<ul class="songInfo">`, `<ul class="songInfo container">`);
		song= song.replace("--!", "--" + i);

		return song;
	}
};

module.exports = Filter;
},{"./loadJSON.js":3}],2:[function(require,module,exports){
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
},{"./filterSongs.js":1,"./loadJSON.js":3}],3:[function(require,module,exports){
"use strict";


var songsArray = [];




var Songs = {
	dataRequestComplete: function(event){
		for(var i = 0; i < event.length; i++){
			songsArray.push(event[i]);
		}
	},
	getSongs: function(){
		return songsArray;
	},
	addSong: function(song){
		songsArray.push(song);
	}

};

module.exports = Songs;
},{}],4:[function(require,module,exports){
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

},{"./filterSongs.js":1,"./handleViews.js":2,"./loadJSON.js":3}]},{},[4]);
