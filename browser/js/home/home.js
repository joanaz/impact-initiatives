app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: ($scope, ProfilesFactory) => {
      $scope.slides = ProfilesFactory.getAllCompanies()
      $scope.categories = ProfilesFactory.getAllCategories()
    }
  });
});