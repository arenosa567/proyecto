<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
     
    $categoria = $_POST["categoria"];
    //nombre base de datos y nombrecolleccion
    $c_categoria = connect("bibliotecadb","categorias");
    if(!empty($categoria)){
        $nuevoCategoria= array("nombrecategoria" => $categoria);
        $c_categoria ->insertOne($nuevoCategoria);
        header("refresh: 0;url=../index.php?mensaje=2&titulo=insertarcategoria");
     }
