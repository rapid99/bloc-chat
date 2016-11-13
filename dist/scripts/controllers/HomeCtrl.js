(function() {

	// Initialize Firebase
    var config = {
     	apiKey: "AIzaSyCaCdFB-gBlrcaAVPcIe62ojTc27nPJdyQ",
        authDomain: "bloc-chat-47eb6.firebaseapp.com",
        databaseURL: "https://bloc-chat-47eb6.firebaseio.com",
        storageBucket: "bloc-chat-47eb6.appspot.com",
        messagingSenderId: "385055766743"
    };

    firebase.initializeApp(config);

    // const list = document.getElementsByClassName('room-list');
    const showList = document.getElementsByClassName('the-list');
    const dbRef = firebase.database().ref('list').child('rooms');
    // code below is commented out as it was for testing purposes. Keeping as a reference for later
    	// const dbRefList = dbRef.child('rooms');
    	// dbRef.on('value', snap => {
    	// 	list[0].innerText = JSON.stringify(snap.val(), null, 3);

    	// });

    dbRef.on('child_added', snap => {
    	const li = document.createElement('li');
    	li.innerText = snap.val();
    	li.id = snap.key;
    	showList[0].appendChild(li);

    });

    dbRef.on('child_changed', snap => {
    	const liChanged = document.getElementById(snap.key);
    	liChanged.innerText = snap.val();
    });

    dbRef.on('child_removed', snap => {
    	const liRemoved = document.getElementById(snap.key);
    	liRemoved.remove();
    });
	

	function HomeCtrl(Room) {
		this.showRoom = Room;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl)

})();