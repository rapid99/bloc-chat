(function() {
	function Room($firebaseArray) {

    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com');
		var rooms = $firebaseArray(ref.child('rooms'));
    console.log("rooms", rooms)

    console.log(ref.set({timestamp: "foo"}))

		return {
			all: rooms
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
