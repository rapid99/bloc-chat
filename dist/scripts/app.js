(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as vm',
				templateUrl: '/templates/home.html'
			})
			.state('room', {
				url: '/:room',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})

			.state('new', {
				url: '/new',
				controller: 'MakeRoomCtrl as makeRoom',
				templateUrl: '/templates/makeRoom.html'
			});


	}

		angular
			.module('blocChat', ['ui.router', 'firebase'])
			.config(config)
})();
