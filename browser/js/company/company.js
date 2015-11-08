app.config(function($stateProvider) {
  $stateProvider.state('company', {
    url: '/company/:id',
    templateUrl: 'js/company/company.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id)
    },
    controller: ($scope, $state, company) => {
      $scope.company = company
      $scope.write = function() {
        $state.go("write-story", {
          id: $scope.company._id
        })
      }
    }
  });
})