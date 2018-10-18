<?php
    session_start();
         
    if($_POST){
         
         $autor1 = $_POST["nombreautor1"];
         $autor2 = $_POST["nombreautor2"];
         $autor3 = $_POST["nombreautor3"];
            $_SESSION["autor1"] = $autor1;
            $_SESSION["autor2"] = $autor2;
            $_SESSION["autor3"] = $autor3;
            
           
            ?>    
            <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=5&titulo=buscarautor"); ?></button>
            <?php
            }
            
     
    
