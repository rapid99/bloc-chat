(function() {
	function HomeCtrl(Room, Message) {
		this.rooms = function() {
			return Room.rooms;
		}
		this.messages = Message.messages;

		


		var fillName = document.getElementsByClassName('room-name')[0];
		// var messageInput = document.getElementsByClassName('room-content')[0];


		this.activeRoom = function(room) {
			fillName.innerText = room
		}
		
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', HomeCtrl])
})();


