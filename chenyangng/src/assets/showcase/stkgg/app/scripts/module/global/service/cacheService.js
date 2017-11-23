(function(){
	'use strict';
	var mod = angular.module('global.service');
	
	//cache params btw ctrl
	mod.factory('CACHE_PARAM_BTW_CTRL', ['$cacheFactory', function($cacheFactory) {
	    return $cacheFactory('CACHE_PARAM_BTW_CTRL');
	}]);	
	
	//other caches..
	
})();
