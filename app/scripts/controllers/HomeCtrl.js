(function() {
  function HomeCtrl(Room, Message, $cookies, $uibModal) {
    var home = this;
    home.rooms = Room.all;
    home.currentRoom = null;
    home.currentUser = $cookies.get('blocChatCurrentUser');

    home.addRoom = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });
    };

    home.sendMessage = function(message) {
      message.roomId = home.currentRoom.$id;
      message.username = home.currentUser;
      Message.send(message);
    };

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(home.currentRoom.$id);
    };
  }

  angular
  .module('bloc-chat')
  .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
