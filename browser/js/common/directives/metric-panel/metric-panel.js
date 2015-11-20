 app.directive('metricPanel', function() {
   return {
     restrict: 'E',
     templateUrl: 'js/common/directives/metric-panel/metric-panel.html',
     scope: {
       metric: '=',
       newData: '=',
     },
     link: ($scope) => {
       $scope.ranNum = Math.floor(Math.random() * 5);
     }
   };
 });