(function() {
	function MakeRoomCtrl(Room, $uibModal, $uibModalInstance, ModalInstanceCtrl){
		var $ctrl = this;
		var template = "<div class='modal-dialog' >" +
		"<div class='modal-header'>" +
			          "<h4>Create a new room</h4>" +
			      "</div>" +
			      "<div class='modal-body'>" +
			          "<p>Enter a room name</p>" +
			      "</div>" +
			      "<div class='room-name'>" +
			        "<input type='textbox' placeholder='enter a room name here' ng-model='$ctrl.name'></div>" +
			      "</div>" +
			      "<div class='modal-footer'>" +
			        "<button class='btn btn-success' ng-click='$ctrl.saveRoom()'>Okay</button>" +
			        "<button class='btn' ng-click='$ctrl.cancel()'>Cancel</button>" +
		    "</div>" +
		"</div>"

		// var template = 
		// "<div class='modal fade in' id='myModal' role='dialog'>" +
		// 	"<div class='modal-dialog' ng-show='show'>" + 
		// 		"<div close='cancel()'> <div class='modal-header'>" +	   
		// 	      "<div class='modal-header'>" +
		// 	          "<h4>Create a new room</h4>" +
		// 	      "</div>" +
		// 	      "<div class='modal-body'>" +
		// 	          "<p>Enter a room name</p>" +
		// 	      "</div>" +
		// 	      "<div class='room-name'>" +
		// 	        "<input type='textbox' placeholder='enter a room name here' ng-model='makeRoom.name'></div>" +
		// 	      "</div>" +
		// 	      "<div class='modal-footer'>" +
		// 	        "<button class='btn btn-success' ng-click='makeRoom.saveRoom()' ui-sref='home'>Okay</button>" +
		// 	        "<button class='btn' ui-sref='home'>Cancel</button>" +
		// 	      "</div>" +
		// 	    "</div>" +
		// 	"<div>";
		this.name = "";
	  	this.saveRoom = function(){
	  		Room.rooms.$add({title: this.name});
	  	}
	  	this.cancel = function () {
	  		console.log($uibModalInstance)
				$uibModalInstance.dismiss('cancel');
		};

	  	this.open = function (size, parentSelector) {
		    var parentElem = parentSelector ? 
		      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		    var modalInstance = $uibModal.open({
		      animation: $ctrl.animationsEnabled,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      template: template,
		      controller: 'MakeRoomCtrl',
		      controllerAs: '$ctrl',
		      size: size,
		      appendTo: parentElem
		    });

		}

	}

	


	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', ['Room', '$uibModal', MakeRoomCtrl])

})();
