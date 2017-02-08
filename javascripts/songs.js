"use strict";

// var songsObj = [];

// // Get song card container
// var songsContainer = $("#main");

// // Remove only child of the container
// var songElement = $("#song--0");
// $("#song--0").remove();

// // Event Handlers
// $.ajax({
// 	url: "music.json"
// }).done(dataRequestComplete);

// // If user clicks "more"
// $("#moreButton").click( () => {
// 	$.ajax({
// 		url: "music2.json"
// 	}).done(dataRequestComplete);
// });


// // Put Each song into an object that will be inserted into an array
// for(var i = 0; i < songs.length; i++){
// 	var newSong = songs[i].replace(">", "-");
// 	newSong = newSong.replace("*", ".");

// 	var song = {
// 		name: songs[i].substring(0, songs[i].indexOf('>')),
// 		artist: songs[i].substring(songs[i].indexOf("by") + 2, songs[i].indexOf("on the")),
// 		album: songs[i].substring(songs[i].indexOf("on the album") + 12, songs[i].length)
// 	};

// 	song.artist = song.artist.replace("*", "");
// 	song.artist = song.artist.replace("@", "");
// 	song.name = song.name.replace("(", "");
// 	song.name = song.name.replace("!", "");
// 	song.artist = song.artist.replace("ZT", "Z T");
// 	songsObj[i] = song;
// }

// // Populate the DOM
// populateDOM();


// function dataRequestComplete(newSongs){
// 	// Add each new song to existing array of song objects
// 	for(var i = 0; i < newSongs.length; i++){
// 		songsObj.push(newSongs[i]);
// 	}

// 	// (re)populate the DOM
// 	populateDOM();
// }


