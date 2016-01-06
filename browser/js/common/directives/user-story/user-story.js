app.directive('userStory', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/user-story/user-story.html',
    scope: {
      story: '=',
      publish: '&'
    },
    link: ($scope) => {
      console.log($scope.story.score)
      $scope.score = Math.round($scope.story.score * 100)
      console.log($scope.score)
    }
  };
});