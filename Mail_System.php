<!DOCTYPE html>
<html>
<link rel="stylesheet" href="css/projects_detail.css">
	

        
<!---div projects_left, show of projects--->
<div id="projects_detail">
     <section>
           	<article class="article_left">
            <div class="project_description">
            <h2>
            	Simple Chat: C based Mailing System
            </h2>
            <img src="images/projects_images/Mail_System.png" width="200" height="120" align="right" style="margin-top:10px;"/>
            <p>
           Worked in pairs, we implemented a small system written in C for sending, responding and managing mails with C/S model. I was mainly responsible for local and client side programming in C.
            </p>
            </div>

            <br/><br/>
            <div class="project_precision">
            	<header>System Specification</header>
              <p>
              	This project is a final project in course Network. The aim of this project was to practice the programming skills in C TCP/IP sockets programming in C. Worked in paire, my team mate and I realised a C based mail system to communicate with each other. 			
                <br/>
                <h3>Main function of client</h3>
                1. Send and receive emails. See inbox, sentbox and draftbox.<br/>
                2. register/unregister on the server, blacklist a user and choose the user to send email.<br/>
                <h3>Main function of server</h3>
                1.Find and delte a user.<br/>
                2.manage the list of user, respond client's requests and manage the activity of user<br/>	
               </p>
              
               <header>Realization</header>
              	
                <p>
               		During the realization phase, we developped general 3 parts of our system: Local functions, Server side functions and client side functions. Each portion of them contains functions TCP and functions UDP.
                </p>
                
                <p>Main funcitons contain:</p>
                <div style="float:left; margin:10px;">
                <h3>Local</h3>
                - show_inbox<br/>
                - show_sendbox<br/>
                - show_composebox<br/>
                - consult_inbox<br/>
                - consult_sendbox<br/>
                - consult_composebox<br/>
                - delete_mail<br/>
                - compose<br/>
                - quit<br/>
                </div>
                
                <div style="float:left; margin:10px;">
                <h3>Client side</h3>
                - subscribe<br/>
                - unsubsribe<br/>
                - getUserList<br/>
                - getBlackList<br/>
                - connection_TCp<br/>
                - send_Mail<br/>
                - receiveMailList<br/>
				</div>
                
               <div style="margin:10px; float:left">
               <h3>Server side</h3>
                -Purge<br/>
                -openUDP<br/>
                -openTCP<br/>
                -findUser<br/>
                -deleteUser<br/>
                -isBlack<br/>
                -deleteBlack<br/>
                -disconnect<br/>
                -processKeyBoard<br/>
                -processUDP<br/>
                -processTCP<br/>
               </div>
               
               <div style="margin:10px; clear:left">
               <h3>General</h3>
                many other structure and common methods
               </div>
				
				
				<h3>Source code</h3>
                <p>
                	Please visit <a href="https://github.com/chenyang/Project_Reseaux">Github</a> to download source code and Report (French).
                </p>


                      <div class="image" style="clear:both">
                      
                          <div class="project_show_image" style="float:left">
           <a href="images/details_images/mail_01.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/mail_01.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Sample code 1</div>
                          </div>
                          
                          <div class="project_show_image" style="float:left">
          <a href="images/details_images/mail_03.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/mail_03.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Sample code 2</div>
                          </div>
                          
                           <div class="project_show_image" style="float:left">
           <a href="images/details_images/mail_02.jpg" class="highslide" onclick="return hs.expand(this)"><img src="images/details_images/mail_02.jpg" alt="Highslide JS" title="Click to enlarge" width="190" height="140"/></a>
                              <div>Sample code 3</div>
                          </div>
                          
               		</div>      
             
               
    		</div><!--End of div project_precision--->    
            </article>
 
            <article class="article_right">
            	<header>Type</header>
                <p>school project</p>
                <header>Time</header>
                <p>spring 2012</p>
                <header>Methods & Skills</header> 
                <p>
                C programming<br/>
                TCP/IP<br/>
                Socket Programming (TCP/UDP)<br/>
                </p>
                <header>Tools & Environment</header>
                <p>
                	Linux<br/>
               		Code::Blocks<br/>
                </p>
                <header>Source & Archivements</header> 
                <p>
                Sample Code<br/>
                Report Documentation<br/>
                </p>         
            </article>  

 	</section>  

</div> 
          
    <!---aside, index for projects--->      
		<?php include 'sidebar.php';?>
	<!---End of div container->
      
</html> 