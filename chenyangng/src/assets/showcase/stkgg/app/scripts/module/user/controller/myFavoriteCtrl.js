(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("MyFavoriteCtrl", ['$scope', '$http', '$location', '$cookies', 'APIMOCK', 'API', 
	                                  function($scope, $http, $location, $cookies, APIMOCK, API){
		
		//获取我的收藏
		var getUserPubs = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.MYFAVORITES, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.userPubs = res.data.pubs;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//jump or not to coverpage
		$scope.goToCoverPage = function(pub){
			if(!pub.available){
				//goto buy page
				alert('需要购买或过期');
				$location.path("/buyPub/"+pub.pubId);
			}else{
				$location.path("/stkAnal/"+pub.pubId);
			}
		};
		
		
		$scope.$on('refreshPage', function(){
			getUserPubs();
		});
		
		//init
		var init = function(){
			getUserPubs();
			$scope.userPubs = [];
		};
		init();
		
	}]);
})();