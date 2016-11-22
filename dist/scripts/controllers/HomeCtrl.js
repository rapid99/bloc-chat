(function() {
	function HomeCtrl(Room, Message, $stateParams) {
		this.rooms = function() {
			return Room.rooms;
		}
		this.messages = Message.messages;

    this.currentRoom = $stateParams.room  || "";
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$stateParams', HomeCtrl])
})();


