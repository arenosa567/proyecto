<?php 
    session_start();
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
            <form class="form" name="f" action="consulta/libro.php" method="post">
              
                <div class="control-group">
                    <label class="control-label" for="nameLibro">Título del libro</label>
                    <div class="controls">
                        <input type="text" name="nameLibro" class="input-xlarge" id="NameLibro"  placeholder="Título del Libro" value="<?php if(isset($_SESSION["libro"])) echo $_SESSION["libro"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                    <button type="submit" name="crearlibro" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>Buscar Libro </button>
                    </div>
                </div>
            </form>
        </div>    
      <div class="col-sm-10">      
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
			    	
                </tr>
            </thead>
            <tbody>
                <?php 

                if(isset($_GET["titulo"])){
                if($_GET["titulo"] == "buscarlibro"){
                

                    $libro = $_SESSION["libro"];
                   
                    //nombre base de datos y nombrecolleccion
                    $c_libro = connect("bibliotecadb","libros");
                    if(!empty($libro)){
                    $nuevoLibro = array("titulo" => array('$gte'=>$libro));
                    $libros = $c_libro->find($nuevoLibro);  
                    foreach ($libros as $lib) {
                    ?>
                        <tr>
                            <td><?php  if(isset($lib["titulo"])) echo $lib["titulo"]; ?></td>
                            <td><?php  if(isset($lib["nombreautor1"])) echo $lib["nombreautor1"]; ?></td>
                            <td><?php  if(isset($lib["nombreautor2"])) echo $lib["nombreautor2"]; ?></td>
                            <td><?php  if(isset($lib["nombreautor3"])) echo $lib["nombreautor3"]; ?></td>
                            <td><?php  if(isset($lib["nombreeditorial1"])) echo $lib["nombreeditorial1"]; ?></td>
                            <td><?php  if(isset($lib["nombreeditorial2"])) echo $lib["nombreeditorial2"]; ?></td>
                            <td><?php  if(isset($lib["nombreeditorial3"])) echo $lib["nombreeditorial3"]; ?></td>
                            <td><?php  if(isset($lib["nombrecategoria"])) echo $lib["nombrecategoria"]; ?></td>
                            <td><?php  if(isset($lib["fecha"])) echo $lib["fecha"]; ?></td>
                            <td><?php  if(isset($lib["contenido"])) echo $lib["contenido"]; ?></td>
                            
                        </tr>
                    <?php
                    }
                    }
                }
                }
                 
           ?>
           </tbody>
           </table>
        </div>
    </div>