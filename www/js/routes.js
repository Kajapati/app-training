angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('l2MGAME', {
    url: '/page5',
    templateUrl: 'templates/l2MGAME.html',
    controller: 'l2MGAMECtrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page7',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page12',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page13', {
    url: '/page13',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('gAME110', {
    url: '/page8',
    templateUrl: 'templates/gAME110.html',
    controller: 'gAME110Ctrl'
  })

  .state('kENAL10', {
    url: '/page9',
    templateUrl: 'templates/kENAL10.html',
    controller: 'kENAL10Ctrl'
  })

  .state('tAMBAH10', {
    url: '/page14',
    templateUrl: 'templates/tAMBAH10.html',
    controller: 'tAMBAH10Ctrl'
  })

  .state('tOLAK10', {
    url: '/page15',
    templateUrl: 'templates/tOLAK10.html',
    controller: 'tOLAK10Ctrl'
  })

  .state('tAMBAH18', {
    url: '/page16',
    templateUrl: 'templates/tAMBAH18.html',
    controller: 'tAMBAH18Ctrl'
  })

  .state('tOLAK18', {
    url: '/page17',
    templateUrl: 'templates/tOLAK18.html',
    controller: 'tOLAK18Ctrl'
  })

  .state('gOOD', {
    url: '/page18',
    templateUrl: 'templates/gOOD.html',
    controller: 'gOODCtrl'
  })

  .state('bAD', {
    url: '/page19',
    templateUrl: 'templates/bAD.html',
    controller: 'bADCtrl'
  })

  .state('signup', {
    url: '/page21',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page21')


});