(function() {
	function MakeRoomCtrl(Room){
		this.name = "";
	  	this.saveRoom = function(){
	  		Room.rooms.$add({title: this.name});
	  	}


	}

	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', ['Room', MakeRoomCtrl])

})();