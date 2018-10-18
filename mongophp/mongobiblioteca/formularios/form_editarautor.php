<?php
     require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
        //se refleja el header y el nav
    require_once("../plantilla.php");
    Plantilla::editar();
?>
    <div class="container">
	<h2>Bienvenidos a la aplicación Editar Autor</h2>
		
		<form class="form-horizontal" action="../editar/editar_autor.php" method="post">
            <?php
               
                $nombredbs = "bibliotecadb";
                            $nombrecolection = "autor";
                          $c_autor =  connect($nombredbs,$nombrecolection);
                    if(isset($_GET["id"])){
                        $id =$_GET["id"];
                        //where    
                        $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
                        //si coincide el _id que viene por $_GET    
                        if($c_autor->count($condicion) == 1){
                            /*se pone como variable, la variable del foreach de index.php, si no,  devuelve el error, variable no definida*/
                            $autor = $c_autor->findOne($condicion);

                        }
                    }
            ?>
		  	<div class="control-group">
		    	<label class="control-label" for="nombreautor1">Nombre Autor1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor1" id="nombreautor1" class="input-xlarge"
                    value="<?php if(isset($autor["nombreautor1"])) echo $autor["nombreautor1"]; ?>"/>
                    <input type="hidden" name="id" value="<?php echo $id; ?>" >
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreautor2">Nombre Autor2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor2" id="nombreautor2" class="input-xlarge" 
                    value="<?php if(isset($autor["nombreautor2"])) echo $autor["nombreautor2"]; ?>"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreautor3">Nombre Autor3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor3" id="nombreautor3" class="input-xlarge" 
                    value="<?php if(isset($autor["nombreautor3"])) echo $autor["nombreautor3"]; ?>"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="editarautor"  class="btn btn-large btn-primary"><i class="icon-book icon-white"></i> ActualizarAutores</button>   
                </div>    
            </div> 
		</form>
		<!--<footer>
		  <p>Arenosa</p>
		</footer>-->
	</div> <!-- /container -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
  </body>
</html>