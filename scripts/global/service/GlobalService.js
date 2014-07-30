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
			 {
				when:"/project_detail/:project",
				templateUrl:"views/project_detail.html"
			 }
			 ]);


}());