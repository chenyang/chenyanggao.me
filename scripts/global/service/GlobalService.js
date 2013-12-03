(function(){
	'use strict';
	var mod = angular.module('global.service');

	//Navigation
	mod.constant('Navigation',
			[
			 {  when:"/about_me", 
				 templateUrl:"views/about_me.html"
			 }, 
			 {  when:"/allons_y", 
				 templateUrl:"views/Allons-y.html"
			 },
			 {  when:"/asa", 
				 templateUrl:"views/ASA.html"
			 },
			 {  when:"/euronext", 
				 templateUrl:"views/Euronext.html"
			 },
			 {  when:"/expernova", 
				 templateUrl:"views/Expernova.html"
			 }, 
			 {  when:"/french_airline", 
				 templateUrl:"views/French_Airline.html"
			 }

			 ]);


}());