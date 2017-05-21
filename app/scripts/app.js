(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'
    })

    .state('rooms', {
      url: '/rooms',
      controller: 'RoomCtrl as rooms',
      templateUrl: '/templates/rooms.html',
    });

    .state('modals', {
      url: '/modals',
      controller: 'ModalCtrl as modals',
      templateUrl: '/templates/modals.html',
    });
  }

  angular
  .module('bloc-chat', ['ui.bootstrap', 'ui.router', 'firebase'])
  .config(config);
})();
