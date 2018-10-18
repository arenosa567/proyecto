<?php
    session_start();
         
    if($_POST){
         
         $categoria = $_POST["categoria"];
            $_SESSION["categoria"] = $categoria;

            ?>

            <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=5&titulo=buscarcategoria"); ?></button>

            <?php
      }
    
