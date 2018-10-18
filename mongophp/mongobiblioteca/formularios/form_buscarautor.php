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
             <form class="form-horizontal" action="consulta/autor.php" method="post">
		  	<div class="control-group">
		    	<label class="control-label" for="nombreautor1">autor1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor1" id="nombreautor1" class="input-xlarge" placeholder="autor1" value="<?php if(isset($_SESSION["autor1"])) echo $_SESSION["autor1"]; ?>"/>
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreautor2">autor2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor2" id="nombreautor2" class="input-xlarge" placeholder="autor2" value="<?php if(isset($_SESSION["autor2"])) echo $_SESSION["autor2"]; ?>"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreautor3">autor3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreautor3" id="nombreautor3" class="input-xlarge" placeholder="autor3" value="<?php if(isset($_SESSION["autor3"])) echo $_SESSION["autor3"]; ?>"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="buscarautor" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>BuscarAutor</button>   
                </div>    
            </div> 
		</form>
        </div>
        <div class="col-sm-10">    
		<table class="table table-striped table-bordered">
			<thead>
			    <tr class="tr-head">
			    	<th>Autor1</th>
                    <th>Autor2</th>
                    <th>Autor3</th>
                    
			    </tr>
			</thead>
			<tbody>
				<?php
                    if(isset($_GET["titulo"])){
                if($_GET["titulo"] == "buscarautor"){
                
                        $autor1 =$_SESSION["autor1"];
                        $autor2 =$_SESSION["autor2"];
                        $autor3 =$_SESSION["autor3"];
                    
					//nombre base de datos y nombrecolleccion
                    $c_autor = connect("bibliotecadb","autor");
                    if(!empty($autor1)|| !empty($autor2) || !empty($autor3)){
                    	
                            $nuevoautor=array( 
                            'nombreautor1' => array('$gte' =>$autor1), 
                            'nombreautor2' => array('$gte' =>$autor2), 'nombreautor3' => array('$gte' =>$autor3)
                            );
                                               
                        $autores = $c_autor->find($nuevoautor); 
						foreach ($autores as $autor) {
						
				?>
				<tr>
                    <td><?php if(isset($autor["nombreautor1"]))
                        echo $autor["nombreautor1"]; ?></td>
                                
                    <td><?php if(isset($autor["nombreautor2"]))
                        echo $autor["nombreautor2"]; ?></td>
                    
                    <td><?php if(isset($autor["nombreautor3"]))
                        echo $autor["nombreautor3"]; ?></td>
    					
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