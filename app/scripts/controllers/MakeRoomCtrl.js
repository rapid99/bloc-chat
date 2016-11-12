(function() {
	function MakeRoomCtrl(){
		this.room = "Room";
	}

	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', MakeRoomCtrl)
})();
