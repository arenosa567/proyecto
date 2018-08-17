<?php
include_once("ajax/ajax.php");
include_once("clases.php"); 
include("include/header.php");
?>

        <body>
        <nav class="navbar navbar-inverse">	
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li ><a data-toggle="modal" data-target="#myModal"  class="boton" href="form/formulario.php">insertar</a></li>
                    
                    <li><a href="index.php" onClick="recargar()">Recargar</a></li>
                    
                    <li><a class="boton"  href="listado.php?x=lista&pagina=1">listado</a></li>
                             
                    <li><a class="boton1"  href="form/formbuscar.php">Búsqueda avanzada</a></li>
                    
                    <li><a class="boton" href="form/formListFila.php">modificar_borrar_registro</a></li>
                   
                    
                    <li><a  href="../../index.php">PágPrincipal</a></li>
               
               </ul>
                
           </div>
             
        </nav>
         
        <div class="container">
                    
                <div class="row">
                    
                        <div id="pagina1" class="col-sm-3  col-lg-2" >
                        

                                   <?php
                                       if(isset($_POST["buscar"])){
                                    include("form/formbuscar.php");
                                       }
                                    
                                    ?>
                        </div>
                                    
                        <div id="pagina" class="col-sm-9  col-lg-10">
                        
                               <?php
                                   if(isset($_POST["buscar"])){
                                    include("buscar.php");
                                   }
                                
                                ?>
                        </div>
                    </div>
                          
                    
                    
            <?php
                
                if(isset($_POST["accion"])){
                    $cla = new Blog();

                    $cla->insertaFila();
                    echo "<div class='text-primary'>fila insertada </div>";
                
                }else if(isset($_POST["update"])){
                    include("form/formulario.php");
                        
                
                }
                    include("update.php");
                    
                    include("delete.php");
                     
                                                      
                ?>
            
        </div>
       </body>
    </html>
        <?php include("include/footer.php"); ?>    
            
        