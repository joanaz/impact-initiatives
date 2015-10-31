app.config(function($stateProvider) {
  $stateProvider.state('write-story', {
    url: '/companies/:url/write',
    templateUrl: 'js/write-story/write-story.html',
    controller: ($scope, $state, $stateParams, fileUpload, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)


      $scope.changeState = function() {
        var file = $scope.myFile;
        console.log('file is ');
        console.dir(file);
        var uploadUrl = "";
        fileUpload.uploadFileToUrl(file, uploadUrl);


        $scope.company.stories.unshift({
          author: "Joanna Zhang",
          profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
          date: "23-10-2015",
          text: $scope.newStory
        })
        $state.go('page2', {
          url: $scope.company.url
        })
      }
    }
  })
})

app.config(function($stateProvider) {
  $stateProvider.state('page2', {
    url: '/companies/:url/write/2',
    templateUrl: 'js/write-story/page2.html',
    controller: ($scope, $state, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)
      $scope.changeState = function() {
        $state.go('page3', {
          url: $scope.company.url
        })
      }
    }
  })
})

app.config(function($stateProvider) {
  $stateProvider.state('page3', {
    url: '/companies/:url/write/3',
    templateUrl: 'js/write-story/page3.html',
    controller: ($scope, $state, $stateParams, ProfilesFactory) => {
      $scope.company = ProfilesFactory.getCompany($stateParams.url)
      $scope.photos = []

      for (var i = 0, length = $scope.company.stories.length; i < length; i++) {

        if ($scope.company.stories[i].image) {
          $scope.photos.push($scope.company.stories[i].image)
          if ($scope.photos.length >= 2) break
        }
      }

      $scope.changeState = function() {
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