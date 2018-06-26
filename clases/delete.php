<?php
    
        if(isset($_POST["delete"])){
            Blog::deleteFila($_POST["idblogs"]);
            echo "eliminado correctamente" ;   
        }else{
            echo "";
        }
    