(function() {
	function MakeRoomCtrl(Room, $uibModal){
		this.name = "";
	  	this.saveRoom = function(){
	  		Room.rooms.$add(this.name);
	  	}


	}

	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', ['Room', MakeRoomCtrl])

})();
