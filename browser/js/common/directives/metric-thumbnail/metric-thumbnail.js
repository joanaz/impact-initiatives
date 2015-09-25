app.directive('metricThumbnail', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/metric-thumbnail/metric-thumbnail.html',
    scope: {
      metric: '='
    }
  };
});