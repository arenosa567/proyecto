<?php
include_once("ajax/ajax.php");
include_once("clases.php"); 
include("include/header.php");
?>

        <body>
        <nav class="navbar navbar-inverse">	
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li ><a data-toggle="modal" data-target="#myModal" onClick="recargar()" class="boton" href="form/formulario.php">insertar</a></li>
                    
                    <li><a href="index.php">resetear</a></li>
                    
                    <li><a class="boton" onClick="recargar()" href="listado.php?x=lista&pagina=1">listado</a></li>
                             
                    <li><a class="boton1" onClick="recargar()" href="form/formbuscar.php">Búsqueda avanzada</a></li>
                    
                    <li><a class="boton" onClick="recargar()"
                    href="form/formListFila.php">listar_modificar_borrar_registro</a></li>
                    
                    <!--<li><a  href="../../index.php">PágPrincipal</a></li>-->
               
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
                                    //include("update.php");
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
                    
                    
                        include("listfila.php");
                        
                    
                    include("delete.php");
                     
                                                      
                ?>
            
        </div>
       </body>
    </html>
        <?php include("include/footer.php"); ?>    
            
        