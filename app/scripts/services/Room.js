(function() {
	function Room($firebaseArray) {

	    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com');
		var rooms = $firebaseArray(ref.child('rooms'));
		ref.set ({
			room1: "Room 1", 
			room2: "Room 2", 
			room3: "Room 3"
		});
		var arr = $firebaseArray(ref);
		console.log(arr);
				


		return {
			all: arr
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();