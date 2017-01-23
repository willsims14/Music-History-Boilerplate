var songs = [];
var songsObj = [];

// Get song card container
var songsContainer = document.getElementById("main");

// Remove only child of the container
var songElement = songsContainer.removeChild(document.getElementById("song--0"));

var dataRequest = new XMLHttpRequest();
var dataRequest2 = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

dataRequest2.addEventListener("load", dataRequestComplete);
dataRequest2.addEventListener("error", dataRequestFailed);

document.getElementById("moreButton").addEventListener("click", function(){
	// Open and Send the XMLHttpRequest
	dataRequest2.open("GET", "music2.json");
	dataRequest2.send();
})

songs[songs.length] = "Estimated Prophet > by The Grateful Dead on the album Terrapin Station";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Terrapin Station > by The Grateful Dead on the album Terrapin Station";

// Put Each song into an object that will be inserted into an array
for(var i = 0; i < songs.length; i++){
	var newSong = songs[i].replace(">", "-");
	newSong = newSong.replace("*", ".");
	// console.log("New Song: ", newSong);

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
}



// Populate the DOM
populateDOM();

// Open and Send the XMLHttpRequest for music from ONLY the music.json file
//		- music2.json is not loaded until "more" button is clicked
dataRequest.open("GET", "music.json");
dataRequest.send();






















function populateDOM(){
	// If the songs container has children (songs) in it, delete them
	if(songsContainer.hasChildNodes()){
		while(songsContainer.firstChild){
			songsContainer.removeChild(songsContainer.firstChild);
		}
	}
	for(var i = 0; i < songsObj.length; i++){
		// Get HTML content of the song card
		var songHtmlStructure = songElement.innerHTML;

		// Replace placeholder names with values from array of objects
		songHtmlStructure = songHtmlStructure.replace("SONG_NAME", songsObj[i].name);
		songHtmlStructure = songHtmlStructure.replace("SONG_ARTIST", songsObj[i].artist);
		songHtmlStructure = songHtmlStructure.replace("SONG_GENRE", "Genre");
		songHtmlStructure = songHtmlStructure.replace("SONG_ALBUM", songsObj[i].album);
		songHtmlStructure = songHtmlStructure.replace("</ul>", "</ul><br>");
		songHtmlStructure = songHtmlStructure.replace(`<ul class="songInfo">`, `<ul class="songInfo container">`)
		songHtmlStructure = songHtmlStructure.replace("--!", "--" + i);

		var newSong = `<div class="song" id="song--${i}">`;
		newSong += songHtmlStructure;
		newSong += "<div>";

		songsContainer.innerHTML += newSong;
	}
	// Add event listeners to every delete button for each song
	for(var i = 0; i < songsObj.length; i++){
		document.getElementById("deleteButton--" + i).addEventListener("click", function(event){
			deleteSong(event.target.id);
		});
	};
}

function dataRequestComplete(event){
	// Get array of new songs from JSON load event
	var newSongs = JSON.parse(event.target.responseText);

	// Add each new song to existing array of song objects
	for(var i = 0; i < newSongs.length; i++){
		songsObj.push(newSongs[i]);
	}

	// Repopulate the DOM
	populateDOM();
};

function dataRequestFailed(event){
	console.log("FAILED");
};

function deleteSong(songID){
	var index = parseInt(songID.substring(14, songID.length));
	var allSongs = document.getElementById("main");
	// Get song to delete from DOM
	var songToDelete = document.getElementById("song--" + index);

	console.log("Index: ", index);

	// Delete songs from the array
	songs.splice(index, 1);
	songsObj.splice(index, 1);

	// Delete song from DOM
	songToDelete.parentNode.removeChild(songToDelete);
};