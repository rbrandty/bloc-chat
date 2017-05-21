(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    var ctrl = this;

    ctrl.rooms = Room.all;

    ctrl.currentRoom = null;

    ctrl.open = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    };

    ctrl.setCurrentRoom = function(room) {
      ctrl.currentRoom = room;
      ctrl.currentMessages = Message.getByRoomId(ctrl.currentRoom.$id);
    };
  }

  angular
  .module('bloc-chat')
  .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
