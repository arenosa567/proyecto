<?php
     require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
    //se refleja el header y el nav
    require_once("../plantilla.php");
    Plantilla::editar();
?>
	<di1 class="container">
		<h2>Bienvenidos a la aplicación Editar Categoría</h2>
		
		<form class="form-horizontal" action="../editar/editar_categoria.php" method="post">
             <?php
                    //nombre base de datos y nombrecolleccion
                     $c_categoria = connect("bibliotecadb","categorias");
                    if(isset($_GET["id"])){
                        $id =$_GET["id"];
                        //where    
                        $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
                        //si coincide el _id que viene por $_GET    
                        if($c_categoria->count($condicion) == 1){
                            /*se pone como variable, la variable del foreach de index.php, si no,  devuelve el error, variable no definida*/
                            $categoria = $c_categoria->findOne($condicion);

                        }
                    }
            ?>
		  	<div class="control-group">
		    	<label class="control-label" for="categoria">categoria</label>
		    	<div class="controls">
		      		<input type="text" name="categoria" id="categoria" class="input-xlarge" 
                    value="<?php if(isset($categoria["nombrecategoria"])) echo $categoria["nombrecategoria"]; ?>"/>
                    <input type="hidden" name="id" value="<?php echo $id; ?>" >
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="editarcategoria"  class="btn btn-large btn-primary"><i class="icon-book icon-white"></i> Actualizarcategoría</button>   
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