app.directive('metricThumbnail', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/metric-thumbnail/metric-thumbnail.html',
    scope: {
      metric: '='
    },
    link: ($scope) => {
      $scope.data = $scope.metric.data[$scope.metric.data.length - 1]
    }
  };
});