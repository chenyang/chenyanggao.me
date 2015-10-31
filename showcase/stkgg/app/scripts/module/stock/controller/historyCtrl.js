(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HistoryCtrl", ['$scope', '$location', '$http', '$routeParams', '$cookies', 'APIMOCK', 'API', 
	                               function($scope, $location, $http, $routeParams, $cookies, APIMOCK, API){
			
		
		var getTips = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var tipId = $routeParams.tipId;
			var data = {
				sessionId: sessionId, 
				tipId:tipId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.HISTORYTIP, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.history = res.data.history;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		var getPredictions = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var pubId = $routeParams.pubId;
			var data = {
				sessionId: sessionId, 
				pubId:pubId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.HISTORYPREDICTION, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.history = res.data.history;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		$scope.$on('refreshPage', function(){
			init();
		});
		
		//init
		var init = function(){
			$scope.history = [];
			var path = $location.path();
			if(path.indexOf("/tip")!=-1){
				getTips();
			}else if (path.indexOf("/prediction")!=-1){
				getPredictions();
			}
		};
		init();
		
	}]);
})();