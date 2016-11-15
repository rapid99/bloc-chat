(function() {
	function HomeCtrl(Room) {
    // console.log("Room", Room.database())
		this.room = "whatever";
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])
})();
