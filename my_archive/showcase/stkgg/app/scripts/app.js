(function () {
	'use strict';
	
	/**
	 * App modules config
	 */
	var modules = [
	               { modName: 'user', deps: [] },
	               { modName: 'stock', deps: [] }, 
	               { modName: 'global', deps: []}
	              ];

	_.each(modules, function(mod){
		var
		filter = mod.modName + ".filter",
		controller = mod.modName + ".controller",
		service = mod.modName + ".service";
		
		angular.module(filter, []);
		angular.module(controller, []);
		angular.module(service, []);
		mod.deps = _.flatten([filter, controller, service]);
	});  

	/**
	 * App deps config
	 */
	var appDeps = [];
	_.each(modules, function(mod){
		appDeps.push(mod.deps);
		appDeps = _.flatten(appDeps);
	}); 
	//Adding other angular modules/deps
	appDeps.push('ngRoute');
	appDeps.push('ngAnimate');
	appDeps.push('ngCookies');
	appDeps.push('ui.bootstrap');
	appDeps.push('nvd3');
	appDeps.push('flow');
	
	
	/**
	 * App Init
	 */
	var app = angular.module('App', appDeps);
	
	//Configure route provider, route controller and template url
	app.config(['$httpProvider', '$routeProvider','Navigation', function($httpProvider, $routeProvider, Navigation) {
		
		$httpProvider.interceptors.push('globalHttpInterceptor');
		
		var listeNavigation=Navigation;
		_.each(listeNavigation, function(navigation){
			$routeProvider.when(''+navigation.when, {templateUrl:navigation.templateUrl, controller:navigation.controller, view:navigation.view});
			$routeProvider.otherwise({redirectTo:'/'});
		});
		
	}]);
	
	
})();




