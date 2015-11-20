app.config(function($stateProvider) {
  $stateProvider.state('vcs', {
    url: '/vcs',
    templateUrl: 'js/vcs/vcs.html',
    resolve: {
      vcs: (ProfilesFactory) => ProfilesFactory.getVCs()
    },
    controller: ($scope, vcs) => {
      $scope.vcs = vcs
    }
  });
});