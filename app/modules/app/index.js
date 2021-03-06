'use strict';

module.exports =
  angular.module('skincareDiagnostic', [
    'ui.bootstrap',
    'ui.router',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    //html templates in $templateCache generated by Gulp:
    require('../../../tmp/templates').name,
    //useful directives, filters, services shared across the app
    require('../shared').name,
    //example app module:
    require('./home').name,
    require('./questions').name,
    require('./results').name

    //load extra app modules here, e.g.:
    //require('./frontend').name,
    //require('./admin').name
  ])
  //configuring routes here
  .config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    })
    .state('questions', {
      url: '/questions/:id',
      templateUrl: 'app/questions/questions.html',
      controller: 'questionsController'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'app/results/results.html',
      controller: 'resultsController'
    });

  });
