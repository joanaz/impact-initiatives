app.config(function($stateProvider) {
  $stateProvider.state('company-stories', {
    url: '/companies/:name',
    templateUrl: 'js/companies/company-stories.html',
    controller: ($scope, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.name)
      console.log($scope.company)
    }
  });
})