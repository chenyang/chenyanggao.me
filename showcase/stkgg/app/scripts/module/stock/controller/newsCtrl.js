(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("NewsCtrl", ['$scope', '$http', 'APIMOCK', 'API', '$cookies', '$routeParams', '$location', 
	                            function($scope, $http, APIMOCK, API, $cookies, $routeParams, $location){

		//预订/取消预订新闻
		$scope.bookNews = function(news, isToBook){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				newsId:news.newsId, 
				isToBook: isToBook //if true==>will book news. vice versa.
			};
			$http({
				method: 'POST', 
				url: APIMOCK.BOOKNEWS, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					if(res.data.isBooked){
						alert('成功预订');
					}else if(!res.data.isBooked){
						alert('成功取消预订');
					}
					//refresh page
					getNewsList();
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//获取新闻内容
		var getNewsContent = function(){
			var newsId = $routeParams.newsId;
			var data = {
				newsId:newsId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.GETNEWSCONTENT, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.news = res.data.news;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		//获取半年内 newsList
		var getNewsList = function(){
			var pubId = $routeParams.pubId;
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				pubId:pubId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.GETNEWSLIST, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.newsList = res.data.newsList;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};

		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			init();
		});

		//init
		var init = function(){
			$scope.newsList = [];
			$scope.news = {};
			//see if newsList or newsContent
			if($location.path().indexOf('newsList')!=-1){
				getNewsList();
			}else{
				getNewsContent();
			}
		};
		
		init();

	}]);
})();