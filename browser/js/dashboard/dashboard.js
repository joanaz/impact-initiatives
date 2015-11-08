app.config(function($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      abstract: true,
      templateUrl: 'js/dashboard/dashboard.html',
      resolve: {
        user: (AuthService, ProfilesFactory) =>
          AuthService.getLoggedInUser().then(user =>
            ProfilesFactory.getUserById(user._id)),
      },
      controller: ($scope, user) => {
        $scope.user = user
        console.log($scope.user)
          // $scope.companies = ProfilesFactory.getAllCompanies()
        $scope.items = [{
          label: 'Profile',
          state: 'dashboard.profile',
          role: 'all'
        }, {
          label: 'Send Emails',
          state: 'dashboard.email',
          role: 'all'
        }, {
          label: 'Stories',
          state: 'dashboard.stories',
          role: 'all'
        }, {
          label: 'Suggestions',
          state: 'dashboard.suggestions',
          role: 'all'
        }, {
          label: 'Portfolio',
          state: 'dashboard.portfolio',
          role: 'VC'
        }, {
          label: 'Metrics',
          state: 'dashboard.metrics',
          role: 'company'
        }, {
          label: 'Following',
          state: 'dashboard.following',
          role: 'all'
        }]
      }
    })
    .state('dashboard.profile', {
      url: '',
      templateUrl: 'js/dashboard/profile.html',
    })
    .state('dashboard.stories', {
      url: '/stories',
      templateUrl: 'js/dashboard/stories.html',
      controller: ($scope) => {
        // console.log($scope.company.stories)
      }
    })
    .state('dashboard.suggestions', {
      url: '/suggestions',
      templateUrl: 'js/dashboard/suggestions.html',
    })
    .state('dashboard.email', {
      url: '/email',
      templateUrl: 'js/dashboard/email.html',
    })
    .state('dashboard.portfolio', {
      url: '/portfolio',
      templateUrl: 'js/dashboard/portfolio.html',
    })
    .state('dashboard.following', {
      url: '/following',
      templateUrl: 'js/dashboard/following.html',
    })
    .state('dashboard.metrics', {
      url: '/metrics',
      templateUrl: 'js/dashboard/metrics.html',
      controller: ($scope) => {
        // $scope.company = ProfilesFactory.getCompany("2U")
        // console.log($scope.company)
      }
    })
});