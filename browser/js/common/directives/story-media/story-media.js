app.directive('storyMedia', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/story-media/story-media.html',
    scope: {
      story: '='
    }
  };
});