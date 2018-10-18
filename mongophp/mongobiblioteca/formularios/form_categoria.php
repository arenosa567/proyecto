<?php
    if(isset($_GET["mensaje"])){
        require_once "vendor/autoload.php";
        require_once("conexion/connect.php");
    }else{
        require_once "../vendor/autoload.php";
        require_once("../conexion/connect.php");
    }

?>
     <div class="row">
         <div class="col-sm-2">     
    <h3>Crear Categoría</h3>
		
		<form class="form-horizontal" action="insertar/add_categoria.php" method="post">
		  	<div class="control-group">
		    	<label class="control-label" for="categoria">categoria</label>
		    	<div class="controls">
		      		<input type="text" name="categoria" id="categoria" class="input-xlarge" placeholder="categoria"/>
		    	</div>
		  	</div>
            <div class="control-group">
                <div class="controls">
                    <button type="submit" name="categorias"  class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>GuardarCategoría</button>   
                </div>    
            </div> 
		</form>
        </div>
         <div class="col-sm-10">    
		<h3>Lista Categorías almacenados</h3>
		<table class="table table-striped table-bordered">
			<thead>
			    <tr class="tr-head">
			    	<th>Categoría</th>
                    <th>Modificar</th>
			    	<th>Eliminar</th>
			    </tr>
			</thead>
			<tbody>
				<?php
					//nombre base de datos y nombrecolleccion
                    $c_categoria = connect("bibliotecadb","categorias");

					if ($c_categoria->count()>0)
					{
						$categorias = $c_categoria->find();
						foreach ($categorias as $categoria) {
						
				?>
				<tr>
                    <td><?php if(isset($categoria["nombrecategoria"])) echo $categoria["nombrecategoria"]; ?></td>
                        				
					<td><a href="formularios/form_editarcategoria.php?id=<?php echo $categoria['_id'] ?>" class="btn btn-warning">
                    <i class="icon-pencil icon-white"></i> Modificar</a></td>
					<td><a onClick="return confirmarborrar();" href="eliminar/eliminar.php?id=<?php echo $categoria['_id'] ?>" class="btn btn-danger"><i class="icon-remove icon-white"></i> Eliminar</a></td>
				</tr>
				<?php
						}
					}else{
				?>
				<tr>
					<td colspan="4"><h4><i class="icon-info-sign"></i> Sin registros en la Base de Datos</h4></td>
				</tr>
				<?php } ?>
			</tbody>
		</table>
        </div>
        </div> 
		