(function() {
	function HomeCtrl() {
		this.room = "Room";
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', HomeCtrl]);
})();