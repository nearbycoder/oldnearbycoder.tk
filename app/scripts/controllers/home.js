'use strict';

/**
 * @ngdoc function
 * @name ngBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngBlogApp
 */
angular.module('ngBlogApp')
  .controller('HomeCtrl', function ($scope) {
    var theater = new TheaterJS();
    var count = 0;
    $scope.ruby = '0%';
  	$scope.angular = '0%';
  	$scope.php = '0%';
  	$scope.javascript = '0%';
  	$scope.sass = '0%';
  	$scope.css = '0%';
    var theaterRun = document.cookie.split('=')[1];
    if(theaterRun !== 'True'){
	    theater
	    	.describe('nearbycoder', 1, '#nearbycoder')
	    	.describe('logo', 0.5, '#logo');

	    theater
	    	.write('logo: Nearby&lt;/&gt;Coder', 4)
	    	.write('nearbycoder: Hello.....', 10)
	    	.write('nearbycoder: Welcome to my website!', 600)
	    	.write('nearbycoder: I am a web developer with a passion to code. Currently I work with ruby on rails, php, and javascript frameworks such as angularjs', 600);

	    theater
	    	.on('say:start, erase:start', function() {

	    	})
	    	.on('say:end', function() {
	    		count++;
	    		if(count === 4){
	    			$('.my-info').fadeIn(1000);
	    			$('.skills').fadeIn(1200, function(){
	    				$scope.ruby = '80%';
				  		$scope.angular = '60%';
					  	$scope.php = '85%';
					  	$scope.javascript = '67%';
					  	$scope.sass = '50%';
					  	$scope.css = '90%';
					  	$scope.$apply();
	    			});
	    		}

	    	})
	    	.on('*', function() {

	    	});
	  } else {
	  	$('#nearbycoder').append('I am a web developer with a passion to code. Currently I work with ruby on rails, php, and javascript frameworks such as angularjs');
	  	$('#logo').append('Nearby&lt;/&gt;Coder');
	  	$('.my-info').fadeIn(1000);
	  	$('.skills').fadeIn(2000, function(){
	  		$scope.ruby = '80%';
	  		$scope.angular = '60%';
		  	$scope.php = '85%';
		  	$scope.javascript = '67%';
		  	$scope.sass = '50%';
		  	$scope.css = '90%';
		  	$scope.$apply();
	  	});
	  	
	  }

    document.cookie='theaterRun=True';
    $(document).ready(function(){
	    $('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	  });
  });
