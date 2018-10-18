<?php
    session_start();
         
    if($_POST){
         
         $libro = $_POST["nameLibro"];
         $editorial1 = $_POST["nombreeditorial1"];
         $editorial2 = $_POST["nombreeditorial2"];
         $editorial3 = $_POST["nombreeditorial3"];
         $autor1 = $_POST["nombreautor1"];
         $autor2 = $_POST["nombreautor2"];
         $autor3 = $_POST["nombreautor3"];
         $categoria = $_POST["categoria"];
            $_SESSION["categoria"] = $categoria;
            $_SESSION["autor1"] = $autor1;
            $_SESSION["autor2"] = $autor2;
            $_SESSION["autor3"] = $autor3;
            $_SESSION["editorial1"] = $editorial1;
            $_SESSION["editorial2"] = $editorial2;
            $_SESSION["editorial3"] = $editorial3;
            $_SESSION["libro"] = $libro;

            ?>

            <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=5&titulo=buscarlibro"); ?></button>

            <?php
      }
    
