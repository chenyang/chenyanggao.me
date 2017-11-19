(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("ProfileDetailCtrl", ['$scope', '$http', 'APIMOCK', 'API', '$cookies', '$filter',  
	                                     function($scope, $http, APIMOCK, API, $cookies, $filter){
		
		
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
					//convert to "Date"
					$scope.userInfo.birthday = new Date($scope.userInfo.birthday);
					
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//上传图片。。
		$scope.uploadImg = function(flowFile, evt, $flow){
             var reader = new FileReader();
             reader.onload = function(readerEvt) {
            	 var binaryString = readerEvt.target.result;
            	 $scope.binaryImgStr = binaryString;
             };
             reader.readAsDataURL(flowFile.file);
		};
		
		//修改用户信息
		$scope.save = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				userInfo:{
					nickName:$scope.userInfo.nickName, 
					moto:$scope.userInfo.moto, 
					gender:$scope.userInfo.gender, 
					address:$scope.userInfo.address, 
					//convert Date to dateStr
					birthday:$filter('date')($scope.userInfo.birthday, 'yyyy-MM-dd'), 
					imageData:$scope.binaryImgStr
				}
			};
			
			$http({
				method: 'POST', 
				url: APIMOCK.MYPROFILEEDIT, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					//restore 'save' button
					$scope.isModify = !$scope.isModify;
					alert('成功修改信息');
					//refresh page..
					getUserProfile();
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
		
		$scope.init = function(){
			$scope.isModify = false;
			$scope.userInfo = {};
			$scope.binaryImgStr = null;
			getUserProfile();
		};
		//init
		$scope.init();
		
	}]);
})();