(function(){
	'use strict';

	var mod = angular.module('global.controller');

	mod.controller('RootCtrl', ['$scope', '$window', function($scope, $window){

		//by default collapsed is false
		$scope.collapse_menu = false;

		/**
		 * window size watch
		 */
		var win = angular.element($window);
        win.bind("resize",function(e){
        	if(win[0].innerWidth<=1024){
        		$scope.collapse_menu = true;
        		$scope.$apply();
        	}else{
        		$scope.collapse_menu = false;
        		$scope.$apply();
        	}
        });
	}]);
}());