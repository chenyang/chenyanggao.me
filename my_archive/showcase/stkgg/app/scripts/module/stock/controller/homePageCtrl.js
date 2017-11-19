(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("HomePageCtrl", ['$scope', '$location','$cookies', '$http', 'APIMOCK', 'API', '$rootScope',  
	                                function($scope, $location, $cookies, $http, APIMOCK, API, $rootScope){
		
		//自动推荐
		var defaultPubs = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.DEFAULTPUBS, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.pubs = res.data.pubs;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//搜索
		$scope.searchPub = function(){
			
			if(_.isEmpty($scope.searchText)){
				alert('请输入搜索关键词');
			}else{
				var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
				var data = {
						sessionId: sessionId, 
						keyword:$scope.searchText
				};
				$http({
					method: 'POST', 
					url: APIMOCK.SEARCHPUBS, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						$scope.pubs = res.data.pubs;
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
			}
		};
	
		
		$rootScope.refreshPage = function(){
			if(_.isEmpty($scope.searchText)){
				$scope.defaultPubs();
			}else{
				$scope.searchPub();
			}
		};
		
		
		$scope.goToCoverPage = function(pub){
			if(!pub.available){
				//goto buy page
				alert('需要购买或过期');
				$location.path("/buyPub/"+pub.pubId);
			}else{
				$location.path("/stkAnal/"+pub.pubId);
				/*
				 * var cookieAllVisitedPubId = $cookies.getObject('cookieAllVisitedPubId');
					if(_.contains(cookieAllVisitedPubId, pub.pubId)){
						//bypass coverpage
						alert('cookie 已经访问过 PubId '+pub.pubId+", 直接进入相关timeline页");
						$location.path("/stkAnal/"+pub.pubId);
					}else{
						$location.path("/buyPub/"+pub.pubId);
					}
				 */
			}
		};
		
		$scope.goToCreatePub = function(){
			var sessionId = $cookies.getObject('cookieUserProfile').sessionId;
			if(_.isEmpty(sessionId)){
				alert('请注册才可发布pub');
			}else{
				$location.path("/createPub");
			}			
		};
		
		$scope.$on('refreshPage', function(){
			defaultPubs();
			$scope.searchText = '';
		});
		
		//init
		var init = function(){
			$scope.pubs = [];
			defaultPubs();
		};
		init();
		
	}]);
})();