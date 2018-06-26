<?php
include("clases.php");

$articulo = Blog::listaFilas();

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
        <?php } ?>
    </tbody>
</table>

