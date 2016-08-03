'use strict';

/**
 * @ngdoc overview
 * @name geebApp
 * @description
 * # geebApp
 *
 * Main module of the application.
 */
angular
  .module('geebApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/agregarMaestro',{
      templateUrl: 'views/formMaestros.html',
      controller: 'agregarMaestroController',
      controllerAs: 'am'
      })
        .when('/', {
        templateUrl: 'views/Card.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
