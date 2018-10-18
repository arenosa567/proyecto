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
                    <label class="control-label" for="nombreautor1">Nombre del Autor1</label>
                    <div class="controls">
                      <input type="text" name="nombreautor1" class="input-xlarge" id="nombreautor1"  placeholder="nombre del autor1" value="<?php if(isset($_SESSION["autor1"])) echo $_SESSION["autor1"]; ?>"/>  
                        
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="Autor">Nombre del Autor2</label>
                    <div class="controls">
                        <input type="text" name="nombreautor2" class="input-xlarge" id="nombreautor2"  placeholder="nombre del autor2" value="<?php if(isset($_SESSION["autor2"])) echo $_SESSION["autor2"]; ?>"/>  
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="Autor">Nombre del Autor3</label>
                    <div class="controls">
                       <input type="text" name="nombreautor3" class="input-xlarge" id="nombreautor3"  placeholder="nombre del autor3" value="<?php if(isset($_SESSION["autor3"])) echo $_SESSION["autor3"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="nombreeditorial1">Nombre Editorial1</label>
                    <div class="controls">
                        <input type="text" name="nombreeditorial1" id="nombreeditorial1" class="input-xlarge" placeholder="nombre Editorial1" value="<?php if(isset($_SESSION["editorial1"])) echo $_SESSION["editorial1"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="nombreeditorial2">Nombre Editorial2</label>
                    <div class="controls">
                         <input type="text" name="nombreeditorial2" id="nombreeditorial2" class="input-xlarge" placeholder="nombre Editorial2" value="<?php if(isset($_SESSION["editorial2"])) echo $_SESSION["editorial2"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="nombreeditorial3">Nombre Editorial3</label>
                    <div class="controls">
                        <input type="text" name="nombreeditorial3" id="nombreeditorial3" class="input-xlarge" placeholder="nombre Editorial3" value="<?php if(isset($_SESSION["editorial3"])) echo $_SESSION["editorial3"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <label class="control-label" for="categoria">Nombre Categoria</label>
                    <div class="controls">
                        <input type="text" name="categoria" class="input-xlarge" id="categoria"  placeholder="Nombre Categoría" value="<?php if(isset($_SESSION["categoria"]))
                            echo $_SESSION["categoria"]; ?>"/>
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
                
                    $editorial1 =$_SESSION["editorial1"];
                    $editorial2 =$_SESSION["editorial2"];
                    $editorial3 =$_SESSION["editorial3"];
                    $categoria = $_SESSION["categoria"];
                    $autor1 =$_SESSION["autor1"];
                    $autor2 =$_SESSION["autor2"];
                    $autor3 =$_SESSION["autor3"];
                    $libro = $_SESSION["libro"];
                   
                    //nombre base de datos y nombrecolleccion
                    $c_libro = connect("bibliotecadb","libros");
                    if(!empty($libro) || !empty($editorial1) || !empty($editorial2) || !empty($editorial3)||!empty($autor1) || !empty($autor2) || !empty($autor3) || !empty($categoria)){
                    $nuevoLibro = array("titulo" => array('$gte'=>$libro),
                                       'nombreeditorial1' => array('$gte' =>$editorial1), 
                                       'nombreeditorial2' => array('$gte' =>$editorial2), 
                                       'nombreeditorial3' => array('$gte' =>$editorial3), 
                                       'nombreautor1' => array('$gte' =>$autor1), 
                                       'nombreautor2' => array('$gte' =>$autor2), 
                                       'nombreautor3' => array('$gte' =>$autor3), 
                                       "nombrecategoria" => array('$gte'=>$categoria));
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