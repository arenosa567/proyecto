<?php
     require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
    //se refleja el header y el nav
    require_once("../plantilla.php");
     Plantilla::editar();
?>

	<div class="container">
		<h2>Bienvenidos a la aplicación Editar Editorial</h2>
		
		<form class="form-horizontal" action="../editar/editar_editorial.php" method="post">
            <?php
                //nombre base de datos y nombrecolleccion
                $c_editorial = connect("bibliotecadb","editorial");
                    if(isset($_GET["id"])){
                        $id =$_GET["id"];
                        //where    
                        $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
                        //si coincide el _id que viene por $_GET    
                        if($c_editorial->count($condicion) == 1){
                            /*se pone como variable, la variable del foreach de index.php, si no,  devuelve el error, variable no definida*/
                            $editorial = $c_editorial->findOne($condicion);

                        }
                    }
            ?>
		  	<div class="control-group">
		    	<label class="control-label" for="nombreeditorial1">Editorial1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial1" id="nombreeditorial1" class="input-xlarge" 
                    value="<?php if(isset($editorial["nombreeditorial1"])) echo $editorial["nombreeditorial1"]; ?>"/>
                    <input type="hidden" name="id" value="<?php echo $id; ?>" >
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreeditorial2">Editorial2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial2" id="nombreeditorial2" class="input-xlarge" 
                    value="<?php if(isset($editorial["nombreeditorial2"])) echo $editorial["nombreeditorial2"]; ?>"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreeditorial3">Editorial3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial3" id="nombreeditorial3" class="input-xlarge" 
                    value="<?php if(isset($editorial["nombreeditorial3"])) echo $editorial["nombreeditorial3"]; ?>"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="editareditorial"  class="btn btn-large btn-primary"><i class="icon-book icon-white"></i> ActualizarEditorial</button>   
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