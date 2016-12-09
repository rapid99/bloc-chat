(function() {	

	function BlocChatCookies($cookies, $uibModal) {

		var template = "<h1>Set Username</h1>" +
		"<input class='set-username' placeholder='Enter your username here' ng-model='setNewUsername.name' required type='text'>" +
		"<button type='button' class='userBtn btn-primary' ng-click='setUserName()'>Set Username</button>";

		var currentUser = $cookies.get('BlocChatCurrentUser');

		if (!currentUser || currentUser === '') {
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
		        ariaDescribedBy: 'modal-body',
		        template: template,
		        controller: 'SetUsernameInstanceModal',
		        controllerAs: '$ctrl'
      		});
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies])
		.controller('SetUsernameInstanceModal', ['$uibModal', '$cookies', function($modalInstance, $cookies) {
			this.setNewUsername = {
        		name: ''
    		};

    		this.setUserName = function () {
		        var username = this.setNewUsername.name;

		        if (!username === undefined) {
		            username = username.replace(/^\s+/, '').replace(/\s+$/, '');
		        }

		        if (username === '' || username === undefined) {
		            this.usernameError = 'Username cannot be empty';
		            this.usernameErrorTrue = true;
		            this.setNewUsername.name = '';
		            return
		        } else {
		            $cookies.blocChatCurrentUser = username;
		            $uibModalInstance.dismiss();
		        }
		    };
		}]);
})();