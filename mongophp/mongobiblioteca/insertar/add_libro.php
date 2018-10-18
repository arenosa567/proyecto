<?php
     require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
     
     if($_POST){
         $libro = $_POST["nameLibro"];
         $autor1 = $_POST["autor1"];
         $autor2 = $_POST["autor2"];
         $autor3 = $_POST["autor3"];
         $editorial1 = $_POST["editorial1"];
         $editorial2 = $_POST["editorial2"];
         $editorial3 = $_POST["editorial3"];
         $categoria = $_POST["categoria"];
         $fecha = $_POST["fecha"];
         $contenido = $_POST["descripcion"];
         //nombre base de datos y nombrecolleccion
         $c_libro = connect("bibliotecadb","libros");
         if(!empty($libro)){
             $nuevoLibro = array("titulo" => $libro, "nombreautor1" => $autor1, "nombreautor2" => $autor2, "nombreautor3" => $autor3, "nombreeditorial1" => $editorial1, "nombreeditorial2" => $editorial2,  "nombreeditorial3" => $editorial3, 
             "nombrecategoria" => $categoria, "fecha" => $fecha, "contenido" => $contenido);
             $c_libro->insertOne($nuevoLibro);
             ?>
             <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=2&titulo=insertarlibro") ?></button>  
         <?php
         }
     }
         
        
         
     
