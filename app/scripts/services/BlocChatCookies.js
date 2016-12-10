(function() {	

	function BlocChatCookies($cookies, $uibModal) {

		var template = "<h1 class='set-user-h1'>Set Username</h1>" +
		"<input class='set-username' placeholder='Enter your username here' ng-model='setNewUsername.name' required type='text'>" +
		"<button type='button' class='userBtn btn-primary' ng-click='userCtrl.setUserName()' data-dismiss='modal' >Set Username</button>";

		var currentUser = $cookies.get('BlocChatCurrentUser');

		if (!currentUser || currentUser === '') {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
		        ariaDescribedBy: 'modal-body',
		        template: template,
		        controller: 'SetUsernameInstanceModal',
		        controllerAs: 'userCtrl'
      		})
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies])
		.controller('SetUsernameInstanceModal', ['$uibModal', '$cookies', function($uibModalInstance, $cookies) {


    		this.setUserName = function () {
    			var test = "testing testing";
    			console.log(test);
    			
    			
		    }
		}])
})();