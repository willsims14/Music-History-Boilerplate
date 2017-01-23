var songs = [];
var songsObj = [];

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



// Get song card container
var songsContainer = document.getElementById("main");
// Remove only child of the container
var songElement = songsContainer.removeChild(document.getElementById("song--0"));

console.log("Element: ", songElement.innerHTML);

for(var i = 0; i < songs.length; i++){

	// Get HTML content of the song card
	var songHtmlStructure = songElement.innerHTML;

	// Replace placeholder names with values from array of objects
	songHtmlStructure = songHtmlStructure.replace("SONG_NAME", songsObj[i].name);
	songHtmlStructure = songHtmlStructure.replace("SONG_ARTIST", songsObj[i].artist + "		|	");
	songHtmlStructure = songHtmlStructure.replace("SONG_GENRE", "Genre" + "		|	");
	songHtmlStructure = songHtmlStructure.replace("SONG_ALBUM", songsObj[i].album);
	songHtmlStructure = songHtmlStructure.replace("</ul>", "</ul><br>");
	songHtmlStructure = songHtmlStructure.replace(`<ul class="songInfo">`, `<ul class="songInfo container">`)
	songHtmlStructure = songHtmlStructure.replace("--!", "--" + i);

	console.log("struc: \n", songHtmlStructure);

	var newSong = `<div class="song" id="song--${i}">`;
	newSong += songHtmlStructure;
	newSong += "<div>";

	songsContainer.innerHTML += newSong;


}

// Add event listeners to every delete button for each song
for(var i = 0; i < songs.length; i++){
	document.getElementById("deleteButton--" + i).addEventListener("click", function(event){
		deleteSong(event.target.id);
	});
}
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
}



    // <div id="song--0" class="song">
    //   <h2 class="songTitle">SONG_NAME</h2><br>
    //   <ul class="songInfo">
    //     <li class="col-sm-12 col-md-2">SONG_ARTIST</li>
    //     <li class="col-sm-12 col-md-2">SONG_GENRE</li>
    //     <li class="col-sm-12 col-md-2">SONG_ALBUM</li>
    //     <li class="col-sm-12 col-md-2"><input type="button" id="deleteButton" value="delete"></li>
    //   </ul>
    // </div>