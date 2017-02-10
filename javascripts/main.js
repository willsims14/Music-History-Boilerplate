"use strict";


let templates = require("./dom-builder");
let db = require("./db-interactions.js");
let user = require("./users.js");

user.logOut();
// Get song card container
var songsContainer = $("#main");

function populateDOM(){
	let currentUser = user.getUser();
	db.getSongs(currentUser)
	.then( function(songData){
		console.log("Song Data: ", songData);
		var idArray = Object.keys(songData);
		idArray.forEach(function(key){
			songData[key].id = key;
		});
		console.log("With Keys: ", songData);
		templates.makeSongList(songData);
	});
}


$("#login").click(function(){

	user.logInGoogle()
	.then( function(result){
		user.setUser(result.user.uid);
		populateDOM();
	});
});


$("#add-song").click(function(){
	var currentUser = user.getUser();
	if(currentUser === null){
		window.alert("You must login first!");
		return;
	}

	var songForm = templates.addSongForm()
	.then(console.log("SongForm:  ", songForm))
	.then(function(songForm){
		$(".uiContainer--wrapper").html(songForm);
	});
});

$(document).on("click", ".save_new_btn", function() {
	let songObj = buildSongObj();
	db.addSong(songObj)
	.then( function(){
		populateDOM();
	});
});

$(document).on("click", "#logout", function(){

	if(confirm("Are you sure you want to logout?")){
		user.setUser(null);
		user.logOut();
		populateDOM();
		window.alert("Logged out.");
	}else{
		return;
	}
});

$(document).on("click", ".delete-btn", function(){
	console.log("This.data(): ", $(this).data("delete-id"));
	let songId = $(this).data("delete-id");

	db.deleteSong(songId)
	.then( function(){
		populateDOM();
	});
});

$(document).on("click", "#view-music", function(){
	populateDOM();
});



function buildSongObj() {
    let songObj = {
    name: $("#form--title").val(),
    artist: $("#form--artist").val(),
    album: $("#form--album").val(),
    uid: user.getUser()
  };
  return songObj;
}
