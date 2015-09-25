app.config(function($stateProvider) {
  $stateProvider.state('vcs', {
    url: '/vcs',
    templateUrl: 'js/vcs/vcs.html',
    controller: ($scope, ProfilesFactory) => {
      $scope.vcs = ProfilesFactory.getAllVCs()
    }
  });
});