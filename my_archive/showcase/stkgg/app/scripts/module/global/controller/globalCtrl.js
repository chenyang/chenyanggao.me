(function(){
	'use strict';
	var mod = angular.module('global.controller');
	mod.controller("GlobalCtrl", ['$scope', '$cookies', '$location', '$http', 'APIMOCK', 'API', '$rootScope', 'Navigation', 
	                              function($scope, $cookies, $location, $http, APIMOCK, API, $rootScope, Navigation){

		//刷新  broadcast event
		$scope.refreshPage = function(){
			$rootScope.$broadcast('refreshPage');
		};
		
		//登出
		$scope.logout = function(){
			if(!_.isEmpty($cookies.getObject('cookieUserProfile'))){
				var data = {
						"sessionId":$cookies.getObject('cookieUserProfile').sessionId
				};
				$http({
					method: 'POST', 
					url: APIMOCK.LOGOUT, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						$cookies.remove('cookieUserProfile');//仅仅删除user的cookie
						$location.path("/login");
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
			}
		};

		$scope.clearAllCookies = function(){
			var allCookies = $cookies.getAll();
			_.each(_.allKeys(allCookies), function(c){
				$cookies.remove(c);
			});
		};

		//显示登陆状态信息
		$scope.getLoginStatus = function(){
			var cookieProfile = $cookies.getObject('cookieUserProfile');
			if(_.isEmpty(cookieProfile)){
				return '需要登陆（随便输）';
			}else{
				var strIsVIP = cookieProfile.isVIP?"(VIP)":"(非VIP)";
				if(cookieProfile.extended){
					return '已登陆（5 days） session: '+cookieProfile.sessionId+strIsVIP;
				}else{
					return '已登陆 session: '+cookieProfile.sessionId+strIsVIP;
				}
			}

		};

		//随时监测用户cookie是否可用
		$scope.$on('$routeChangeStart', function(next, current){
			//temp
			$scope.isRootNavbarCollapsed = true;
			
			checkLogin();
			//根据页面 决定显示与否 appHeader
			if($location.path().indexOf('login')!=-1){
				$scope.showAppHeader = false;
			}else{
				$scope.showAppHeader = true;
			}
		});

		//validate user profile
		var checkLogin = function(){
			if(_.isEmpty($cookies.getObject('cookieUserProfile'))){
				//temp deactivate this func
				$location.path("/login");
			}
		};
		

		//listen on route change
		$scope.$on('$routeChangeStart', function(){
			var path = $location.path();
			var strTemp = path.substring(0, _.lastIndexOf(path, '/'));
			if(_.isEmpty(strTemp)){
				strTemp = path.substring(_.lastIndexOf(path, '/'), path.length);
			}
			
			var filteredNav = _.filter(Navigation, function(nav){
				return nav.when.indexOf(strTemp)!=-1;
			});
			
			$scope.appHeaderName = filteredNav[0].headerName;
		});
		
		
		//init
		var init = function(){
			$scope.showAppHeader = false;
			checkLogin();
			$scope.isRootNavbarCollapsed = true;
		};

		init();
	}]);

})();