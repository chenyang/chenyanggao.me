<!DOCTYPE html>
<html>

	
<head> 
  <meta charset="utf-8" />
  <title>Gao Chenyang - Portfolio</title>
  <link rel="stylesheet" href="css/index.css">   
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.0/jquery.min.js"></script>
<script type="text/javascript" src="js/myjs.js"></script>

<script type="text/javascript" src="/highslide/highslide.js"></script>
<link rel="stylesheet" type="text/css" href="/highslide/highslide.css" />
<script type="text/javascript">
    // override Highslide settings here
    // instead of editing the highslide.js file
    hs.graphicsDir = '/highslide/graphics/';
</script>

</head>

<body>
    <header>
      <h1>  
      	<div id="flags" align="right">
      		<div><a id="image_1" href="./">English</a>
                <!--<a id="image_2" href="./fr">French</a>-->
                </div>
    	</div>
      
      	<img src="images/header-1.png"/>
      </h1>      
	</header>

	<div id="container">

		<nav>
          <a href="javascript:include_home()" name="#top">Home</a>
          <a href="javascript:include_projects()">Projects</a>
          <a href="javascript:include_about_me()">About me</a>
          <a href="javascript:include_resume()">Resume</a>      
        </nav>
        
        <div id="included">
        <?php include 'home.php'; ?>
        </div>
                
	  	<footer>
            <p>(C) 2008-2013 Chenyang GAO's Portfolio | Designed & coded by Chenyang, using HTML, CSS, PhotoShop, JavaScript & PHP
            <a class="backToTop" href="#top"><strong>Back To Top</strong></a>
            </p>
        </footer>
 
</div>     
   

</body>

</html>