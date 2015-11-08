app.config(function($stateProvider) {
  $stateProvider.state('companies', {
    url: '/companies',
    templateUrl: 'js/companies/companies.html',
    resolve: {
    	companies: (ProfilesFactory) => ProfilesFactory.getAllCompanies()
    },
    controller: ($scope, companies) => {
      $scope.companies = companies
 	  console.log($scope.companies);
    }
  });
});