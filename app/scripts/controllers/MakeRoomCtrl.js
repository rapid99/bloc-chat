(function() {
	function MakeRoomCtrl(Room){
		this.showModal = false;

		this.toggleModal =  function() {
			this.showModal = !this.showModal;
		}
	}

	angular
		.module('blocChat')
		.controller('MakeRoomCtrl', ['Room', MakeRoomCtrl])
})();
