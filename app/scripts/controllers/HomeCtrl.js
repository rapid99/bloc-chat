(function() {
	function HomeCtrl(Room, Message) {
		this.rooms = function() {
			return Room.rooms;
		}

		this.messages = Message.messages;

		this.currentRoom = $stateParams.room || "";



		// var fillName = document.getElementsByClassName('room-name')[0];;


		// this.activeRoom = function(room) {
		// 	fillName.innerText = room
		// }
		
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$stateParams', HomeCtrl])
})();


