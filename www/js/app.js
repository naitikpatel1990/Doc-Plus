// Ionic demo App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'demo' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'demo.services' is found in services.js
// 'demo.controllers' is found in controllers.js
angular.module('demo', ['ionic', 'demo.controllers', 'demo.services','ngStorage'])

.run(function($ionicPlatform ) {
  $ionicPlatform.ready(function() {
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.cal', {
      url: '/cal',
      views: {
        'tab-cal': {
          templateUrl: 'templates/tab-cal.html',
          controller: 'CalCtrl'
        }
      }
    })

    .state('tab.searchword', {
      url: '/cal',
      views: {
        'tab-cal': {
          templateUrl: 'templates/search-word.html',
          controller: 'SearchWordCtrl'
        }
      }
    })

    .state('tab.searchshift', {
      url: '/cal',
      views: {
        'tab-cal': {
          templateUrl: 'templates/search-shift.html',
          controller: 'SearchShiftCtrl'
        }
      }
    })

    .state('tab.searchname', {
      url: '/cal',
      views: {
        'tab-cal': {
          templateUrl: 'templates/search-name.html',
          controller: 'SearchNameCtrl'
        }
      }
    })

    .state('tab.doctor-detail', {
      url: '/doctor/:doctorId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/details.html',
          controller: 'DetailsCtrl'
        }
      }
    })

    .state('tab.daydetail', {
      url: '/day/:date',
      views: {
        'tab-cal': {
          templateUrl: 'templates/day-detail.html',
          controller: 'DayDetailsCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

