(function() {
	function HomeCtrl(Room, Message, $stateParams, $cookies) {
		this.rooms = function() {
			return Room.rooms;
		}

		this.user = $cookies.get('blocChatCurrentUser');

		this.date = function($scope) {
			$scope.date = new Date();
		}

		this.messages = function() {
			var room = $stateParams.room !== undefined ? $stateParams.room : "room1"
			var rooms = Room.rooms.$getRecord(room);
		    var keys = Object.keys(rooms.messages);
		   	if (keys.length > 0) {
		        var messageArray = keys.map(function(k) {
			    	return rooms.messages[k];
			    });
			}

	        return messageArray;
		}
		
		function roomName(id) {
			var getRec = Room.rooms.$getRecord(id);
			return (id !== undefined && getRec) ? getRec.title : "";
		}

		this.roomName = function(id) {
			return Room.rooms[id];
		}

		this.currentRoom = roomName($stateParams.room);

		this.messageInput = null;

		this.submitMessage = function() {

			// var user = $cookies.get('blocChatCurrentUser');
			var messageInput = this.messageInput;
			var roomId = $stateParams.room;
			var user = $cookies.get('blocChatCurrentUser');
			Room.sendNewMessage(messageInput, roomId, user);


		}


	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$stateParams', '$cookies', HomeCtrl])
})();
