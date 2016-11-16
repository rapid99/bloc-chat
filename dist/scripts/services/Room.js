(function() {
	function Room($firebaseArray) {

	    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/rooms');
		ref.set ({
			room1: "Room 1", 
			room2: "Room 2", 
			room3: "Room 3",
		});
		var obj = $firebaseArray(ref);

		// var addRoom = function() {
		// 	obj.$add({foo: "bar"});
		// }

		this.rooms = obj
		return this;

		Room.click = function(){
			console.log('clicked');
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();