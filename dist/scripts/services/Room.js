(function() {
	function Room($firebaseArray) {

	    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/rooms/');

		ref.set ({
			room1: {
				title: "Room 1",
				messages: {m1: "Hello room 1", m2: "random", m3: "blah"}
			}, 
			room2: {
				title: "Room 2",
				messages: {m1: "hi again", m2: "testing room 2", m3: "blah balh"}
			}, 
			room3: {
				title: "Room 3",
				messages: {m1: "blah blah", m2: "test 3", m3: "tetsing testing"}
			}
		});
		var obj = $firebaseArray(ref);

		this.rooms = obj

		this.sendNewMessage = function(data, roomId, user) {
			// var user = $cookies.get('blocChatCurrentUser');
			// var messageInput = this.messageInput;
			// var roomId = $stateParams.room;

		    var refRoom = new Firebase('https://bloc-chat-47eb6.firebaseio.com/rooms/' + roomId + '/messages/');
		    var roomObj = $firebaseArray(refRoom);
		    console.log(roomObj);
			roomObj.$add(data);
						console.log(roomId)

			// user: $cookies.get('blocChatCurrentUser'),
			// messageInput: data.message
		}


		return this;

	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
