app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    resolve: {
      companies: (ProfilesFactory) => ProfilesFactory.getCompanies(),
      categories: (ProfilesFactory) => ProfilesFactory.getCategories()
    },
    controller: ($scope, companies, categories) => {
      $scope.companies = companies
      $scope.categories = categories
    }
  });
});