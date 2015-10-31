app.directive('starRating', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/star-rating/star-rating.html',
    scope: {
      rating: '='
    }

  };

});