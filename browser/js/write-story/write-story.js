app.config(function($stateProvider) {
  $stateProvider.state('write-story', {
    url: '/company/:id/write',
    templateUrl: 'js/write-story/write-story.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getUserById($stateParams.id)
    },
    controller: ($scope, $state, ProfilesFactory, company) => {
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

      var date = new Date();
      $scope.changeState = function() {
        console.log($scope.company._id);
        console.log("hello"+$scope.picFile);
        var data = {
          profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
          author: "Joanna Zhang",
          // user: user.id,
          date: date.toDateString(),
          rating: $scope.rating,
          text: $scope.newStory,
          image: $scope.imageFile
        }

        $scope.company.stories.unshift(data)
        ProfilesFactory.updateStory($scope.company._id, data)

        $state.go('page4', {
          id: $scope.company._id
        })
      }

      $scope.onFileSelect = function ($files) {
        console.log("file select");
        $scope.uploadProgress = 0;
        $scope.selectedFile = $files;
      };
    }
  })
})


app.config(function($stateProvider) {
  $stateProvider.state('page4', {
    url: '/company/:id/write/2',
    templateUrl: 'js/write-story/page4.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getCompany($stateParams.id)
    },
    controller: ($scope, $state, company) => {
      $scope.company = company
      $scope.changeState = function() {
        $state.go('company-page', {
          id: $scope.company._id
        })
      }
    }
  })
})