<?php
    session_start();
         
    if($_POST){
         
         $libro = $_POST["nameLibro"];
            $_SESSION["libro"] = $libro;

            ?>

            <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=5&titulo=buscarlibro"); ?></button>

            <?php
      }
    
