(function() {
	function Room($firebaseArray) {

		// Initialize Firebase
  		var config = {
	   		apiKey: "AIzaSyCaCdFB-gBlrcaAVPcIe62ojTc27nPJdyQ",
			authDomain: "bloc-chat-47eb6.firebaseapp.com",
			databaseURL: "https://bloc-chat-47eb6.firebaseio.com",
			storageBucket: "bloc-chat-47eb6.appspot.com",
			messagingSenderId: "385055766743"
 		};
 		
 		firebase.initializeApp(config);
		var ref = firebase.database().ref().child("rooms");
		var rooms = $firebaseArray(ref);

		return {
			all: rooms
		};
	}

	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();