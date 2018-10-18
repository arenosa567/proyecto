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
             <form class="form-horizontal" action="consulta/editorial.php" method="post">
		  	<div class="control-group">
		    	<label class="control-label" for="nombreeditorial1">Editorial1</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial1" id="nombreeditorial1" class="input-xlarge" placeholder="Editorial1" value="<?php if(isset($_SESSION["editorial1"])) echo $_SESSION["editorial1"]; ?>"/>
		    	</div>
		  	</div>
			<div class="control-group">
		    	<label class="control-label" for="nombreeditorial2">Editorial2</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial2" id="nombreeditorial2" class="input-xlarge" placeholder="Editorial2" value="<?php if(isset($_SESSION["editorial2"])) echo $_SESSION["editorial2"]; ?>"/>
		    	</div>
		  	</div>
            <div class="control-group">
		    	<label class="control-label" for="nombreeditorial3">Editorial3</label>
		    	<div class="controls">
		      		<input type="text" name="nombreeditorial3" id="nombreeditorial3" class="input-xlarge" placeholder="Editorial3" value="<?php if(isset($_SESSION["editorial3"])) echo $_SESSION["editorial3"]; ?>"/>
		    	</div>
		  	</div>
		  	<div class="control-group">
                <div class="controls">
                    <button type="submit" name="creareditorial" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>BuscarEditorial</button>   
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
                    
			    </tr>
			</thead>
			<tbody>
				<?php
                    if(isset($_GET["titulo"])){
                if($_GET["titulo"] == "buscareditorial"){
                
                        $editorial1 =$_SESSION["editorial1"];
                        $editorial2 =$_SESSION["editorial2"];
                        $editorial3 =$_SESSION["editorial3"];
                    
					//nombre base de datos y nombrecolleccion
                    $c_editorial = connect("bibliotecadb","editorial");
                    if(!empty($editorial1)|| !empty($editorial2) || !empty($editorial3)){
                    	
                            $nuevoEditorial=array( 
                            'nombreeditorial1' => array('$gte' =>$editorial1), 
                            'nombreeditorial2' => array('$gte' =>$editorial2), 'nombreeditorial3' => array('$gte' =>$editorial3)
                            );
                                               
                        $editoriales = $c_editorial->find($nuevoEditorial); 
						foreach ($editoriales as $editorial) {
						
				?>
				<tr>
                    <td><?php if(isset($editorial["nombreeditorial1"])) echo $editorial["nombreeditorial1"]; ?></td>
                    <td><?php if(isset($editorial["nombreeditorial2"])) echo $editorial["nombreeditorial2"]; ?></td>
                    <td><?php if(isset($editorial["nombreeditorial3"])) echo $editorial["nombreeditorial3"]; ?></td>
    					
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