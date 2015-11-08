app.config(function($stateProvider) {
  $stateProvider.state('company-page', {
    url: '/companies/:id',
    templateUrl: 'js/company/company-page.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getCompany($stateParams.id)
    },
    controller: ($scope, $state, company) => {
      $scope.company = company
      console.log($scope.company)
      $scope.write = function() {
        $state.go("write-story", {
          id: $scope.company.id
        })
      }
    }
  });
})