(function() {
	function HomeCtrl() {
		this.room = "";
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', HomeCtrl])
})();