app.config(function($stateProvider) {
  $stateProvider.state('companies', {
    url: '/companies',
    templateUrl: 'js/companies/companies.html',
    controller: ($scope, ProfilesFactory) => {
      $scope.companies = ProfilesFactory.getAllCompanies()
    }
  });
});