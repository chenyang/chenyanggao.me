<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/projects_detail.css">
	

        
<!---div projects_left, show of projects--->
<div id="projects_detail">
     <section>
           	<article class="article_left">
            <div class="project_description">
            <h2>
            	Expernova: Development of "viralite Web"
            </h2>
            <img src="images/details_images/expernova_04.jpg" width="160" height="100" align="right" style="margin-top:10px;"/>
            <p>
          Expernova, who was our client during industrial project, is an innovative enterprise located in Montpellier. Our team of 4 created social tools for Expernova's secondary website: "www.scientificprofile.com" to expand its popularity. During the project, I was responsible for linkedIn and Mandeley integration.
            </p>
            </div>

            <br/><br/>
            <div class="project_precision">
            	<header>Overview</header>
                
                <p>
                <a href="http://www.expernova.com/">Expernova</a>, is an innovative enterprise located in Montpellier, whose main mission is to create a centralized management access to expertise open towards the poles of scientific excellence which allows organizations of all sizes to quickly access breakthrough innovation. During the industrial project, we are supposed to develop social tools for the company's sub website "ScientificProile", to reach more experts and provide them a more efficient way to register with Expernova.
                </p>
                
              	
                <header>Requirement Analysis</header>
              <p>
              	At the early stage of the project, we discussed and held sevral meetings with the enterprise to discuss how to expand the popularity of the compnay. During the discussion we thought out many possibilities and finally we made our agreement: 1.Registration integrated with professional SNS such as LinkedIn, Viadeo ("LinkedIn" widely used in France) and Mandeley. 2. Share Integration using "AddThis". 3.Automatic mail signature 4. Social network development.
              </p>
               <header>Realization</header>
              	<p>
                	During the development phase, I was responsible for web development of integration with LinkedIn and Mandeley. There is no database requirement and we had several meetings with enterprise to discuss the project progress.
                </p>
                
                <h3>LinkedIn & Mandeley Integration</h3>
                <p>
                	I created php files to handle linkedIn and Mandeley integration requests on local server. The integration of LinkedIn was JSON based and for the convenience of user, I used AJAX for automatic synchronization with LinkedIn API. For Mandeley integration, since Mandeley API was strictly OAuth 1.0, I followed the rule of authorization to generate the mid-level php for importing(from Mandeley) and exporting(to Expernova) data. Common data format was JSON.
                </p>


                      <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
                <a href="images/details_images/expernova_02.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/expernova_02.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Prototype registration page</div>
                          </div>
                          
                          <div class="project_show_image" style="float:left">
               <a href="images/details_images/expernova_03.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/expernova_03.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>OAuth 1.0 with Mandeley</div>
                          </div>
               		</div>      
             
             <header>Results and Documentation</header>
             <p>
             	During the project, we used Gantt diagram to strictly control our project progress and we met with enterprise regularly. At the end of May, we realized all the demands and specifications of Expernova. <a href="https://github.com/chenyang/Project_Expernova">Resources and reports are available on Github</a>. Besides, at the end of our project, the sub website "Scientific Profile" has been successfully put online. For more details, please<a href="http://www.scientificprofile.com/"> visit their site</a>.
             </p>
             <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
                 <a href="images/projects_images/Expernova.png" class="highslide" onclick="return hs.expand(this)"><img src="images/projects_images/Expernova.png" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>A Poster of our project</div>
                          </div>
                          
                           <div class="project_show_image" style="float:left">
                <a href="images/details_images/expernova_01.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/expernova_01.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Scientific Profile website</div>
                          </div>
              </div>
             </p>
             
               
    		</div><!--End of div project_precision--->    
            </article>
 
            <article class="article_right">
            	<header>Type</header>
                <p>enterprise project</p>
                <header>Time</header>
                <p>spring 2012</p>
                <header>Methods & Skills</header> 
                <p>
                Social Network Integration & Development<br/>
                Web Development<br/>
                </p>
                <header>Tools & Environment</header>
                <p>
                	LAMP(Local Server)<br/>
                </p>
                <header>Source & Archivements</header> 
                <p>
                Sample Website<br/>
                Documentation<br/>
                </p>         
            </article>  

 	</section>  

</div> 
          
    <!---aside, index for projects--->      
		<?php include 'sidebar.php';?>
	<!---End of div container->
      
</html> 