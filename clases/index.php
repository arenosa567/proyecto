<?php
include("ajax/ajax.php");
include("clases.php"); 
?>
<!doctype html>
	<html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">	
            <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
            <link rel="stylesheet" href="css/responsive.css">
            <link rel="stylesheet" href="css/estilo.css">
            <script type="text/javascript" src="js/respond.js"></script>	
            <title> clases   </title>
        </head>

        <body>
        <nav class="navbar navbar-inverse">	
            <div class="container-fluid">
                 <a class="boton" href="form/formulario.php"><button type="button" class="btn btn-warning navbar-btn  ">insertar</button></a>
                 <a href="index.php"><button type="button" class="btn btn-warning navbar-btn">resetear</button></a>
                <a class="boton" href="listado.php?x=lista&pagina=1"><button type="button" class="btn btn-warning navbar-btn">listado</button></a>
                <a class="boton" href="form/formListFila.php"><button type="button" class="btn btn-warning navbar-btn">listmodborrfila</button></a>
            </div>
        </nav>
        <div class="container">
            <div id="pagina">
            
            </div>
            
            <?php
                
                if(isset($_POST["accion"])){
                    $cla = new Blog();

                    $cla->insertaFila();
                    echo "fila insertada";    
                }elseif(isset($_POST["update"])){
                    include("form/formulario.php");
                        
                }
                    include("update.php");
                    
                    
                        include("listfila.php");
                        
                    
                    include("delete.php");
                                                        
                ?>
            
        </div>
       </body>
    </html>
            <script type="text/javascript" src="js/jquery-2.2.2.min.js"></script> 
            <script type="text/javascript" src="js/bootstrap.min.js"></script>
            <script type="text/javascript" src="js/smoothscroll.js"></script>
		    <script type="text/javascript" src="js/confirmardelete.js"></script>    
        