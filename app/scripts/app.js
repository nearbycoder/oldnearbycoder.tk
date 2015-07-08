'use strict';

/**
 * @ngdoc overview
 * @name ngBlogApp
 * @description
 * # ngBlogApp
 *
 * Main module of the application.
 */
var ngBlogApp = angular.module('ngBlogApp', ['ui.router']);

ngBlogApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: 'views/index.html',
			controller: 'HomeCtrl'
		});
});
