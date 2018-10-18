<?php

    class Plantilla{
    function __construct(){
        if(empty($_GET["id"])){
        include_once("ajax/ajax.php");
        ?>
            <!doctype html>
            <html>
            <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="img/faviconarenosa.png">
            <!--<link href="css/bootstrap/bootstrap.min.css" rel="stylesheet"/>-->
            
            <link href="css/bootstrap/bootstrap-responsive.min.css" rel="stylesheet"/>
             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
               
            <link rel="stylesheet" href="css/estilo.css">
            <title>mongo biblioteca</title>
               
                </head>
            <body>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <!--<div class="container">-->
                        <div class="navbar-header">    
                            <a class="navbar-brand" href="unsetsesion.php">MongoDB + PHP + Bootstrap</a>
                            <a class="navbar-brand" href="salir.php">Salir</a>
                        </div>         
                        <ul class="nav navbar-nav">
                          <li><a class="boton"  href="formularios/form_libros.php"><i class="icon-home icon-white"></i>Libros</a></li>
                          <li><a class="boton" href="formularios/form_autores.php"><i class="icon-user icon-white"></i>Autores</a></li>
                          <li><a class="boton" href="formularios/form_categoria.php"><i class="icon-user icon-white"></i>Categoría</a></li>
                          <li><a class="boton" href="formularios/form_editorial.php"><i class="icon-user icon-white"></i>Editorial</a></li> 
                          <li><a class="boton" href="formularios/form_buscarlibro.php"><i class="icon-user icon-white"></i>BuscarLibro</a></li> 
                          <li><a class="boton" href="formularios/form_buscareditorial.php"><i class="icon-user icon-white"></i>BuscarEditorial</a></li>
                          <li><a class="boton"
                          href="formularios/form_buscarautor.php"><i class="icon-user icon-white"></i>BuscarAutor</a></li>
                          <li><a class="boton"
                          href="formularios/form_buscarcategoria.php"><i class="icon-user icon-white"></i>BuscarCategoría</a></li>     
                                 
                          <!--<li><a href="https://twitter.com/JuanGarciaR" target="_blank"><i class="icon-thumbwhite"></i> Twitter @JuanGarciaR</a></li>
                          <li><a href="https://www.facebook.com/JuanGarciaRSM" target="_blank"><i class="icon-tcon-white"></i> Facebook JuanGarciaRSM</a></li>-->
                        </ul>
                            
                   </div>
               </nav>
        <?php
        }
    }
        function __destruct(){
            ?>
            <footer>
		  <p id="piepagina">Realizado por &copy;Arenosa año 2018</p>
		</footer>
        <?php        
        }
       public static function editar(){
            include_once("ajax/ajax.php");
        ?>
            <!doctype html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="../img/faviconarenosa.png">
                <!--<link href="../css/bootstrap/bootstrap.min.css" rel="stylesheet"/>-->

                <link href="../css/bootstrap/bootstrap-responsive.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">    
                <link rel="stylesheet" href="../css/estilo.css">
                <title>mongo editar biblioteca</title>
             
            </head>
            <body>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <!--<div class="container">-->
                        <div class="navbar-header">    
                            <a class="navbar-brand" href="../index.php">MongoDB + PHP + Bootstrap</a>
                        </div> 
                    </div>
                </nav>
        <?php
    }
        
    public static function mensajes(){
        if(isset($_GET["mensaje"]) && isset($_GET["titulo"])){
            $mensaje = $_GET["mensaje"];
            $titulo = $_GET["titulo"];
            
            if ($mensaje == 1) {
                if($titulo == "eliminarlibro"){
                echo "<p class='btn  btn-danger'><i class='icon-trash icon-white'></i>  libro eliminado con éxito  </p><br><br>";
                    include("formularios/form_libros.php");
                }
                if($titulo == "eliminarcategoria"){
                     echo "<p class='btn  btn-danger'><i class='icon-trash icon-white'></i>  categoria eliminado con éxito  </p><br><br>";
                        include("formularios/form_categoria.php");
                }
                if($titulo == "eliminareditorial"){
                    echo "<p class='btn  btn-danger'><i class='icon-trash icon-white'></i>  editorial eliminado con éxito  </p><br><br>";
                        include("formularios/form_editorial.php");
                }
                if($titulo == "eliminarautor"){
                     echo "<p class='btn  btn-danger'><i class='icon-trash icon-white'></i>  autor eliminado con éxito  </p><br><br>";
                        include("formularios/form_autores.php");
                }
            }
            if ($mensaje == 2) {
                if($titulo == "insertarlibro"){
                    echo "<p class='btn  btn-success'><i class='icon-ok icon-white'></i>  libro guardado con éxito</p><br><br>";
                        include("formularios/form_libros.php");
                }if($titulo == "insertarautor"){
                    echo "<p class='btn  btn-success'><i class='icon-ok icon-white'></i>  autor guardado con éxito</p><br><br>";
                        include("formularios/form_autores.php");
                }if($titulo == "insertarcategoria"){
                    echo "<p class='btn  btn-success'><i class='icon-ok icon-white'></i>  categoria guardado con éxito</p><br><br>";
                        include("formularios/form_categoria.php");
                }if($titulo == "insertareditorial"){
                    echo "<p class='btn  btn-success'><i class='icon-ok icon-white'></i>  editorial guardado con éxito</p><br><br>";
                        include("formularios/form_editorial.php");
                }
            }
            if ($mensaje == 3  ) {
                if($titulo == "editarlibro"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> libro  modificado con éxito</p><br><br>";
                        include("formularios/form_libros.php");
                } if($titulo == "editarcategoria"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> categoria  modificado con éxito</p><br><br>";
                        include("formularios/form_categoria.php");
                } if($titulo == "editareditorial"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> editorial  modificado con éxito</p><br><br>";
                        include("formularios/form_editorial.php");
                } if($titulo == "editarautor"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> autor  modificado con éxito</p><br><br>";
                        include("formularios/form_autores.php");
                }
            }
            if($mensaje == 4){
                echo "<p class='alert-Danger'><i class='icon-exclamation-sign icon-white'></i></p>";
            }
            if ($mensaje == 5  ) {
                if($titulo == "buscarlibro"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> Búsqueda del libro realizado con éxito</p>";
                        include("formularios/form_buscarlibro.php");
               } 
                if($titulo == "buscareditorial"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> Búsqueda del editorial realizado con éxito</p>";
                        include("formularios/form_buscareditorial.php");
                        
                } 
                if($titulo == "buscarautor"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> Búsqueda del autor realizado con éxito</p>";
                        include("formularios/form_buscarautor.php");
                } 
                if($titulo == "buscarcategoria"){
                    echo "<p class='btn  btn-warning'><i class='icon-refresh icon-white'></i> Búsqueda de la categoría realizado con éxito</p>";
                        include("formularios/form_buscarcategoria.php");
                } 
            }
               
          
        }  
    }
}

    $obj = new Plantilla();