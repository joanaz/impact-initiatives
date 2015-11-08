app.config(function($stateProvider) {
  $stateProvider.state('write-story', {
    url: '/companies/:id/write',
    templateUrl: 'js/write-story/write-story.html',
    resolve: {
      company: ($stateParams, ProfilesFactory) => ProfilesFactory.getCompany($stateParams.id)
    },
    controller: ($scope, $state, ProfilesFactory, company) => {
      $scope.company = company
      $scope.story = {
        date: "22-10-2015",
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
        console.log($scope.imageFile);
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
        ProfilesFactory.updateCompany($scope.company._id, data)

        $state.go('page4', {
          id: $scope.company._id
        })
      }
    }
  })
})


app.config(function($stateProvider) {
  $stateProvider.state('page4', {
    url: '/companies/:id/write/4',
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