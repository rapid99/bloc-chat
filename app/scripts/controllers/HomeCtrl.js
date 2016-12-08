(function() {
	function HomeCtrl(Room, Message, $stateParams) {
		this.rooms = function() {
			return Room.rooms;
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


	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$stateParams', HomeCtrl])
})();


