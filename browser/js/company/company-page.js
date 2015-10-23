app.config(function($stateProvider) {
  $stateProvider.state('company-page', {
    url: '/companies/:url',
    templateUrl: 'js/company/company-page.html',
    controller: ($scope, $state, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)
      $scope.write = function() {
        console.log($scope.company.url)
        $state.go("write-story", {
          url: $scope.company.url
        })
      }
    }
  });
})