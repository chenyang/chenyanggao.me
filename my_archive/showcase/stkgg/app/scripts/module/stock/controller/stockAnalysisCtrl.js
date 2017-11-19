(function(){
	'use strict';
	var mod = angular.module('stock.controller');
	mod.controller("StockAnalysisCtrl", 
			['$scope', '$modal', '$cookies', '$location', '$http','$routeParams', 
			 'APIMOCK', 'API', '$filter', 'NumToChineseTime',
			 function($scope, $modal, $cookies, $location, $http, $routeParams, 
					 APIMOCK, API, $filter, NumToChineseTime){


	//图标部分		
	var setGraphOptions = function(){
		$scope.options = {
				chart: {
					type: 'lineChart',
					height: 170,
					margin : {
						top: 20,
						right: 20,
						bottom: 40,
						left: 35
					},
					x: function(d){ return d.date; },
					y: function(d){ return d.value; },	
					useInteractiveGuideline: true,
					/*dispatch: {
						stateChange: function(e){ 
							//console.log("stateChange"); 
						},
						changeState: function(e){ 
							//console.log("changeState"); 
						},
						tooltipShow: function(e){ 
							//console.log("tooltipShow"); 
						},
						tooltipHide: function(e){ 
							//console.log("tooltipHide"); 
						}
					},*/
					xAxis: {
						axisLabel: '证监会公告日期', 
						tickFormat: function(d) {
							//in data list is epoch time
							return d3.time.format('%Y-%m-%d')(new Date(d));
						},
						showMaxMin: false
					},
					yAxis: {
						tickFormat: function(d){
							return d3.format('.02f')(d);
						},
						axisLabelDistance: 30, 
						showMaxMin: false
					},
					callback: function(chart){
						//console.log('chart callbacks here');
					}
				}, 
				title: {
					enable: true,
					text: ''
				}
		};
	};

	/**
	 * adaptGraphData
	 */
	function adaptGraphData(dataArray){
		var output = dataArray;
		_.each(output, function(item){
			item.date = (new Date (item.date)).getTime();
		});

		return [
		        {
		        	values: output,      //values - represents the array of {x,y} data points
		        	key: '股价', //key  - the name of the series.
		        	color: '#ff7f0e'  //color - optional: choose your own line color.
		        }
		        ];
	}


	//评述tips部分
	//open modal for tip
	$scope.addTip = function(news){
		var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
		var pubId = $routeParams.pubId;
		var params = {
				sessionId: sessionId, 
				pubId: pubId, 
				newsId:news.newsId
		};
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'views/modal/addTipModal.html',
			controller: 'TipCtrl',
			resolve: {
				params: function () {
					return params;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			getTimeline();
		}, function () {
			//canceled/dismiss
			//console.log('Modal dismissed at: ' + new Date());
		});
	};


	//modify tips
	$scope.modifyTip = function(item){
		item.isModifyTip = !item.isModifyTip;
		if(!item.isModifyTip){//保存修改
			var  data= {
					tipId:item.tipId, 
					content:item.tipContent
				};
				$http({
					method: 'POST', 
					url: APIMOCK.EDITTIP, 
					data:data
				})
				.then(function(res){
					if(res.data.result=="success"){
						alert('修改评述成功');
						item.lastModifiedTime = res.data.tip.lastModifiedTime;
						item.tipContent = res.data.tip.content;
					}else{
						alert(res.data.reason);
					}
				}, function(res){
					console.log('error tech', res);
				});
		}
	};

	//Timeline部分
	var getTimeline = function(){
		var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
		var pubId = $routeParams.pubId;

		if(_.isEmpty(pubId)){
			alert('pubId 未知！无法获取timeline数据');
		}else{
			var data = {
					sessionId:sessionId, 
					pubId:pubId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.GETTIMELINE, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					var pubInfo = res.data.timelineInfo;
					_.each(pubInfo.news, function(news){
						_.each(news.tips, function(tipItem){
							tipItem.isCollapsedShare = true;  
							tipItem.isCollapsedCmt = true;
							tipItem.isModifyTip = false;
							/*
							 * 	var totalCmts = tipItem.comments.likes.length + tipItem.comments.dislikes.length;
								tipItem.totalCmts = parseInt(totalCmts);
								tipItem.nbLikes = tipItem.comments.likes.length;
								tipItem.nbDislikes= tipItem.comments.dislikes.length;
							*/
						});
					});

					pubInfo.today = new Date();
					$scope.options.title.text=pubInfo.stockName + "("+pubInfo.stockCode+")";
					
					var historyData = pubInfo.historyData;
					historyData = _.sortBy(historyData, function(item){
						return item.date;
					}) ;
					$scope.graphData = adaptGraphData(historyData);
					$scope.pubInfo = pubInfo;
				}else{
					alert(res.data.reason);
					//reason mainly not buying this pub
					$location.path("/buyPub/"+pubId);
				}
			}, function(res){
				console.log('error tech', res);
			});
		}
	};
	
	$scope.addToFav = function(){
		var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
		var pubId = $routeParams.pubId;
		
		var data = {
			sessionId:sessionId, 
			pubId:pubId
		};
		$http({
			method: 'POST', 
			url: APIMOCK.ADDFAVORITE, 
			data:data
		})
		.then(function(res){
			if(res.data.result=="success"){
				alert('成功加入收藏');
				$scope.pubInfo.isFavorite = true;
			}else{
				alert(res.data.reason);
			}
		}, function(res){
			console.log('error tech', res);
		});
	};

	$scope.visitOrBuyPub = function(tip){
		tip.available = $scope.pubInfo.available;
		var pubInfo = $scope.pubInfo;
		//not yet bought
		if(!tip.available){
			$location.path("/buyPub/"+pubInfo.pubId);
		}else{
			$location.path("/stkAnal/"+pubInfo.pubId);
		}
	};

	$scope.gotoProfile = function(){
		$location.path("/profileDetail");
	};
	
	
	//评论相关
	$scope.gotoComment = function(tip){
		$location.path("/comments/"+tip.tipId);
	};
	
	$scope.addComment = function(tip, agree){
		var param = {
			pubId:$routeParams.pubId,
			tip:tip, 
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
			$scope.gotoComment(tip);
		}, function () {
			//canceled/dismiss
			console.log('Modal dismissed at: ' + new Date());
		});
	};
	
	//新闻相关
	$scope.manageNews = function(){
		var pubId =  $routeParams.pubId;
		$location.path("/newsList/"+pubId);
	};


	//预测部分
	//获取预测
	var getPrediction = function(){
		var sessionId =  $cookies.getObject('cookieUserProfile').sessionId;
		var pubId = $routeParams.pubId;
		if(_.isEmpty(pubId)){
			alert('pubId 未知！无法获取prediction数据');
		}else{
			var data = {
					sessionId:sessionId, 
					pubId:pubId
			};
			$http({
				method: 'POST', 
				url: APIMOCK.GETPREDICTION, 
				data:data
			})
			.then(function(res){
				if(res.data.result=="success"){
					$scope.prediction = res.data.prediction;
					var prediction = angular.copy($scope.prediction);
					prediction.time = NumToChineseTime[''+prediction.time+''];
					$scope.predictPopover = {
						content: prediction, 
						templateUrl:'views/template/prediction_popover.html', 
						title:'股票预测'
					};
				}else{
					alert(res.data.reason);
				}
			}, function(res){
				console.log('error tech', res);
			});
		}
	};

	/**
	 * modal for stock comment
	 */
	$scope.editPrecidtion = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'views/modal/predictionModal.html',
			controller: 'PredictionCtrl',
			resolve: {
				prediction: function () {
					var prediction = $scope.prediction;
					return prediction;
				}
			}
		});
		modalInstance.result.then(function (selectedItem) {
			//OK/selected items form Modal..
			//重新获取一遍预测
			getPrediction();
		}, function () {
			//canceled/dismiss
			console.log('Modal dismissed at: ' + new Date());
		});
	};
	
	$scope.$on('refreshPage', function(){
		getPrediction();
		getTimeline();
	});

	/** initialization **/
	var init = function(){
		//预测
		$scope.prediction = null;
		$scope.predictPopover = null;
		getPrediction();

		//timeline
		$scope.pubInfo = null;
		getTimeline();

		//图表
		setGraphOptions();
	};
	//Init
	init();

}]);
})();

/*
//check if pubId is already visited
var cookieAllVisitedPubId = $cookies.getObject('cookieAllVisitedPubId');
console.log(cookieAllVisitedPubId);
if(_.isEmpty($cookies.getObject('cookieAllVisitedPubId'))){
	cookieAllVisitedPubId = [];
	$cookies.putObject('cookieAllVisitedPubId', cookieAllVisitedPubId);
};
if(_.contains(cookieAllVisitedPubId, pubInfo.pubId)){
	alert('cookie 已经访问过 PubId '+pubInfo.pubId+", 直接进入相关timeline页");
	$location.path("/stkAnal/"+pubInfo.pubId);
}else{
	cookieAllVisitedPubId = $cookies.getObject('cookieAllVisitedPubId');
	cookieAllVisitedPubId.push(pubInfo.pubId);
	$cookies.putObject('cookieAllVisitedPubId', cookieAllVisitedPubId);
	$location.path("/buyPub/"+pubInfo.pubId);
}
 */