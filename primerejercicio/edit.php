 
<?php 
	
	include("funciones/function.php");
	cabecera("editar");  
?>
<body>
	<nav class="navbar navbar-inverse">	
		<div class="container-fluid">
			<ul class="nav navbar-nav"> 	
				<li><a href="index.php"><button type="button" class="btn btn-warning navbar-btn">PágPrincipal</button> </a></li>
			</ul>
		</div>
	</nav>
	<div class="container">
    
 	<h1>Editar</h1><span class="filtro">Se ha incorpardo filtros para evitar dos emails y github iguales.</span>
<!--</div>-->
		
	<?php
		
		$tabla ="alumnos";
		update($tabla);
		
	?>
	</div>	
<?php piepagina(); ?>