(function() {
  function HomeCtrl(Room, Message, $cookies, $uibModal) {
    var home = this;
    home.rooms = Room.all;
    home.currentRoom = null;

    home.addRoom = function() {

      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });
    };

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(home.currentRoom.$id);
      console.log(home.messages)
    }
  }

  angular
  .module('bloc-chat')
  .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
