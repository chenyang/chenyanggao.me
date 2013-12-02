<!DOCTYPE html>
<html>

	
<head> 
  <meta charset="utf-8" />
  <title>Gao Chenyang - Portfolio</title>
  <link rel="stylesheet" href="css/index.css">   
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
<script type="text/javascript" src="js/myjs.js"></script>
</head>

<body>
    <header>
      <h1>  
      	<div id="flags" align="right">
      		<a id="image_1" href="../">Anglais</a><a id="image_2" href="../fr">Français</a>
    	</div>
      
      	<img src="images/header-1.png"/>
      </h1>      
	</header>

	<div id="container">

		<nav>
          <a href="javascript:include_home()" name="#top">Accueille</a>
          <a href="javascript:include_projects()">Projets</a>
          <a href="javascript:include_about_me()">A propos</a>
          <a href="javascript:include_resume()">Résumé</a>      
        </nav>
        
        <div id="included">
        <?php include 'home_fr.php'; ?>
        </div>
                
	  	<footer>
            <p>(C) 2008-2012 Profile de Chenyang GAO | Relalisé par Chenyang en utilisant HTML, CSS, PhotoShop, JavaScript & PHP
            <a class="backToTop" href="#top"><strong>Back To Top</strong></a>
            </p>
        </footer>
 
</div>     
   

</body>

</html>