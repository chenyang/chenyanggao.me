<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/projects_detail.css">
	

        
<!---div projects_left, show of projects--->
<div id="projects_detail">
     <section>
           	<article class="article_left">
            <div class="project_description">
            <h2>
            	Euronext: European Entreprise Analyse
            </h2>
            <img src="images/projects_images/Euronext.png" width="160" height="100" align="right" style="margin-top:10px;"/>
            <p>
          The project aims at researching and discovering the relationship between enterprise category and their social responsibility both in Paris and in Brussels. During the project, I adpated web spider program from Java to PHP and created database model.
            </p>
            </div>

            <br/><br/>
            <div class="project_precision">
            	<header>About the project</header>
                
                <p>
                	The project was started at the end of year 2011 as a course project for "Information System". The aim of this project was to help our client, a professor who was doing research over "The relationship of Social Responsibility and Enterprise in Europe" in University of Montpellier, to generate an automatic tool including web page mining, database Form application and statistic analysis.
                </p>
                <p>
                	During the project, I was mainly involved in Requirement analysis, Database design and web page mining. I adapted web spider tool from Java to php and designed the whole architecture of database. Also I created the regular to better analysis the relationship between Enterprises and their social responsibility.
                </p>
              	
                <header>Development phases</header>
              	
                <h3>Requirement Analysis</h3>
                
                <p>
                	In general, our project was composed of 3 parts: 1. Database modeling and web development 2.PL/SQL programming with Oracle Form 3.Statistic analysis.  
               </p>
               <p> 
                At the very first stage of this porject, we team of 4 discussed with our client and made our strategy: 1. Download all IPO enterprises in Paris and Bruxelle from website "Euronext NYSE".2.Create database model to store these information. 3.Iterate automatically all enterprises (search their website) listed and update the database. 4. Create Oracle Form for professor to input enterprise information and search. 5.Statistic analysis between enterprise and social responsibility. 
                </p>
                
                <p>
                	At this stage, our team also did some research over "Enterprise and Social Responsiblity" to identify key words and categories they belong to . 
                </p>
                <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
           <a href="images/details_images/euronext_06.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/euronext_06.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Euronext NYSE website</div>
                          </div>
                          
                          <div class="project_show_image" style="float:left">
          <a href="images/details_images/euronext_05.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/euronext_05.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>cvs files for enterprise information </div>
                          </div>
               	</div> 
                
                
                
                <h3>Database modeling</h3>
                <p>
                	Refering to the structure of documents downloaded, worked with my team mates, I crated the database model to meet data analysis requirements. The "mot-cle" and "fait-appartient" and related entities were used to store the information captured from internet. 
                </p>
                <p.>
                The idea we present here is that we analyse the key words appear in the company's website and for each word, we assign it a point and a category in terms of "Environment & Social Responsibility".
                </p>
                <div class="image" style="clear:both">
   
                      <div class="project_show_image" style="float:left">
           <a href="images/details_images/euronext_02.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/euronext_02.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                           <div>Database model</div>
                      </div>
                    
                       <div class="project_show_image" style="float:left">
          <a href="images/details_images/euronext_04.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/euronext_04.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                           <div>Value Assignment of appearance of tag</div>
                      </div>
               	</div> 

                <h3>Webpage intelligent analysis</h3>
                
                <p>
                	I developed php files and adapted a java based web spider to php. The idea was that php files firstly analyse the document (csv file downloaded from Euronext NYSE) and iterate every webisite. For each word, we record the location (HTML Tags)it appears so we can analyse the importance of each word or even the level of responsibility for that enterprise. Meanwhile, php files are also responsible for updating data of database. The picture above shows how the idea of tags works. For more details, <a href="https://github.com/chenyang/Project_Euronext">please visit Github to view our source code</a>.
                </p>
                <h3>Oracle Form development</h3>
                
                <p>
                	The next task our team conducted was generating a database application for the professor to enquiry. We used Oracle Form and developed under Linux. I helped to write some code PL/SQL.
                </p>
                <div class="image">
   
                      <div class="project_show_image">
            <a href="images/details_images/euronext_03.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/euronext_03.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                           <div>Sample Oracle Forum</div>
               	</div>
                
                
                <h3>Statistic Analysis</h3>
                
                    <p>
						For the result of Statistic Analysis, our team used R to analysis the relationship between Enterprise and their social responsibilities based on data from Euronext NYSE. The result is <a href="https://github.com/chenyang/Project_Euronext">available on Github</a>
                   	</p>
         
               
    		</div><!--End of div project_precision--->    
            </article>
 
            <article class="article_right">
            	<header>Type</header>
                <p>course project</p>
                <header>Time</header>
                <p>winter 2011 - spring 2012</p>
                <header>Methods & Skills</header> 
                <p>
                PL/SQL Development<br/>
                Web Development<br/>
                Database modeling<br/>
                Requirement & Solution analysis<br/>
                Statistic Analysis<br/>
                </p>
                <header>Tools & Environment</header>
                <p>
                	LAMP (Local)<br/>
                    R<br/>
                    Oracle 10g<br/>
                    Oracle Form<br/>
                </p>
                <header>Source & Archivements</header> 
                <p>
                	Documentation<br/>
                    Project Source<br/>
                </p>         
            </article>  

 	</section>  

</div> 
          
    <!---aside, index for projects--->      
		<?php include 'sidebar.php';?>
	<!---End of div container->
      
</html> 
              >