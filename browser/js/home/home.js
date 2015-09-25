app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'js/home/home.html',
    controller: ($scope) => {
      $scope.slides = [{
        image: "http://images.vcpost.com/data/images/full/13767/2u-inc.jpg?w=590",
        name: "2U",
        description: "yo"
      }, {
        image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
        name: "ShotSpotter",
        description: "lo"
      }, {
        image: "http://larryferlazzo.edublogs.org/files/2013/08/brainrush-q5dkeb.jpg",
        name: "BrainRush",
        description: "yolo"
      }]

      $scope.categories = [{
        image: "http://www.houseintuscany.com/sub_category_copies/0000/0006/photo_education.jpg?1410270167",
        name: "Education",
        text: "blah",
      }, {
        image: "http://www.metro.us/_internal/gxml!0/4dntvuhh2yeo4npyb3igdet73odaolf$fsf867qru2psg24byqk48w8os841zyh/shotSpotter.jpeg",
        name: "Security",
        text: "lah",
      }, {
        image: "http://www.paperonline.org/uploads/images/big/environment-2.jpg",
        name: "Environment",
        text: "lol",
      }]
    }
  });
});