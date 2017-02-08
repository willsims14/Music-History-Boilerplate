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