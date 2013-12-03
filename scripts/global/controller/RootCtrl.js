(function(){
	'use strict';
	
	var mod = angular.module('global.controller');
	
	mod.controller('RootCtrl', ['$scope', function($scope){
		
		$scope.hello = "DK";

	}]);
	
}());