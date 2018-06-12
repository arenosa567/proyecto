 
<?php 
	
	include("funciones/function.php");
				
		$tabla ="alumnos";
		delete($tabla);
		ruta(header("Location:index.php?listado=alumnos"));
		

