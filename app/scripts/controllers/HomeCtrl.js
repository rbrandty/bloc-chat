(function() {
  function HomeCtrl(Room, $uibModal) {
    var ctrl = this;

    ctrl.rooms = Room.all;

    ctrl.addRoom = function(){
      Room.add(ctrl.newRoom);
    }

    ctrl.open = function() {
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    }
  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
