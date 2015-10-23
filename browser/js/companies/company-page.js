app.config(function($stateProvider) {
  $stateProvider.state('company-page', {
    url: '/companies/:name',
    templateUrl: 'js/companies/company-page.html',
    controller: ($scope, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.name)
      console.log($scope.company)

    }
  });
})