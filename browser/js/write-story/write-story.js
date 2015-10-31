app.config(function($stateProvider) {
  $stateProvider.state('write-story', {
    url: '/companies/:url/write',
    templateUrl: 'js/write-story/write-story.html',
    controller: ($scope, $state, $stateParams, fileUpload, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)


      $scope.changeState = function() {


        $scope.company.stories.unshift({
          author: "Joanna Zhang",
          profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
          date: new Date(),
          rating: $scope.rating,
          text: $scope.newStory,
          image: ""
        })
        $state.go('page4', {
          url: $scope.company.url
        })
      }
    }
  })
})


app.config(function($stateProvider) {
  $stateProvider.state('page4', {
    url: '/companies/:url/write/4',
    templateUrl: 'js/write-story/page4.html',
    controller: ($scope, $state, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)
      $scope.changeState = function() {
        $state.go('company-page', {
          url: $scope.company.url
        })
      }
    }
  })
})