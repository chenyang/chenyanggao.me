(function(){
	'use strict';
	var mod = angular.module('user.controller');
	mod.controller("LoginCtrl", ['$scope', '$cookies', 'APIMOCK', '$http', '$location', 'API', 
	                             function($scope, $cookies, APIMOCK, $http, $location, API){

		//!!set cookie for app
		var setCookie = function(data){
			if($scope.isUseLongCookie){
				var today = new Date();
				var someDay = new Date(today);
				someDay.setDate(today.getDate()+5);
				//set long cookie, n days
				$cookies.putObject('cookieUserProfile', 
						{
					"sessionId":data.sessionId, 
					"isVIP":data.isVIP, //TODO
					"tokenId":"123456", 
					"extended":true //extended login
						}, 
						//$cookies settings
						{
							expires:someDay
						}
				);

			}else{
				//set normal cookie (session)
				$cookies.putObject('cookieUserProfile', 
						{
					"sessionId":data.sessionId, 
					"isVIP":data.isVIP, //TODO
					"tokenId":"123456",
					"extended":false
						}
				);
			}
		};

		//发送短信验证码
		$scope.sendCode = function(){
			if(_.isEmpty($scope.userRegisterInfo.login)){
				alert('请输入手机号');
			}else{
				var data = {
						cellphone:$scope.userRegisterInfo.login
				};
				$http({
					method: 'POST', 
					url: APIMOCK.SENDCODE, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('已成功发送验证码到您的手机');
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
			}
		};


		//刷新随机验证码
		$scope.refreshCapcha = function(){
			$scope.randomNum = _.random(0, 100);
		};


		//login
		$scope.login = function(){
			/*var data = {
					login:$scope.userLoginInfo.login, 
					password:$scope.userLoginInfo.password,
					captcha:$scope.userLoginInfo.inputCapcha
			};		*/

			//temp to simulate
			var data = {
					login:"test", 
					password:"test",
					captcha:"test"
			}

			$http({
				method: 'POST', 
				url: APIMOCK.LOGIN, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					//alert('登陆成功');
					setCookie(res.data);
					//跳转发现页
					$location.path("/home");
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		};


		//register
		$scope.register = function(){
			if($scope.userRegisterInfo.password!=$scope.userRegisterInfo.passwordConfirm){
				alert('两次输入的密码需要相同');
			}else{
				var data = {
						login:$scope.userRegisterInfo.login,
						password:$scope.userRegisterInfo.password,
						code:$scope.userRegisterInfo.inputCode
				};
				$http({
					method: 'POST', 
					url: APIMOCK.REGISTER, 
					data:data
				}).then(function(res){
					if(res.data.result=="success"){
						//cookie 更新关联用户信息
						alert('注册成功!');
						setCookie(res.data);
						//跳转发现页
						$location.path("/home");
					}else{
						alert('注册失败： '+res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
			}
		};

		/**initialization**/
		var init= function(){
			//default collapse for 3rd party login
			$scope.isCollapsed = true;
			//use cookie to automatically login
			$scope.isUseLongCookie = false;
			$scope.userLoginInfo = {};
			$scope.userRegisterInfo = {};

			//获取随机验证码
			$scope.refreshCapcha();
			
			$scope.login();
		};
		//init
		init();


	}]);
})();




