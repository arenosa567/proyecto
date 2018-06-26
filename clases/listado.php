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

    <div class="table-responsive"> 
	<table class="table">
		<thead class="thead-dark">
			<tr>
				<th scope="col">Autor</th>
				<th scope="col">Título</th>
				<th scope="col">Fecha</th>
				<th scope="col">Categoría</th>
				<th scope="col">Contenido</th>
			</th>
			</tr>
		</thead>
		<tbody>
<?php
foreach($articulo as $articulos ){
        ?>
            <tr> 
                <td><?php echo $articulos["autor"]; ?></td> 
                <td><?php echo $articulos["titulo"]; ?></td> 
                <td><?php echo $articulos["fecha"]; ?></td> 
                <td><?php echo $articulos["categoria"]; ?></td> 
                <td><?php echo $articulos["contenido"]; ?></td>     

            </tr>
        <?php } 
            
        ?>
    </tbody>
</table>

