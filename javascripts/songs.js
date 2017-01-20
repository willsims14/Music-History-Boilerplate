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
	// console.log("New Song: ", newSong);

	var song = {
		name: songs[i].substring(0, songs[i].indexOf('>')),
		artist: songs[i].substring(songs[i].indexOf("by") + 2, songs[i].indexOf("on the")),
		album: songs[i].substring(songs[i].indexOf("on the album") + 12, songs[i].length)
	};

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

	console.log("Name: ", songsObj[i].name);
	console.log("Artist: ", songsObj[i].artist);

	console.log("HTML: ", songHtmlStructure);

	var newSong = "<div class='song'>";
	newSong += songHtmlStructure;
	newSong += "<div>";

	songsContainer.innerHTML += newSong;

}
