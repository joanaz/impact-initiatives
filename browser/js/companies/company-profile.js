app.config(function($stateProvider) {
  $stateProvider.state('company-profile', {
    url: '/companies/:name',
    templateUrl: 'js/companies/company-profile.html',
    controller: ($scope, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.name)
      $scope.tabs = [{
        title: "Main",
        content: ""
      }, {
        title: "Metrics",
        content: ""
      }]
    }
  });
})