(function() {
	function Room($firebaseArray) {

	    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/');
		ref.set ({
			room1: "Room 1", 
			room2: "Room 2", 
			room3: "Room 3",
		});
		var obj = $firebaseArray(ref);


		this.rooms = obj
		return this;

	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();

