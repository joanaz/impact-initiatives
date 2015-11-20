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
        $scope.items = [{
          label: 'Profile',
          state: 'dashboard.profile',
          role: 'all'
        }, {
          label: 'Email Campaigns',
          state: 'dashboard.email',
          role: 'all'
        }, {
          label: 'Stories',
          state: 'dashboard.stories',
          role: 'all'
        }, {
          label: 'Portfolio',
          state: 'dashboard.portfolio',
          role: 'VC'
        }, {
          label: 'Metrics',
          state: 'dashboard.metrics',
          role: 'Company'
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
      controller: ($scope, ProfilesFactory) => {
        $scope.publish = function(story) {
          story.public = true;
          // console.log(story)
          ProfilesFactory.publishStory(story._id, story)
        }
      }
    })
    .state('dashboard.email', {
      url: '/email',
      templateUrl: 'js/dashboard/email.html',
      controller: ($scope, ProfilesFactory) => {
        $scope.uploadedFile = function(element) {
          $scope.$apply(function($scope) {
            $scope.files = element.files;
          });
        }
        $scope.send = function() {

          var fd = new FormData();


          var data = {
            subject: $scope.subject,
            html: $scope.html,
            userid: $scope.user._id
          };

          fd.append("data", JSON.stringify(data));

          console.log($scope.files[0]);
          fd.append("upload", $scope.files[0]);

          ProfilesFactory.sendEmail(fd);
        }
      }
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
      controller: () => {
        // $scope.company = ProfilesFactory.getCompany("2U")
        // console.log($scope.company)
      }
    })
});