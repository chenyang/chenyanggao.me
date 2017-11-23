(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("TipCtrl", ['$scope', '$modalInstance', '$cookies', 'APIMOCK', 'API', '$http', 'params', '$filter', 
	                           function($scope, $modalInstance, $cookies, APIMOCK, API, $http, params, $filter){	
		
		$scope.add = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var tipInfo = $scope.tipInfo;
			if(_.isEmpty(tipInfo.content)){
				alert('请输入评述');
			}else{
				var data= {
					sessionId:sessionId,
					pubId:params.pubId, 
					newsId:params.newsId, 
					content:tipInfo.content
				};
				
				$http({
					method: 'POST', 
					url: APIMOCK.ADDTIP, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('添加评述成功');
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
		
		//init
		var init = function(){
			$scope.tipInfo = {};
		};
		init();
		
	}]);
})();