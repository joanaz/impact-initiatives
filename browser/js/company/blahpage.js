app.config(function($stateProvider) {
  $stateProvider.state('blahpage', {
    url: '/companies/:name',
    templateUrl: 'js/companies/company-page.html',
    controller: ($scope, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.name)

    }
  });
})