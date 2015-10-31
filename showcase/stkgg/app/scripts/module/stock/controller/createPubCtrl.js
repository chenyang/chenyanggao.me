(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("CreatePubCtrl", ['$scope', '$location', '$http', 'APIMOCK', '$cookies', 'API', 
	                                 function($scope, $location, $http, APIMOCK, $cookies, API){

		//搜索股票, return promise
		$scope.searchStock = function(searchText){
			var data = {
				keyword:searchText
			}
			return $http({
				method: 'POST', 
				url: APIMOCK.SEARCHSTOCK, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					return res.data.stocks;
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

				
		//创建
		$scope.submit = function(){
			if(_.isEmpty($scope.pubInfo.stock)){
				alert('请选择一支股票');
			}else{
				var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
				if(_.isEmpty(sessionId)){
					alert('session 有问题，请注册');
				}else{
					var data = {
							"sessionId":sessionId,
							"stockId":$scope.pubInfo.stock.id, 
							"type":1, //商品类型 1 股票
							"imageData": $scope.binaryImgStr, //临时
							"desc":$scope.pubInfo.desc,
							"price":$scope.pubInfo.price,
							"pubName":$scope.pubInfo.pubName
					};
					
					$http({
						method: 'POST', 
						url: APIMOCK.POSTPUB, 
						data:data
					})
					.then(function(res){
						if(res.data.result=="success"){
							var pubId = res.data.pubId;
							alert('创建成功！');
							$location.path("/stkAnal/"+pubId);
						}else{
							alert(res.data.reason);
						}
					}, function(res){
						console.log('error tech', res);
					});
				}
			}
		};
		
		var init = function(){
			$scope.pubInfo = {};
			$scope.stocks = [];
			$scope.binaryImgStr = null;
		};
		//initialisation
		init();
		
	}]);
})();