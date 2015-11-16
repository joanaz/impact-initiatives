app.directive('userStory', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/user-story/user-story.html',
    scope: {
      story: '=',
      publish: '&'
    }
  };
});