app.config(function($stateProvider) {
  $stateProvider
    .state('test', {
      url: '/test',
      templateUrl: 'js/dashboard/test.html',
      resolve: {
        user: (AuthService, ProfilesFactory) =>
          AuthService.getLoggedInUser().then(user =>
            ProfilesFactory.getUserById(user._id)),
      },
      controller: ($scope) => {
        $(document).ready(function() {
          var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;

          trigger.click(function() {
            hamburger_cross();
          });

          function hamburger_cross() {

            if (isClosed == true) {
              overlay.hide();
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
              isClosed = false;
            } else {
              overlay.show();
              trigger.removeClass('is-closed');
              trigger.addClass('is-open');
              isClosed = true;
            }
          }

          $('[data-toggle="offcanvas"]').click(function() {
            $('#wrapper').toggleClass('toggled');
          });
        });
      }
    })
})