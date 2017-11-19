(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("FeedCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$location', '$modal', 'CACHE_PARAM_BTW_CTRL',
	                            function($scope, $http, APIMOCK, $cookies, API, $location, $modal, CACHE_PARAM_BTW_CTRL){
		
		//点赞/踩 tip
		/**
		 * $scope.evaluateTip = function(feed, evaluation){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId, 
				tipId:feed.tipId
			}
			$http({
				method: 'POST', 
				url: APIMOCK.EVALUATETIP, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					alert('评价成功！');
					feed.nbLikes = res.data.tip.nbLikes;
					feed.nbDislikes = res.data.tip.nbDislikes;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		 * 
		 */
		
		//评论相关
		$scope.gotoComment = function(feed){
			$location.path("/comments/"+feed.tipId);
		};
		
		//添加评论
		$scope.addComment = function(feed, agree){
			var param = {
				pubId:feed.pubId,
				tip:feed, 
				agree:agree
			};
			var modalInstance = $modal.open({
				animation: true,
				templateUrl: 'views/modal/addCommentModal.html',
				controller: 'CommentModalCtrl',
				resolve: {
					param: function () {
						return param;
					}
				}
			});
			modalInstance.result.then(function (selectedItem) {
				//OK/selected items form Modal..
				//跳转到所有评论页面
				$scope.gotoComment(feed, agree);
			}, function () {
				//canceled/dismiss
				console.log('Modal dismissed at: ' + new Date());
			});
		};
		
		//获取动态
		var getFeeds = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var data = {
				sessionId:sessionId
			}
			$http({
				method: 'POST', 
				url: APIMOCK.GETFEED, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.feeds = res.data.feeds;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};
		
		$scope.gotoComment = function(feed, agree){
			//add positive/negative agreement
			var params = {
				agree:agree
			};
			//params from feed ctrl to comment ctrl
			CACHE_PARAM_BTW_CTRL.put('param_ctrl_feed_comment', params);
			$location.path("/comments/"+feed.tipId);
			
		};
		
		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			getFeeds();
		});
		
		//init
		var init = function(){
			getFeeds();
			$scope.feeds = [];
		};
		init();
		
	}]);
})();