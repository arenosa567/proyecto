<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
    $autor1 = $_POST["nombreautor1"];
    $autor2 = $_POST["nombreautor2"];
    $autor3 = $_POST["nombreautor3"];
    //nombre base de datos y nombrecolleccion
    $c_autor = connect("bibliotecadb","autor");
    if(!empty($autor1)){
        $nuevoAutor = array("nombreautor1" => $autor1, "nombreautor2" => $autor2, "nombreautor3" => $autor3);
        $c_autor ->insertOne($nuevoAutor);
        header("refresh: 0;url=../index.php?mensaje=2&titulo=insertarautor");
    }