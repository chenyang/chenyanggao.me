(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("MyApplyCtrl", ['$scope', '$http', '$location', '$cookies', 'APIMOCK', 'API', 
	                               function($scope, $http, $location, $cookies, APIMOCK, API){
		
		//获取用户信息
		var getUserProfile = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.MYPROFILE, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.userInfo = res.data.userInfo;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//申请加V
		$scope.applyVIP = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				applyInfo:{
					realName:$scope.userInfo.realName, 
					company:$scope.userInfo.company, 
					contact:$scope.userInfo.contact, 
					contact2:$scope.userInfo.contact2, 
					education:$scope.userInfo.education
				}
			};
			$http({
				method: 'POST', 
				url: APIMOCK.MYAPPLY, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					alert('成功申请VIP');
					$location.path("/myProfile");
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		$scope.$on('refreshPage', function(){
			getUserProfile();
		});
		
		//init
		var init = function(){
			$scope.userInfo = {};
			getUserProfile();
		};
		init();
	}]);
})();