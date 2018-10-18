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
       <h3>Crear libro</h3>
            
            <form class="form-horizontal"  action="insertar/add_libro.php" method="post">
                <div class="control-group">
                    <label class="control-label" for="NameLibro">Título del libro</label>
                    <div class="controls">
                        <input type="text" name="nameLibro" id="NameLibro" class="input-xlarge" placeholder="Título del Libro"/>
                                                
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
                            ?>
                                        <option value="<?php echo $autor['nombreautor1'] ?>">
                                            <?php echo $autor['nombreautor1']; ?></option>

                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin Autor</option>
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
                            ?>
                                        <option value="<?php echo $autor['nombreautor2'] ?>"><?php echo $autor['nombreautor2'] ?></option>
                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin Autor</option>
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
                            ?>
                                        <option value="<?php echo $autor['nombreautor3'] ?>"><?php echo $autor['nombreautor3'] ?></option>
                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin Autor</option>
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
                            ?>
                                        <option value="<?php echo $editorial['nombreeditorial1'] ?>"><?php echo $editorial['nombreeditorial1'] ?></option>

                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin sineditorial</option>
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
                            ?>
                                        <option value="<?php echo $editorial['nombreeditorial2'] ?>"><?php echo $editorial['nombreeditorial2'] ?></option>

                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin sineditorial</option>
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
                            ?>
                                        <option value="<?php echo $editorial['nombreeditorial3'] ?>"><?php echo $editorial['nombreeditorial3'] ?></option>
                            <?php 
                                    }
                                }else{
                            ?>
                                        <option value="">Sin sineditorial</option>
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
                            ?>
                            <option value="<?php echo $categoria['nombrecategoria'] ?>"><?php echo $categoria['nombrecategoria'] ?></option>

                            <?php 
                                    }
                                }else{
                            ?>
                            <option value="">Sin categoria</option>
                            <?php } ?>

                        </select>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="fecha">Fechapublicación</label>
                    <div class="controls">
                        <input type="date" name="fecha" id="fecha" class="input-xlarge" placeholder="fecha"/>
                        
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="descripcion">Breve descripción del libro</label>
                    <div class="controls">
                        <textarea name="descripcion" rows="6" class="input-xlarge"></textarea>
                        
                    </div>
                </div>

                <div class="control-group">
                    <div class="controls">
                        <button type="submit" name="crearlibro" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>Guardar Libro </button>
                        
                    </div>
                </div>
            </form>
           </div>
            <div class="col-sm-10">
		<h3>Lista de libro almacenados</h3>
            
		<table class="table table-striped table-bordered">
          
			<thead>
			    <tr class="tr-head">
			    	<th>Título</th>
                    <th>Autor1</th>
                    <th>Autor2</th>
                    <th>Autor3</th>
                    <th>Editorial1</th>
                    <th>Editorial2</th>
                    <th>Editorial3</th>
                    <th>Categoría</th>
                    <th>Fecha</th>
			    	<th>Descripción</th>
			    	<th>Modificar</th>
			    	<th>Eliminar</th>
			    </tr>
			</thead>
			<tbody>
				<?php
					//nombre base de datos y nombrecolleccion
                    $c_libro = connect("bibliotecadb","libros");

					if ( $c_libro->count()>0)
					{
						$libros = $c_libro->find();
						foreach ($libros as $libro) {
						
				?>
				<tr>
                    <td><?php  if(isset($libro["titulo"])) echo $libro["titulo"]; ?></td>
                    <td><?php  if(isset($libro["nombreautor1"])) echo $libro["nombreautor1"]; ?></td>
                    <td><?php  if(isset($libro["nombreautor2"])) echo $libro["nombreautor2"]; ?></td>
                    <td><?php  if(isset($libro["nombreautor3"])) echo $libro["nombreautor3"]; ?></td>
    				<td><?php  if(isset($libro["nombreeditorial1"])) echo $libro["nombreeditorial1"]; ?></td>
                    <td><?php  if(isset($libro["nombreeditorial2"])) echo $libro["nombreeditorial2"]; ?></td>
                    <td><?php  if(isset($libro["nombreeditorial3"])) echo $libro["nombreeditorial3"]; ?></td>
					<td><?php  if(isset($libro["nombrecategoria"])) echo $libro["nombrecategoria"]; ?></td>
                    <td><?php  if(isset($libro["fecha"])) echo $libro["fecha"]; ?></td>
					<td><?php  if(isset($libro["contenido"])) echo $libro["contenido"]; ?></td>
					
                    <td><a  href="formularios/form_editarlibro.php?id=<?php echo $libro['_id'] ?>" class="btn btn-warning "><i class="icon-pencil icon-white"></i> Modificar</a></td>
					<td><a onClick="return confirmarborrar();" href="eliminar/eliminar.php?id=<?php echo $libro['_id'] ?>" class="btn btn-danger"><i class="icon-remove icon-white"></i> Eliminar</a></td>
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