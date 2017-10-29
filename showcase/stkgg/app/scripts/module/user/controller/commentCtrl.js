(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("CommentCtrl", ['$scope', '$http', 'APIMOCK', '$cookies', 'API', '$routeParams', 'CACHE_PARAM_BTW_CTRL',
	                               function($scope, $http, APIMOCK, $cookies, API, $routeParams, CACHE_PARAM_BTW_CTRL){


		//获取评论
		var getComments = function(){
			var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
			var tipId =  $routeParams.tipId;
			var data = {
					tipId:tipId, 
					sessionId:sessionId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.GETCOMMENT, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					var comments = res.data.tipInfo.comments;
					$scope.positiveComments = comments.likes;
					$scope.negativeComments = comments.dislikes;
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};

		//listen $rootScope evt
		$scope.$on('refreshPage', function(){
			getComments();
		});

		$scope.showAgreeTab = function(){
			$scope.agree = 1;
		};

		$scope.showDisagreeTab = function(){
			$scope.agree = 0;
		};

		//init
		var init = function(){
			$scope.positiveComments = [];
			$scope.negativeComments = [];
			getComments();
			
			//default
			$scope.tabs = [{active:1},{active:0}];

			var params = CACHE_PARAM_BTW_CTRL.get('param_ctrl_feed_comment');
			if(!_.isEmpty(params)){
				var agree = params.agree;
				if(!agree)
					$scope.tabs[1].active = 1;
			}
		};
		init();

	}]);
})();