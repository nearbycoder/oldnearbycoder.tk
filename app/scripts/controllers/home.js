'use strict';

/**
 * @ngdoc function
 * @name ngBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngBlogApp
 */
angular.module('ngBlogApp')
  .controller('HomeCtrl', function () {
    var theater = new TheaterJS();
    var count = 0;
    var theaterRun = document.cookie.split('=')[1];
    if(theaterRun !== 'True'){
	    theater
	    	.describe('nearbycoder', 1, '#nearbycoder');

	    theater
	    	.write('nearbycoder: Hello.....', 10)
	    	.write('nearbycoder: Welcome to my website!', 600)
	    	.write('nearbycoder: I am a web developer with a passion to code. Currently I work with ruby on rails, php, and javascript frameworks such as angularjs', 600);

	    theater
	    	.on('say:start, erase:start', function() {

	    	})
	    	.on('say:end', function() {
	    		count++;
	    		if(count === 3){
	    			$('.my-info').fadeIn(1000);
	    		}

	    	})
	    	.on('*', function() {

	    	});
	  } else {
	  	$('#nearbycoder').append('I am a web developer with a passion to code. Currently I work with ruby on rails, php, and javascript frameworks such as angularjs');
	  	$('.my-info').fadeIn(1000);
	  }

    document.cookie='theaterRun=True';
    $(document).ready(function(){
	    $('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	  });
  });
