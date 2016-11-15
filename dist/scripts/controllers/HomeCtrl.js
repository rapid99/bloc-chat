(function() {
	function HomeCtrl(Room) {
		this.room = Room;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl])
})();

	// // Initialize Firebase
 //    var config = {
 //     	apiKey: "AIzaSyCaCdFB-gBlrcaAVPcIe62ojTc27nPJdyQ",
 //        authDomain: "bloc-chat-47eb6.firebaseapp.com",
 //        databaseURL: "https://bloc-chat-47eb6.firebaseio.com",
 //        storageBucket: "bloc-chat-47eb6.appspot.com",
 //        messagingSenderId: "385055766743"
 //    };

 //    firebase.initializeApp(config);

 //    const showList = document.getElementsByClassName('the-list');
 //    const dbRef = firebase.database().ref('list').child('rooms');

 //    dbRef.on('child_added', snap => {
 //    	const li = document.createElement('li');
 //    	li.innerText = snap.val();
 //    	li.id = snap.key;
 //    	showList[0].appendChild(li);

 //    });

 //    dbRef.on('child_changed', snap => {
 //    	const liChanged = document.getElementById(snap.key);
 //    	liChanged.innerText = snap.val();
 //    });

 //    dbRef.on('child_removed', snap => {
 //    	const liRemoved = document.getElementById(snap.key);
 //    	liRemoved.remove();
 //    });

