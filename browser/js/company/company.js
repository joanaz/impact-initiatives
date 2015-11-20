app.config(function($stateProvider) {
  $stateProvider.state('company', {
    url: '/company/:id',
    templateUrl: 'js/company/company.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id)
    },
    controller: ($scope, $state, company) => {
      $scope.company = company;

      $scope.averageRating = Math.ceil($scope.company.stories.reduce(function(pre, cur) {
        return pre + cur.rating
      }, 0) / $scope.company.stories.length);

      $scope.averageSentiment = Math.ceil(Math.sqrt($scope.company.stories.reduce(function(pre, cur) {
        return pre + cur.score
      }, 0) / $scope.company.stories.length) * 100);

      $scope.write = function() {
        $state.go("write-story", {
          id: $scope.company._id
        })
      }
    }
  });
})