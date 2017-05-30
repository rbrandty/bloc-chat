(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/prompt.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    }
  }

  angular
  .module('bloc-chat')
  .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
