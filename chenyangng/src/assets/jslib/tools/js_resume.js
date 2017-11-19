// JavaScript Document

jQuery.noConflict();

var education=1;
var profession=1;
var academic=1;

var skills=1;
var courses=1;

function show_hidden_ones()
{
	jQuery("#skills").show(500);
	jQuery("#courses").show(500);
}

function hide_or_show_education()
	{
		if(education==1)
		{jQuery("#education").hide(500);
		  education=0;
		}else if (education==0)
		{jQuery("#education").show(500);
		 education=1;
		}
	}


	function hide_or_show_profession()
	{
		if(profession==1)
		{jQuery("#profession").hide(500);
		  profession=0;
		}else if (profession==0)
		{jQuery("#profession").show(500);
		 profession=1;
		}
	}


	function hide_or_show_academic()
	{
		if(academic==1)
		{jQuery("#academic").hide(500);
		  academic=0;
		}else if (academic==0)
		{jQuery("#academic").show(500);
		 academic=1;
		}
	}



	function hide_or_show_skills()
	{
		if(skills==1)
		{jQuery("#skills").hide(500);
		  skills=0;
		}else if (skills==0)
		{
		  jQuery("#skills").show(500);
		  skills=1;
		}
	}



	function hide_or_show_courses()
	{
		if(courses==1)
		{jQuery("#courses").hide(500);
		  courses=0;
		}else if (courses==0)
		{jQuery("#courses").show(500);
		 courses=1;
		}
	}
