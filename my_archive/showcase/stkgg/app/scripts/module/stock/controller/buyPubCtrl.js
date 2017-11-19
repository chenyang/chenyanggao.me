(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("BuyPubCtrl", ['$scope', '$location', '$http', 'APIMOCK', 'API', '$routeParams', '$cookies', 
	                              function($scope, $location, $http, APIMOCK, API, $routeParams, $cookies){
		
		
		//举报
		$scope.report = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var pubId = $routeParams.pubId;
			var reportInfo = $scope.reportInfo;
			
			var data ={
				sessionId:sessionId, 
				pubId:pubId, 
				contact:reportInfo.contact, 
				cmt:reportInfo.cmt
			};
			$http({
				method: 'POST', 
				url: APIMOCK.REPORTADD, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					alert('您已经成功举报');
					$scope.isCollapseReport = true;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//获取coverpage pub 信息
		var getPubInfo = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var pubId = $routeParams.pubId;
			
			var data = {
				sessionId:sessionId, 
				pubId:pubId
			};
			
			$http({
				method: 'POST', 
				url: APIMOCK.COVERPAGEGET, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.pubInfo = res.data.pubInfo;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//支付
		$scope.payment = function(){
			$location.path("/payment");
		};
		
		$scope.$on('refreshPage', function(){
			getPubInfo();
		});
		
		//init
		var init = function(){
			//default is true
			$scope.isCollapseCmt = true;
			$scope.isCollapseReport = true;
			$scope.pubInfo = {};
			$scope.reportInfo = {};
			getPubInfo();
		};
		init();
	}]);
	
})();