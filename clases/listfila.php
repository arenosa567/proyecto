<?php
//include("clases.php");
//include("ajax/ajax.php");
if(isset($_POST["boton"])){
$x = Blog::cogeFila($_POST["idblogs"]);
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

            <tr>
                <td><?php echo $x->autor; ?></td>
                <td><?php echo $x->titulo; ?></td>
                <td><?php echo $x->fecha; ?></td>
                <td><?php  echo $x->categoria; ?></td>
                <td><?php echo $x->contenido; ?></td>    
            </tr>   
           
<?php } ?>

        </tbody>
    </table>

       