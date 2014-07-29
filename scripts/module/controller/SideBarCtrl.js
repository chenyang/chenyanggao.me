(function(){
	'use strict';

	var mod = angular.module('mod.controller');
	mod.controller('SideBarCtrl', ['$scope', function($scope){
		$scope.tabs =
			[
		              {
		            	  'desc':'Music Event',
		            	  'content':'Big Data and Semantic web application for music', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'RIA IOvision',
		            	  'content':'Small Business ERP Prototype & system integration', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'ASA QLIMS',
		            	  'content':'PhoneGap Tablet prototype', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'UVSP',
		            	  'content':'.NET Framework Devc', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'POLLAROID',
		            	  'content':'iOS development', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'French Airline',
		            	  'content':'Algorithm in C', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'Expernova',
		            	  'content':'Social Network Integration', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'Allons-y Francais',
		            	  'content':'French Teaching Video', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'Good Tracking Service',
		            	  'content':'PHP Forum development', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'SLAB',
		            	  'content':'Java Based Resource Planning System', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'Euronext',
		            	  'content':'European Enterprises analysis', 
		            	  'link':''
		              }, 
		              {
		            	  'desc':'Simple Chat',
		            	  'content':'-C based mailing system', 
		            	  'link':''
		              } 
		        ]
	}]);
}());