(function() {
  function ModalCtrl($uibModal, $log, Room) {

    this.open = function() {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl : '/templates/modal.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal'

      });

      modalInstance.result.then(function(name) {
        this.room = name;
        Room.create(this.room);
      }, function() {
        $log.info('Modal dismissed at ' + new Date());
      });
    };

    this.toggleAnimation = function () {
      this.animationsEnabled = !this.animationsEnabled;
    };
  }

  angular
  .module('bloc-chat')
  .controller('ModalCtrl', ['$scope','Room', '$uibModalInstance', ModalCtrl]);
})();
