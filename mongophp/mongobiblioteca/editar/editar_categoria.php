<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
    if($_POST){
        $categoria = $_POST["categoria"];
        //nombre base de datos y nombrecolleccion
        $c_categoria = connect("bibliotecadb","categorias");
        $id = $_POST["id"];
        //el where 
        $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
        //lo que vamos a cambiar
        $modificarCategoria = array('$set' =>array("nombrecategoria" => $categoria));
        $c_categoria->updateOne($condicion, $modificarCategoria);
        header("Refresh: 0;url=../index.php?mensaje=3&titulo=editarcategoria");
    }