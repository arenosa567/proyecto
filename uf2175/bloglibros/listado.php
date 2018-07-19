<?php
include("ajax/ajax.php");
include("clases.php");


$por_pagina = 5;
/*-------------------------------paginacion------------------------------------*/
								include("paginacion.php");	
/*-------------------------------termina la paginacion-------------------------*/
if(isset($_GET["pagina"])){
    $pagina = $_GET["pagina"];
}else{
    $pagina =1;
}
    //la cantidad de registros por pagina
    $empieza = ($pagina-1)*$por_pagina;	
   
    if($_GET["x"] == "lista"){ ?>
		<h3>Listado</h3>
   <?php } 
    $articulo = Blog::pagination();
    ?>
       
            <ul class="list">
  <?php     
foreach($articulo as $articulos ){
        ?>  
                    <li><span class="listados">Autor: </span ><?php echo $articulos["autor"]; ?></li>
                     
                    <li><span class="listados">Título: </span ><?php echo $articulos["titulo"]; ?></li>
                    
                    <li><span class="listados">editorial: </span ><?php echo $articulos["editorial"]; ?></li>
                   
                    <li><span class="listados">Fecha: </span ><?php echo $articulos["fecha"]; ?></li>
                
                    <li><span class="listados">Categoría: </span ><?php echo $articulos["categoria"]; ?></li>
                   
                    <li><span class="listados">Contenido: </span ><?php echo $articulos["contenido"]; ?></li>
                                
                <hr>
            
        <?php } 
            
        ?>
        </ul>
            

