(function() {
	function HomeCtrl(Room) {
		this.showRoom = Room($firebaseArray);
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl)
})();

