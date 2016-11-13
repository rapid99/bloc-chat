(function() {
	function HomeCtrl(Room) {
    console.log("Room", Room)
		this.room = "foo";
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])
})();
