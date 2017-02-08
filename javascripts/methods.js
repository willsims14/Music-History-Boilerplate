// "use strict";

// var songs = [];

// songs[songs.length] = "Estimated Prophet > by The Grateful Dead on the album Terrapin Station";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] ="Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] ="Terrapin Station > by The Grateful Dead on the album Terrapin Station";



// function normalizeSongHtmlString(song, i){

// 	// Replace placeholder names with values from array of objects
// 	song= song.replace("SONG_NAME", songsObj[i].name);
// 	song= song.replace("SONG_ARTIST", songsObj[i].artist);
// 	song= song.replace("SONG_GENRE", "Genre");
// 	song= song.replace("SONG_ALBUM", songsObj[i].album);
// 	song= song.replace("</ul>", "</ul><br>");
// 	song= song.replace(`<ul class="songInfo">`, `<ul class="songInfo container">`);
// 	song= song.replace("--!", "--" + i);

// 	return song;
// }


// function deleteSong(event){
// 	var songID = event.target.id;
// 	var index = parseInt(songID.substring(14, songID.length));

// 	// Get id of the song to delete from DOM
// 	var songToDelete = "#song--" + index;

// 	// Delete songs from the array
// 	songs.splice(index, 1);
// 	songsObj.splice(index, 1);

// 	// Remove song from DOM
// 	$(songToDelete).remove();
// }


// function populateDOM(){
// 	// If the songs container has children (songs) in it, delete them
// 	if($("#main").is(":parent")){
// 		$("#main").children().remove();
// 	}

// 	for(i = 0; i < songsObj.length; i++){
// 		// Get HTML content of the song card
// 		var songHtmlStructure = songElement.html();

// 		songHtmlStructure = normalizeSongHtmlString(songHtmlStructure, i);

// 		var newSong = `<div class="song" id="song--${i}">`;
// 		newSong += songHtmlStructure;
// 		newSong += "<div>";

// 		songsContainer.append(newSong);
// 	}
// 	// Add event listeners to every delete button for each song
// 	for(i = 0; i < songsObj.length; i++){
// 		$("#" + ("deleteButton--" + i)).click(deleteSong);
// 	}
// }