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