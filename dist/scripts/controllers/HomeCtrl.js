(function() {
	function HomeCtrl(Room) {
		this.rooms = function() {
			return Room.rooms;
		}
		this.activeRoom = function() {
			return Room.rooms;
		}
		
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])
})();


