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
	 <h3>Crear Autor</h3>
		
		<form class="form-horizontal" action="insertar/add_autor.php" method="post">
		  	<div class="control-group">
		    	<label class="control-label" for="nombreAutor1">Nombre Autor1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor1" id="nombreAutor1" class="input-xlarge" placeholder="Nombre Autor1"/>
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreAutor2">Nombre Autor2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor2" id="nombreAutor2" class="input-xlarge" placeholder="Nombre Autor2"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreAutor3">Nombre Autor3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor3" id="nombreAutor3" class="input-xlarge" placeholder="Nombre Autor3"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="crearautor"  class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>GuardarAutores</button>   
                </div>    
            </div> 
		</form>
            </div> 
        <div class="col-sm-10">
		<h3>Lista de autores almacenados</h3>
		<table class="table table-striped table-bordered">
			<thead>
			    <tr class="tr-head">
			    	<th>Autor1</th>
                    <th>Autor2</th>
                    <th>Autor3</th>
                    <th>Modificar</th>
			    	<th>Eliminar</th>
			    </tr>
			</thead>
			<tbody>
				<?php
					//require_once("../conexion/connectAutores.php");
                    $nombredbs = "bibliotecadb";
                            $nombrecolection = "autor";
                
                         $c_autor = connect($nombredbs,$nombrecolection);
					if ($c_autor->count()>0)
					{
						$autores = $c_autor->find();
						foreach ($autores as $autor) {
						
				?>
				<tr>
                    <td><?php if(isset($autor["nombreautor1"])) echo $autor["nombreautor1"]; ?></td>
                    <td><?php if(isset($autor["nombreautor2"])) echo $autor["nombreautor2"]; ?></td>
                    <td><?php if(isset($autor["nombreautor3"])) echo $autor["nombreautor3"]; ?></td>
    				
					<td><a href="formularios/form_editarautor.php?id=<?php echo $autor['_id'] ?>" class="btn btn-warning"><i class="icon-pencil icon-white"></i> Modificar</a></td>
					<td><a onClick="return confirmarborrar();" href="eliminar/eliminar.php?id=<?php echo $autor['_id'] ?>" class="btn btn-danger"><i class="icon-remove icon-white"></i> Eliminar</a></td>
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