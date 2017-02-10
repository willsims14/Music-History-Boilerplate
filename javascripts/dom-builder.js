"use strict";
// This module only cares about the data it receives. It doesn't have to know about where the data comes from.


function makeSongList(songList){
	let $songsDisplay = 	$(`<div class="uiContainer__song-list box col s12">
    								<ul class="song-list">
    								</ul>
  							</div>`);

	$(".uiContainer--wrapper").html($songsDisplay);


	for(var song in songList){
		let currentSong = songList[song];
		let songListItem = $(`<li class="song-list__item">`);
		let title = `<h4 class="song-title"><strong>${currentSong.name}</strong>`;
		let songListData = $(`<ul class="song-list__item--data"/>`);
		let songListDelete = $("<button>", {"data-delete-id": song, class: "delete-btn btn", text: "Delete" });

		songListData.append(
	      `<li>${currentSong.artist}</li>
	      <li>${currentSong.album}</li>
	      </ul>`);

		$(".song-list").append(songListItem.append(title));
		$(".song-list").append(songListItem.append(songListData).append(songListDelete));
		$(".song-list").append("<hr>");
	}
}

function addSongForm(song, songId){
	return new Promise(function(resolve, reject){
		let songItem = {
			name: song ? song.name : "",
			artist: song ? song.artist : "",
			album: song ? song.album : "",
			formTitle: song ? `Edit "${song.name}"` : "Add a new song",
			btnText: song ? "Save Changes" : "Save Song",
			btnId: song ? "save_edit_btn" : "save_new_btn"
		},
		form = 
      ` <h3>${songItem.formTitle}</h3>
        <input type="text" id="form--title" placeholder="title" value="${songItem.name}"></input>
        <input type="text" id="form--artist" placeholder="artist" value="${songItem.artist}"></input>
        <input type="text" id="form--album" placeholder="album" value="${songItem.album}"></input>
        <button id="save-btn" class=${songItem.btnId}>${songItem.btnText}</button>`;
        resolve(form);
	});
}

module.exports = {makeSongList, addSongForm};