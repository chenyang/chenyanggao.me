<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/projects_detail.css">
	

        
<!---div projects_left, show of projects--->
<div id="projects_detail">
     <section>
           	<article class="article_left">
            <div class="project_description">
            <h2>
            	Service Management System: Web Based CMS For FengTai Stadium
            </h2>
            <img src="images/projects_images/STADIUM.png" width="180" height="140" align="right" style="margin-top:10px;"/>
            <p>
          In respond to project "Innovation & Research" organized by CUEB, our team of four applied the academic project during my undergraduate years. The project was a web based CMS realized by using technology JSP MVC Model2 with Tomcat as Application Server. I was responsible for core JSP and Servlet programing and Database modeling.
            </p>
            </div>

            <br/><br/>
            <div class="project_precision">
            	<header>About the project</header>
                <p>
                	This "Innovation & Research" project is an event organized by CUEB and each colledge choose 2 projects as candidates. Our team of four applied the project to realize a prototype system for Stadium FengTai, located in Fengtai District, Beijing. (Unfortunately, from 2010 Fengtai stadium was no longer at service and changed to Fengtai sports center). The system we had done was not industrial standarized but team gained quite a valuable experience in this project. During the project, I provided core JSP & Servlet programming and Database implementation works, at my early stage of software development career.
                
                </p>
                <header>Requirement Analysis</header>
                <p>
                	The idea of applying this project was conveived by one of our team member: CAN.WANG, who did volunteer works in FengTai Stadium during Beijing 2008 Olympic Games. He noted the efficiency was not quite satisfactory during his work especaiily the "Roster" management, concerning about volunteer and staff in Stadium.
                </p>
                <p>
                	As a consequence, after having applied the project, our team met with the former chief manager in Fengtai Stadium. I participated in the discussion and provided technical suggestions. Finally we decided to develop a prototype system with JSP technology.
                </p>
                
                
                <header>UI, System Architecture and Database Design</header>
                
                <p>
                	The system contains 3 main modules:<br/>
                </p>
                    <p>
                    Module for visitors: <br/>
                    - news, notice, match results, videos<br/>
                    - map & location service<br/>
                    - related information about game, stadium and transports<br/>
                    </p>
                    <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
                  <a href="images/details_images/stadium_01.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_01.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Home page for visitors</div>
                          </div>
                          <div class="project_show_image" style="float:left">
                  <a href="images/details_images/stadium_02.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_02.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Match Results</div>
                          </div>
               		</div> 
                    

                    
                    <p>
                    Module for staff and manager: (registered)<br/>
                    - internal files sharing<br/>
                    - roster, department and staff research<br/>
                    </p>
                    
                    <div class="image" style="clear:both">
                      	  <div class="project_show_image" style="float:left">
                  <a href="images/details_images/stadium_09.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_09.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Queries designed for staff in requirement analysis</div>
                          </div>
                      
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/stadium_04.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_04.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Module for staff: search result of staff</div>
                          </div>
               		</div> 
                    
                    
                    <p>
                    Module for administrator: <br/>
                    - staff, volunteer, department, roster management<br/>
                    - match management and files management
                    </p>
                    
                    <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
              <a href="images/details_images/stadium_05.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_05.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Module for administrator: adding staff</div>
                          </div>
                          <div class="project_show_image" style="float:left">
              <a href="images/details_images/stadium_06.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/stadium_06.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Module for administrator: assignment of roster</div>
                          </div>
               		</div> 
                
                <p>
                	We divided the project into 3 main modules and for each module we assigned specific team member to handle. I conducted the system architecture and MVC Module design. We seperated the system into tiers to better adapt the technology of JSP, Servlet and javabeans. Besides, I designed the database model using e-ER diagram.
                </p>
                
                <header>JSP/Servlet & Database Development</header>
                <p>
                	Our team spent 3 months to pass the implementation phase through. The main technology we used was JSP, Servlet and Javabean. We did not used EJB since the time and skill was limited. Besides, we did not use "Struts" in presentation layer instead we just used JSP and Servlet. Javascript was used for the purpose of input control. For database connection we used JDBC and DAO method to retrive data. I programmed for JSP, Javabean and Servlet programs.Also I wrote SQL files.
                </p>
                
                <header>Test & Result</header>
                <p>
                	At the beginning of April, our group contucted the user experience and unit tests. Although the project was not industrial standarized (not strictly JSP model 2 and not secure), I gained a valuable experience about JSP web at the early age of my software development career. For more details of project source, please feel free to visit <a href="https://github.com/chenyang/Project_Stadium">on Github</a>.
                
				</p>
                
                
         
               
    		</div><!--End of div project_precision--->    
            </article>
 
            <article class="article_right">
            	<header>Type</header>
                <p>course project</p>
                <header>Time</header>
                <p>winter 2008- spring 2009</p>
                <header>Methods & Skills</header> 
                <p>
                 Requirements Analysis<br/>
                 JSP & Servlet Development<br/>
                 System Modeling<br/>
                 Java development<br/>
                 Database development<br/>
                 UI Design<br/>
                </p>
                <header>Tools & Environment</header>
                <p>
                	Dreamweaver<br/>
                	Eclipse<br/>
                    Windows<br/>
                    Tomcat<br/>
                    MSSQL 2005<br/>
                </p>
                <header>Source & Archivements</header> 
                <p>
                	Documentation<br/>
                </p>         
            </article>  

 	</section>  

</div> 
          
    <!---aside, index for projects--->      
		<?php include 'sidebar.php';?>
	<!---End of div container->
      
</html> 