<?php
    
            if(isset($_POST["modificar"])){
                $modificar = new Blog();
                $modificar->actualizaFila($_POST["idblogs"]);
                echo "actualizado correctamente";
            }else{
                echo "";
            }