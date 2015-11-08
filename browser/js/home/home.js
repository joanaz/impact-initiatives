app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    resolve: {
      companies: (ProfilesFactory) => ProfilesFactory.getCompanies()
    },
    controller: ($scope, companies, ProfilesFactory) => {
      $scope.slides = companies
      $scope.categories = ProfilesFactory.getCategories()
    }
  });
});