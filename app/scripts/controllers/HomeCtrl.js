(function() {
  function HomeCtrl() {
    this.heroTitle = "Chat!";
  };

angular
.module('bloc-chat')
.controller('HomeCtrl', HomeCtrl);
})();
