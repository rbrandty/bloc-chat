(function() {
  function config($stateProvider) {

    $stateProvider
    .state('Home', {
      url: '/',
      controller: 'HomeCtrl as Home',
      //templateUrl: '/templates/landing.html'
    })

angular
.module('bloc-chat', ['ui.router', 'firebase'], )
.config(['$stateProvider']);
})();
