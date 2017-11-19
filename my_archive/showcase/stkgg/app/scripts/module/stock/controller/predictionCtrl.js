(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("PredictionCtrl", ['$scope', '$modalInstance', 'prediction','$location', '$http', '$cookies', 'APIMOCK', 'API', 
	                                function($scope, $modalInstance, prediction, $location, $http, $cookies, APIMOCK, API){


		$scope.gotoHistoryPage = function(pubId){
			$modalInstance.dismiss('cancel');
			$location.path("/history/prediction/"+pubId);
		};

		//预测修改
		$scope.edit = function(){
			if($scope.prediction==null){
				$scope.prediction={};
			}
			$scope.prediction.lastModifiedTime = new Date();
			
			var prediction = $scope.prediction;
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var isVIP = $cookies.getObject('cookieUserProfile').isVIP;
			
			if(_.isEmpty(sessionId) || _.isUndefined(isVIP) || !isVIP){
				alert('需要请注册才可发布/修改预测 （且是是加V才可发布）');
			}else{
				var data = {
						sessionId: sessionId, 
						pubId: prediction.pubId, 
						time: prediction.time, 
						minVal: prediction.minVal, 
						maxVal: prediction.maxVal, 
						minPct: prediction.minPct, 
						maxPct: prediction.maxPct, 
						cmt: prediction.cmt
					};
					$http({
						method: 'POST', 
						url: APIMOCK.EDITPREDICTION, 
						data:data
					})
					.then(function(res){
						if(res.data.result=="success"){
							alert('修改预测成功！');
							$modalInstance.close();
						}else{
							alert(res.data.reason);
						}
					}, function(res){
						console.log('error tech', res);
					});		
			}
		};
		
		//添加预测
		$scope.add = function(){
			if($scope.prediction==null){
				$scope.prediction={};
			}
			$scope.prediction.lastModifiedTime = new Date();
			
			var prediction = $scope.prediction;
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var isVIP = $cookies.getObject('cookieUserProfile').isVIP;
			
			if(_.isEmpty(sessionId)||_.isEmpty(isVIP) || !isVIP){
				alert('需要请注册才可发布/修改预测 （且是是加V才可发布）');
			}else{
				var data = {
						sessionId: sessionId, 
						pubId: prediction.pubId, 
						time: prediction.time, 
						minVal: prediction.minVal, 
						maxVal: prediction.maxVal, 
						minPct: prediction.minPct, 
						maxPct: prediction.maxPct, 
						cmt: prediction.cmt
					};
					$http({
						method: 'POST', 
						url: APIMOCK.ADDPREDICTION, 
						data:data
					})
					.then(function(res){
						if(res.data.result=="success"){
							alert('创建预测成功！');
							$modalInstance.close();
						}else{
							alert(res.data.reason);
						}
					}, function(res){
						console.log('error tech', res);
					});		
			}
		};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
		/*$scope.ok = function () {
			//return back service status
			$modalInstance.close($scope.item);
		};*/
		
		/**
		 * initialization
		 */
		var init = function(){
			$scope.prediction = prediction;
			$scope.isPredictionNew = true;
			if(!_.isEmpty(prediction)){
				$scope.isPredictionNew = false;
			}
		};
		//init
		init();
		
	}]);
})();