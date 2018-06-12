 
<?php
$condicion1=isset($_GET["listado"]) && $_GET["listado"]=='alumnos';

require_once("funciones/function.php");
	cabecera("appbd");  
?>
<body>
	
			
	<nav class="navbar navbar-inverse">	
		<div class="container-fluid">
		
		  <button type="button" class="btn btn-warning navbar-btn" data-toggle="modal" data-target="#myModal">insert</button>	
		  <a href="<?php logout(); ?>"><button type="button" class="btn btn-warning navbar-btn  ">cierresesion</button> </a>
			<a href='<?php ruta('index.php'); ?>'><button type="button" class="btn btn-warning navbar-btn">resetear</button></a>
        <?php
			if(!$condicion1){
				menu_principal();
			}
		?>	
		</div>
	</nav>
	<div class="container">
  			<div id="pagina"></div>
		<?php
		    $tabla = "alumnos";
				$columna ="apellidos";
		
			if(isset($_SESSION["alumno"])){
			echo '<p class="text-primary">' . $_SESSION["alumno"] . '</p>';
			}
			
			
		
			if($condicion1){
				
				listado_alumnos($tabla, $columna);
			}
			
			form_insertar();
		    
   
	?>
	
	<!--</div>-->

<?php piepagina(); ?>
</div>		