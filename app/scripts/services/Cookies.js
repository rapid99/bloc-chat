(function() {	

	function BlocChatCookies($cookies) {
		var currentUser = $cookies.get('BlocChatCurrentUser');
		if (!currentUser || currentUser === '') {
			// inject $uibModal
			// $uibModal.open({})
			$uibModal.open({
				ariaLabelledBy: 'modal-title',
		        ariaDescribedBy: 'modal-body',
		        template: template,
		        controller: 'ModalInstanceCtrl',
		        controllerAs: '$ctrl',
		        size: size,
		        appendTo: parentElem
      		});
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies])
})();