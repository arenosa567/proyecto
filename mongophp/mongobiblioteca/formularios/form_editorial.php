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
        <h3>Crear Editorial</h3>
			<form class="form-horizontal" action="insertar/add_editorial.php" method="post">
		  	<div class="control-group">
		    	<label class="control-label" for="nombreeditorial1">Editorial1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial1" id="nombreeditorial1" class="input-xlarge" placeholder="Editorial1"/>
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreeditorial2">Editorial2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial2" id="nombreeditorial2" class="input-xlarge" placeholder="Editorial2"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreeditorial3">Editorial3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial3" id="nombreeditorial3" class="input-xlarge" placeholder="Editorial3"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="buscareditorial" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>GuardarEditorial</button>   
                </div>    
            </div> 
		</form>
        </div>
        <div class="col-sm-10">    
		<table class="table table-striped table-bordered">
			<thead>
			    <tr class="tr-head">
			    	<th>Editorial1</th>
                    <th>Editorial2</th>
                    <th>Editorial3</th>
                    <th>Modificar</th>
			    	<th>Eliminar</th>
			    </tr>
			</thead>
			<tbody>
				<?php
					//nombre base de datos y nombrecolleccion
                    $c_editorial = connect("bibliotecadb","editorial");
					if ($c_editorial->count()>0)
					{
						$editoriales = $c_editorial->find();
						foreach ($editoriales as $editorial) {
						
				?>
				<tr>
                    <td><?php if(isset($editorial["nombreeditorial1"])) echo $editorial["nombreeditorial1"]; ?></td>
                    <td><?php if(isset($editorial["nombreeditorial2"])) echo $editorial["nombreeditorial2"]; ?></td>
                    <td><?php if(isset($editorial["nombreeditorial3"])) echo $editorial["nombreeditorial3"]; ?></td>
    				
					<td><a href="formularios/form_editareditorial.php?id=<?php echo $editorial['_id'] ?>" class="btn btn-warning"><i class="icon-pencil icon-white"></i> Modificar</a></td>
					<td><a  onClick="return confirmarborrar();" href="eliminar/eliminar.php?id=<?php echo $editorial['_id'] ?>" class="btn btn-danger"><i class="icon-remove icon-white"></i> Eliminar</a></td>
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