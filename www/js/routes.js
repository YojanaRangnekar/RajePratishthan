angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.visionSndMission', {
    url: '/visionMission',
    views: {
      'side-menu21': {
        templateUrl: 'templates/visionSndMission.html',
        controller: 'visionSndMissionCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('contactUs', {
    url: '/contactUs',
    templateUrl: 'templates/contactUs.html',
    controller: 'contactUsCtrl'
  })

  .state('menu.ourTeam', {
    url: '/team',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ourTeam.html',
        controller: 'ourTeamCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});