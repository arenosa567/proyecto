<?php
    require_once "../vendor/autoload.php";
     require_once("../conexion/connect.php");
     $editorial1 = $_POST["nombreeditorial1"];
     $editorial2 = $_POST["nombreeditorial2"];
     $editorial3 = $_POST["nombreeditorial3"];
     //nombre base de datos y nombrecolleccion
     $c_editorial = connect("bibliotecadb","editorial");
     if(!empty($editorial1)){
         $nuevoeditorial = array("nombreeditorial1" => $editorial1, "nombreeditorial2" => $editorial2, "nombreeditorial3" => $editorial3);
         $c_editorial ->insertOne($nuevoeditorial);
         header("refresh: 0;url=../index.php?mensaje=2&titulo=insertareditorial");
     }