<?php
session_start();
//elimino el array session
unset($_SESSION);
//eliminar todas las variables de sesion creadas
session_unset();
//eliminar el identificador de la sesion
session_destroy();
//me redirija a la pagina index
header("Location:../index.php");