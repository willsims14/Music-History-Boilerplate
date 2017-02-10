"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db


var firebase = require("./firebaseConfig");


function getSongs(user){
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://mymusichistory-24ab2.firebaseio.com/songs.json?orderBy="uid"&equalTo="${user}"`
		}).done(function(songData){
			resolve(songData);
		}).fail( function(error){
			reject(error);
		});
	});
}

function addSong(songFormObj){
	console.log("Adding Song: ", songFormObj);

	return new Promise(function(resolve, reject){
		$.ajax({
			url: `https://mymusichistory-24ab2.firebaseio.com/songs.json`,
			type: "POST",
			data: JSON.stringify(songFormObj),
			dataType: "json"
		}).done( function(songID){
			resolve(songID);
		});
	});
}

function deleteSong(songId){
	return new Promise( function(resolve, reject){
		$.ajax({ 
			url: `https://mymusichistory-24ab2.firebaseio.com/songs/${songId}.json`,
			method: "DELETE"
		}).done( function(){
			resolve();
		});
	});
}

module.exports = {getSongs, addSong, deleteSong};