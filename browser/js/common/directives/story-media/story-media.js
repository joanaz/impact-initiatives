app.directive('storyMedia', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/story-media/story-media.html',
    scope: {
      story: '='
    },
    link: ($scope) => {
      $scope.date = new Date($scope.story.date).toDateString()
    }
  };
});