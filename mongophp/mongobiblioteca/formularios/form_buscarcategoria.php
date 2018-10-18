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
            <form class="form" name="f" action="consulta/categoria.php" method="post">
              
                <div class="control-group">
                    <label class="control-label" for="categoria">NombreCategoría</label>
                    <div class="controls">
                        <input type="text" name="categoria" class="input-xlarge" id="categoria"  placeholder="Nombre Categoría" value="<?php if(isset($_SESSION["categoria"]))
                            echo $_SESSION["categoria"]; ?>"/>
                    </div>
                </div>
                <div class="control-group">
                    <div class="controls">
                    <button type="submit" name="buscarcategoria" class="btn btn-large btn-primary"><i class="icon-book icon-white"></i>BuscarCategoria </button>
                    </div>
                </div>
            </form>
        </div>    
      <div class="col-sm-10">                                                                                                                  
		<table class="table table-striped table-bordered">
          
            <thead>
                <tr class="tr-head">
                   <th>Categoría</th>
               </tr>
            </thead>
            <tbody>
                <?php 

                if(isset($_GET["titulo"])){
                if($_GET["titulo"] == "buscarcategoria"){
                

                    $categoria = $_SESSION["categoria"];
                   
                    //nombre base de datos y nombrecolleccion
                    $c_categoria = connect("bibliotecadb","categorias");
                    if(!empty($categoria)){
                    $nuevaCategoria = array("nombrecategoria" => array('$gte'=>$categoria));
                    //busqueda por or
                    /*$nuevaCategoria = ['$or' => [["nombrecategoria" =>['$gte'=>$categoria] ], ["nombrecategoria" =>$categoria] ]];*/
                    $categoria = $c_categoria->find($nuevaCategoria);  
                    foreach ($categoria as $cat) {
                    ?>
                        <tr>
                            <td><?php  if(isset($cat["nombrecategoria"])) echo $cat["nombrecategoria"]; ?></td>
                           
                            
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