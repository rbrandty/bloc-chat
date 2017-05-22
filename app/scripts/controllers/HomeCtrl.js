(function() {
  function HomeCtrl(Room, Message, $cookies, $uibModal) {
    var ctrl = this;

    ctrl.rooms = Room.all;

    ctrl.currentRoom = null;

    ctrl.open = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'
      });
    };

    ctrl.setCurrentRoom = function(roomId) {
      ctrl.currentMessages = Message.getByRoomId(roomId);
    };
  }

  angular
  .module('bloc-chat')
  .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
