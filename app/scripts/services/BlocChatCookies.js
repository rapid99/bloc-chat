(function() {	
	function BlocChatCookies($cookies, $uibModal) {

		var name = null;

		var template = "<h1 class='set-user-h1'>Set Username</h1>" +
		"<input class='set-username' ng-model='newUsername' required type='text'>" +
		"<button type='button' class='userBtn btn-primary' ng-click='create()'>Set Username</button>";
		

		if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
			var modalInstance = $uibModal.open({
				template: template,
				controller: function($scope, $uibModalInstance) {
					$scope.newUsername = "User " + Math.floor(Math.random() * (100 - 1)) + 1;
					$scope.create = function() {
						if ($scope.newUsername == undefined || $scope.newUsername === "") {
							alert("Username cannot be blank!");
						} else {
							$uibModalInstance.close($scope.newUsername);
							console.log("Username: " + $scope.newUsername);
						}
					};
				},
				size: 'md',
				backdrop: 'static',
				keyboard: false
			});
			
			modalInstance.result.then(function(data) {
				$cookies.put('blocChatCurrentUser', data);
			});

		}

	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies])

})();