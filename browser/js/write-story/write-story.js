app.config(function($stateProvider) {
  $stateProvider.state('write-story', {
    url: '/company/:id/write',
    templateUrl: 'js/write-story/write-story.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id),
      user: (AuthService, ProfilesFactory) => AuthService.getLoggedInUser().then(user => ProfilesFactory.getUserById(user._id))
    },
    controller: ($scope, $state, ProfilesFactory, company, user) => {
      $scope.company = company
      $scope.story = {
        date: "Thurs Oct 22 2015",
        profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
        author: "Anonymous",
        anthorDescription: "",
        // image: "survey_results/R_2OYJpC3ag4S9uox~IMG_2962.jpg",
        title: "",
        text: "I love Cornell Tech because it is capable of giving me exactly the education I want: both challenging masters level computer science as well as top notch product design experience. The professors and students bring an unrelenting energy to their work. I wouldn't want to go anywhere else."
      };
      $scope.user = user;

      var date = new Date();

      $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
      };

      $scope.uploadedFile = function(element) {
        $scope.$apply(function() {
          $scope.files = element.files;
        });
      }

      $scope.changeState = function() {
        console.log($scope.company._id);

        var fd = new FormData();
        console.log($scope.user);
        var data = {
          profile: $scope.user.image,
          author: $scope.user.name,
          date: date.toDateString(),
          rating: $scope.rating,
          text: $scope.newStory,
        }

        fd.append("data", JSON.stringify(data));

        if ($scope.files != null && $scope.files.length > 0) {
          fd.append("upload", $scope.files[0]);
        }

        $scope.company.stories.push(data)

        ProfilesFactory.updateStory($scope.company._id, fd).then(function() {
          $state.go('write-share', {
            id: $scope.company._id
          })
        })
      }
    }
  })
})

app.config(function($stateProvider) {
  $stateProvider.state('write-share', {
    url: '/company/:id/write/share',
    templateUrl: 'js/write-story/page4.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id)
    },
    controller: ($scope, $state, company) => {
      $scope.company = company
      $scope.changeState = function() {
        $state.go('company', {
          id: $scope.company._id
        })
      }
    }
  })
})