(function() {
  function MakeRoomCtrl(Room, $uibModal, $uibModalInstance, ModalInstanceCtrl){
    var template = "<div class='modal-dialog' role='document'>" +
      "<div class='content'>" +
        "<div class='modal-header'>" +
            "<h4>Create a new room</h4>" +
        "</div>" +
        "<div class='modal-body'>" +
          "<p>Enter a room name</p>" +
          "<div class='room-name'>" +
            "<input type='textbox' placeholder='enter a room name here' ng-model='$ctrl.roomName'></div>" +
          "</div>" +
        "</div>" +
        "<div class='modal-footer'>" +
          "<button class='btn btn-success' ng-click='$ctrl.save() && $ctrl.cancel()'>Okay</button>" +
          "<button class='btn' ng-click='$ctrl.cancel()'>Cancel</button>" +
        "</div>" +
      "</div>" +
    "</div>";

    this.open = function (size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;

      var modalInstance = $uibModal.open({
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

  // The controller passes the instance of an open $uibModal as $uibModalInstance
  angular
    .module('blocChat')
    .controller('MakeRoomCtrl', ['Room', '$uibModal', MakeRoomCtrl])
    .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', function (Room, $uibModalInstance) {
      var $ctrl = this;
      $ctrl.roomName = "";
      console.log($ctrl.roomName)

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };

      $ctrl.save = function () {
        Room.rooms.$add({title: $ctrl.roomName});
        $uibModalInstance.dismiss('cancel');
      };

    }]);

})();