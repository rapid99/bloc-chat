(function() {
	function MakeRoomCtrl(Room, $uibModal){
		var $ctrl = this;
		this.name = "";
	  	this.saveRoom = function(){
	  		Room.rooms.$add({title: this.name});
	  	}

	  	this.open = function (size, parentSelector, $uibModal) {
		    var parentElem = parentSelector ? 
		      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		    var modalInstance = $uibModal.open({
		      animation: $ctrl.animationsEnabled,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: 'myModalContent.html',
		      controller: 'ModalInstanceCtrl',
		      controllerAs: '$ctrl',
		      size: size,
		      appendTo: parentElem,
		      resolve: {
		        items: function () {
		          return [1,2,3];
		        }
		      }
		    });

		}
	}


	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', ['Room', MakeRoomCtrl])

})();