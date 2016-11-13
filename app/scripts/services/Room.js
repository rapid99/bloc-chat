(function() {
	function Room($firebaseArray) {
		var ref = firebase.database().ref('').child("rooms");
		$scope.list = $firebaseArray(ref);
		list.$bindTo($scope, 'rooms');



		return {
			all: list
		};
	}

	angular
		.module('blocChat', ['firebase'])
		.factory('Room', ['$firebaseArray', Room]);
})();

