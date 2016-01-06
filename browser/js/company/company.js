app.config(function($stateProvider) {
  $stateProvider.state('company', {
    url: '/company/:id',
    templateUrl: 'js/company/company.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id)
    },
    controller: ($scope, $state, company, ProfilesFactory) => {
      $scope.company = company;

      $scope.averageRating = Math.ceil($scope.company.stories.reduce(function(pre, cur) {
        return pre + cur.rating
      }, 0) / $scope.company.stories.length);

      $scope.averageSentiment = ProfilesFactory.getAverageSentiment($scope.company.stories)



      $scope.write = function() {
        $state.go("write-story", {
          id: $scope.company._id
        })
      }
    }
  });
})