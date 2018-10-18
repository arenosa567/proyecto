<?php
    require_once "../vendor/autoload.php";
    require_once("../conexion/connect.php");
    if($_POST){
    $editorial1 = $_POST["nombreeditorial1"];
    $editorial2 = $_POST["nombreeditorial2"];
    $editorial3 = $_POST["nombreeditorial3"];
    //nombre base de datos y nombrecolleccion
    $c_editorial = connect("bibliotecadb","editorial");
    $id = $_POST["id"];
    //el where 
    $condicion = array("_id" => new MongoDB\BSON\ObjectId($id));
    //lo que vamos a cambiar
    $modificarEditorial = array('$set' =>array( "nombreeditorial1" => $editorial1, "nombreeditorial2" => $editorial2,  
    "nombreeditorial3" => $editorial3));
    $c_editorial->updateOne($condicion, $modificarEditorial);
    header("Refresh: 0;url=../index.php?mensaje=3&titulo=editareditorial");
        //$titulo ="editareditorial";
        //$_GET["titulo"] = $titulo;
    }