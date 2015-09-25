app.directive('profileThumbnail', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/profile-thumbnail/profile-thumbnail.html',
    scope: {
      profile: '='
    }
  };
});