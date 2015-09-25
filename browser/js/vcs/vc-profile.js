app.config(function($stateProvider) {
  $stateProvider.state('vc-profile', {
    url: '/vcs/:name',
    templateUrl: 'js/vcs/vc-profile.html',
    controller: ($scope, $stateParams, ProfilesFactory) => {
      var vc = ProfilesFactory.getVC($stateParams.name)
      vc.portfolio = vc.portfolio.map(elem => ProfilesFactory.getCompany(elem))
      $scope.vc = vc
    }
  });
})