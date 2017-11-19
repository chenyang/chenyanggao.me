(function(){
	'use strict';
	var mod = angular.module('stock.service');

	//services related to stock Module..
	mod.factory('newsService', function () {
		return{
			//shareObj
			shareObj:function(){
				var _dataObj = {};
				return {
					dataObj: _dataObj
				};
			}, 
			//others..
		};

	});
})();