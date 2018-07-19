<?php
        
            if(isset($_POST["modificar"])){
                $modificar = new Blog();
                $modificar->actualizaFila($_POST["idblogs"]);
                echo "<div class='text-primary boton'>Actualización correcta </div>";
            }else{
                echo "";
            }