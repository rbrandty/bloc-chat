(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      console.log(roomId);
      return $firebaseArray(messageRef.orderByChild('roomId').equalTo(roomId));
    }

    return Message;

  }

  angular
  .module('bloc-chat')
  .factory('Message', ['$firebaseArray', Message]);
})();
