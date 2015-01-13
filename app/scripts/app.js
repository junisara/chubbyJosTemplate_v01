'use strict';

/**
 * @ngdoc overview
 * @name AppName
 * @description
 * # AppName
 *
 * Main module of the application.
 */
var app = angular.module('AppName', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/css', {
      templateUrl: 'views/css.html',
      controller: 'CssCtrl'
    })
   .when('/components', {
      templateUrl: 'views/components.html',
      controller: 'ComponentsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});



app.controller('MainController', function() {
  this.tab = 1;

  this.setTab = function(newValue) {
    this.tab = newValue;
  };

  this.isSet = function(tabName) {
    return this.tab === tabName;
  };
});
