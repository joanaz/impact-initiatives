app.config(function($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      abstract: true,
      templateUrl: 'js/dashboard/dashboard.html',
      resolve: {
        user: (AuthService) => AuthService.getLoggedInUser()
      },
      controller: ($scope, user, ProfilesFactory) => {
        $scope.user = user
        $scope.companies = ProfilesFactory.getAllCompanies()
        $scope.items = [{
          label: 'Profile',
          state: 'dashboard.profile',
          role: 'all'
        }, {
          label: 'User Emails',
          state: 'dashboard.emails',
          role: 'all'
        }, {
          label: 'Portfolio',
          state: 'dashboard.portfolio',
          role: 'VC'
        }, {
          label: 'Following',
          state: 'dashboard.following',
          role: 'all'
        }, {
          label: 'Metrics',
          state: 'dashboard.metrics',
          role: 'company'
        }]
      }
    })
    .state('dashboard.profile', {
      url: '',
      templateUrl: 'js/dashboard/profile.html',
    })
    .state('dashboard.emails', {
      url: '/emails',
      templateUrl: 'js/dashboard/emails.html',
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
      controller: ($scope, ProfilesFactory) => {
        $scope.company = ProfilesFactory.getCompany("2U")
        console.log($scope.company)
      }

    })
});