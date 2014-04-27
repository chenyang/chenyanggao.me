(function(){
	'use strict';
	var mod = angular.module('global.service');

	//Navigation
	mod.constant('Navigation',
			[
			 {  when:"/", 
				 templateUrl:"views/home.html"
			 }, 
			 {  when:"/about_me", 
				 templateUrl:"views/about_me.html"
			 }, 
			 {  when:"/projects", 
				 templateUrl:"views/projects.html"
			 }, 
			 {  when:"/resume", 
				 templateUrl:"views/resume.html"
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
			 {  when:"/findevent", 
				 templateUrl:"views/FindEvent.html"
			 }, 
			 {  when:"/french_airline", 
				 templateUrl:"views/French_Airline.html"
			 }, 
			 {  when:"/good_deed_movement", 
				 templateUrl:"views/Good_Deed_Movement.html"
			 }, 
			 {  when:"/iovision", 
				 templateUrl:"views/IOvision.html"
			 }, 
			 {  when:"/mail_system", 
				 templateUrl:"views/Mail_System.html"
			 }, 
			 {  when:"/pollaroid", 
				 templateUrl:"views/Pollaroid.html"
			 }, 
			 {  when:"/slab", 
				 templateUrl:"views/SLAB.html"
			 }, 
			 {  when:"/stadium", 
				 templateUrl:"views/Stadium.html"
			 }, 
			 {  when:"/uvsp", 
				 templateUrl:"views/UVSP.html"
			 }, 

			 ]);


}());