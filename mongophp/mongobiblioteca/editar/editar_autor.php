<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
    if($_POST){
    $autor1 = $_POST["nombreautor1"];
    $autor2 = $_POST["nombreautor2"];
    $autor3 = $_POST["nombreautor3"];
    //nombre base de datos y nombrecolleccion
    $c_autor = connect("bibliotecadb","autor");
    $id = $_POST["id"];
    //el where 
    $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
    //lo que vamos a cambiar
    $modificarAutor = array('$set' =>array("nombreautor1" => $autor1, "nombreautor2" => $autor2, "nombreautor3" => $autor3));
    $c_autor->updateOne($condicion, $modificarAutor);
    header("Refresh: 0;url=../index.php?mensaje=3&titulo=editarautor");
       
    }