(function() {
  function ChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/prompt.html',
        controller: function($scope, $cookies, $uibModalInstance){
             $scope.setUserName = function(currentUser) {
                if (currentUser && currentUser !== '') {
                    console.log(currentUser);
                    $cookies.put('blocChatCurrentUser', currentUser);
                    $uibModalInstance.close();
                } else {
                    alert("Invalid Username");
                }
            };
        },
        size: 'sm',
        backdrop: 'static'
      });
    }
  }

  angular
    .module('bloc-chat')
    .run(['$cookies', '$uibModal', ChatCookies]);
})();
