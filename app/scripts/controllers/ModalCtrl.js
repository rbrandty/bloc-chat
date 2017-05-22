(function() {
    function ModalCtrl($uibModalInstance, Room){
        var modal = this;

        modal.text = "";

        modal.addRoom = function(name){
            Room.add({ name: name });
            $uibModalInstance.close();
        };

        modal.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    angular
        .module('bloc-chat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl])
})();
