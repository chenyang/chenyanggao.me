<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/projects_detail.css">
	

        
<!---div projects_left, show of projects--->
<div id="projects_detail">
     <section>
           	<article class="article_left">
            <div class="project_description">
            <h2>
            	French Airline: Airline GPS data analyser on Google Map
            </h2>
            <img src="images/details_images/french_airline_01.jpg" width="200" height="120" align="right" style="margin-top:10px;"/>
            <p>
            Given reality data of GPS position and population information in France(.cvs), our team revealed shortest path and minimum flight cover between cities in France by offering the optimized solutions on Google Map. I led the algorithm analyse and provided core C programming works.
            </p>
            </div>
            
            
            
            <div class="project_precision">
            	<header>Project Requirement</header>
              <p>
              This project is a final project in course Programming in C. The aim of this project was to practice the programming skills in C and algorithm analysis. By given reality data of GPS position and population information in France(.cvs format), our team of 4 revealed shortest path and minimum flight cover between cities in France by showing the optimized result on Google Map. Requirements consists:<br/><br/>
              1.Analysis and transform .csv file data (Coordinate Location & population).<br/>
              2.Show N biggiested cities on Google Map in France.<br/>
              3.Show shortest path between any two cities by providing flight length in France. <br/>
              4.Show minimun flight cover between n biggest cities in France.<br/>
 
              </p>
              
               <header>Algorithm Design, Optimization and Realisation</header>
              	
                <p>
               		During the project, we came out the general idea of using "dijkstra" and "Prium" algorithm. And for GPS location, we used american high school knowledge "coordinate distance" to calculate distance between cities. (flights supposed to fly affixed to the ground). </p> 
                    
                <p>
                	However, we met a problem of establishing the "Matrix of Adjacency" since we had 1000 cities to deal with. A "Matrix of Adjacency" will generate a table of 1,000,000 data for computer to calculate(The performance of the program would be intolerable). To resolve this problem, I thought out a structure of "table_distance[i]"(means distance between starting point and other points) to minimize one level of "Matrix table". 1000 times of iteration is much efficient than 1,000,000 times.  
                </p>   
                
                <p>
                	For other programming works we did under Linux and shared our process on Github. <a href="https://github.com/chenyang/Porject_C_polytech/blob/master/projet_C_final">Visit our source code on Github. </a> The tools we used was code::blocks.
                </p> 

                      <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/french_airline_02.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/french_airline_02.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Run of the program</div>
                          </div>
                          
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/french_airline_03.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/french_airline_03.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Shortest Path between Paris and Marseille with limit 100 miles</div>
                          </div>
               		</div>   
                   
                    <div class="image" style="clear:both">
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/french_airline_01.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/french_airline_01.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Minimum flight cover among n biggest cities</div>
                          </div>
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/french_airline_04.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/french_airline_04.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>N biggiest cities in France</div>
                          </div>
                          
               		</div> 
                    
             
               
    		</div><!--End of div project_precision--->    
            </article>
 
            <article class="article_right">
            	<header>Type</header>
                <p>course project</p>
                <header>Time</header>
                <p>Spring 2011</p>
                <header>Methods & Skills</header> 
                <p>
                C programming<br/>
                Algorithm Analysis & Optimization<br/>
                HTML programming<br/>
                </p>
                <header>Tools & Environment</header>
                <p>
               	Linux Ubuntu<br/>
                Code::Blocks<br/>
                Github<br/>
                </p>
                <header>Source & Archivements</header> 
                <p>
                Source Code<br/>
                Documentation<br/>
                </p>         
            </article>  

 	</section>  

</div> 
          
      <!---aside, index for projects--->      

		<?php include 'sidebar.php';?>
   
	<!---End of div container->
      
</html> 