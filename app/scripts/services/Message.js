(function() {
  function Message($firebaseArray) {
    this.roomID = "room1"
    var ref = new Firebase('https://bloc-chat-47eb6.firebaseio.com/' + this.roomID + '/messages');
    ref.set ({
      message1: "test",
      message2: "doubletest",
    });
    var messagesObj = $firebaseArray(ref);
    this.messages = messagesObj
    return this;
        
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);

})();
