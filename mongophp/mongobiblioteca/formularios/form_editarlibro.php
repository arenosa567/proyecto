<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
    
          require_once("../plantilla.php");
    Plantilla::editar();
    
?>

	<div class="container">
        
		<h2>Bienvenidos a la aplicación Editar Libro</h2>
		<form class="form-horizontal" action="../editar/editar_libro.php" method="post">
            
            <?php
                //nombre base de datos y nombrecolleccion
                $c_libro = connect("bibliotecadb","libros");
                if(isset($_GET["id"])){
                $id =$_GET["id"];
                //where    
                $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
                //si coincide el _id que viene por $_GET    
                if($c_libro->count($condicion) == 1){
                    /*se pone como variable, la variable del foreach de index.php, si no,  devuelve el error, variable no definida*/
                    $libro = $c_libro->findOne($condicion);
                                    
                }
                   $autor1 = $libro["nombreautor1"]; 
                   $autor2 = $libro["nombreautor2"]; 
                   $autor3 = $libro["nombreautor3"]; 
                   $editorial1 = $libro["nombreeditorial1"];
                   $editorial2 = $libro["nombreeditorial2"]; 
                   $editorial3 = $libro["nombreeditorial3"]; 
                   $categoria =  $libro["nombrecategoria"];   
                }
            ?>
		  	<div class="control-group">
		    	<label class="control-label" for="NameLibro">Título del libro</label>
		    	<div class="controls">
		      		<input type="text" name="nameLibro" id="NameLibro" class="input-xlarge" value="<?php if(isset($libro["titulo"]))  echo $libro["titulo"]; ?>">
                    <input type="hidden" name="id" value="<?php echo $id; ?>" >
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="Autor">Nombre del Autor</label>
		    	<div class="controls">
		      		<select name="autor1">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_autor = connect("bibliotecadb","autor");

							if ($c_autor->count()>0)
							{
								$autores = $c_autor->find();
								foreach ($autores as $autor) {
                                    if($autor['nombreautor1'] == $autor1){
						?>
						              <option value="<?php echo $autor['nombreautor1'] ?>" selected="selected"><?php echo $autor['nombreautor1'] ?></option>
                        
						<?php
                                    }else{
                                     ?>
                                      <option value="<?php echo $autor['nombreautor1'] ?>"><?php echo $autor['nombreautor1'] ?></option>
                                    <?php
                                    }
								}
							}else{
						?>
						            <option value="Sin Autor">Sin Autor</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="Autor">Nombre del Autor</label>
		    	<div class="controls">
		      		<select name="autor2">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_autor = connect("bibliotecadb","autor");

							if ($c_autor->count()>0)
							{
								$autores = $c_autor->find();
								foreach ($autores as $autor) {
                                    if($autor['nombreautor2'] == $autor2){
						?>
                        
						
						              <option value="<?php echo $autor['nombreautor2'] ?>" selected="selected"><?php echo $autor['nombreautor2'] ?></option>
                        
						<?php
                                    }else{
                                     ?>
                                      <option value="<?php echo $autor['nombreautor2'] ?>"><?php echo $autor['nombreautor2'] ?></option>
                                    <?php
                                    }
                         
								}
							}else{
						?>
						            <option value="Sin Autor">Sin Autor</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="Autor">Nombre del Autor</label>
		    	<div class="controls">
		      		<select name="autor3">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_autor = connect("bibliotecadb","autor");

							if ($c_autor->count()>0)
							{
								$autores = $c_autor->find();
								foreach ($autores as $autor) {
                                    if($autor['nombreautor3'] == $autor3){
						?>
                        			  <option value="<?php echo $autor['nombreautor3'] ?>" selected="selected"><?php echo $autor['nombreautor3'] ?></option>
                        
						<?php
                                    }else{
                                     ?>
                                      <option value="<?php echo $autor['nombreautor3'] ?>"><?php echo $autor['nombreautor3'] ?></option>
                                    <?php
                                    }
                         
								}
							}else{
						?>
						            <option value="Sin Autor">Sin Autor</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="editorial">Nombre Editorial</label>
		    	<div class="controls">
		      		<select name="editorial1">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_editorial = connect("bibliotecadb","editorial");

							if ($c_editorial->count()>0)
							{
								$editoriales = $c_editorial->find();
								foreach ($editoriales as $editorial) {
                                    if($editorial['nombreeditorial1'] == $editorial1){
                                        
						          ?>
                                        <option value="<?php echo $editorial['nombreeditorial1'] ?>" selected="selected"><?php echo $editorial['nombreeditorial1'] ?></option>
                                  <?php    
                                    }else{
                                    ?>    
						              <option value="<?php echo $editorial['nombreeditorial1'] ?>"><?php echo $editorial['nombreeditorial1'] ?></option>
                        
						            <?php 
                                    }
								}
							}else{
						?>
						            <option value="Sin editorial">Sin sineditorial</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="editorial">Nombre Editorial</label>
		    	<div class="controls">
		      		<select name="editorial2">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_editorial = connect("bibliotecadb","editorial");

							if ($c_editorial->count()>0)
							{
								$editoriales = $c_editorial->find();
								foreach ($editoriales as $editorial) {
                                    if($editorial['nombreeditorial2'] == $editorial2){
                                        
						          ?>
                                        <option value="<?php echo $editorial['nombreeditorial2'] ?>" selected="selected"><?php echo $editorial['nombreeditorial2'] ?></option>
                                  <?php    
                                    }else{
                                    ?>    
						              <option value="<?php echo $editorial['nombreeditorial2'] ?>"><?php echo $editorial['nombreeditorial2'] ?></option>
                        
						            <?php 
                                    }
								}
							}else{
						?>
						            <option value="Sin editorial">Sin sineditorial</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="editorial">Nombre Editorial</label>
		    	<div class="controls">
		      		<select name="editorial3">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_editorial = connect("bibliotecadb","editorial");

							if ($c_editorial->count()>0)
							{
								$editoriales = $c_editorial->find();
								foreach ($editoriales as $editorial) {
                                    if($editorial['nombreeditorial3'] == $editorial3){
                                        
						          ?>
                                        <option value="<?php echo $editorial['nombreeditorial3'] ?>" selected="selected"><?php echo $editorial['nombreeditorial3'] ?></option>
                                  <?php    
                                    }else{
                                    ?>    
						              <option value="<?php echo $editorial['nombreeditorial3'] ?>"><?php echo $editorial['nombreeditorial3'] ?></option>
                        
						            <?php 
                                    }
								}
							}else{
						?>
						            <option value="Sin editorial">Sin sineditorial</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="categoria">Nombre Categoria</label>
		    	<div class="controls">
		      		<select name="categoria">
		      			<?php
							//nombre base de datos y nombrecolleccion
                            $c_categoria = connect("bibliotecadb","categorias");

							if ($c_categoria->count()>0)
							{
								$categorias = $c_categoria->find();
								foreach ($categorias as $categoria) {
                                 if($categoria['nombrecategoria'] == $categoria){
                                        
						          ?>
                                        <option value="<?php echo $categoria['nombrecategoria'] ?>" selected="selected"><?php echo $categoria['nombrecategoria'] ?></option>
                                  <?php    
                                    }else{
                                    ?>    
						                <option value="<?php echo $categoria['nombrecategoria'] ?>"><?php echo $categoria['nombrecategoria'] ?></option>
                        
						            <?php 
                                    }
								}
							}else{
						?>
						<option value="Sin categoria">Sin categoria</option>
						<?php } ?>
		      			
		      		</select>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="fecha">Fechapublicación</label>
		    	<div class="controls">
		      		<input type="date" name="fecha" id="fecha" class="input-xlarge" 
                    value="<?php if(isset($libro["fecha"]))  echo $libro["fecha"]; ?>"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
		    	<label class="control-label" for="descripcion">Breve descripción del libro</label>
		    	<div class="controls">
		      		<textarea name="descripcion" rows="6" class="input-xlarge"><?php if(isset($libro["contenido"]))  echo $libro["contenido"]; ?></textarea>
		    	</div>
		  	</div>
		  	<div class="control-group">
		    	<div class="controls">
		      		<button type="submit" name="editarlibro" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i> Actualizar Libro</button>
		    	</div>
		  	</div>
        </form>
            <!--</div>    
        </div>-->
		<!--<footer>
		  <p>Arenosa</p>
		</footer>-->

	</div> <!-- /container -->
    
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
  </body>
</html>