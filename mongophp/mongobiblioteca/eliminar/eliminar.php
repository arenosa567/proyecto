<?php
     require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
     //nombre base de datos y nombrecolleccion
     $c_libro = connect("bibliotecadb","libros");
     $c_autor= connect("bibliotecadb","autor");
     $c_categoria = connect("bibliotecadb","categorias");
     $c_editorial = connect("bibliotecadb","editorial");
     if(isset($_GET["id"])){
         $id = $_GET["id"];
         $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
            if($c_libro->count($condicion) == 1){
                $c_libro->deleteOne($condicion);
                header("Refresh: 0;url=../index.php?mensaje=1&titulo=eliminarlibro");
            }

            elseif($c_categoria->count($condicion) == 1){
                $c_categoria->deleteOne($condicion);
                header("Refresh: 0;url=../index.php?mensaje=1&titulo=eliminarcategoria");
            }

            elseif($c_editorial->count($condicion) == 1){
                $c_editorial->deleteOne($condicion);
                header("Refresh: 0;url=../index.php?mensaje=1&titulo=eliminareditorial");
            }

            elseif($c_autor->count($condicion) == 1){
                $c_autor->deleteOne($condicion);
                header("Refresh: 0;url=../index.php?mensaje=1&titulo=eliminarautor");
            }
     }