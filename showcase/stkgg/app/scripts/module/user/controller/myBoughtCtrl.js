(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("MyBoughtCtrl", ['$scope', '$cookies', '$http', '$location', 'APIMOCK', 'API', 
	                                function($scope, $cookies, $http, $location, APIMOCK, API){
		
		//获取购买历史
		var getMyBoughts = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.MYBOUGHTS, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.userBoughts = res.data.boughts;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		$scope.$on('refreshPage', function(){
			getMyBoughts();
		});
		
		//init
		var init = function(){
			$scope.userBoughts = [];
			getMyBoughts();
		};
		init();
		
	}]);
})();