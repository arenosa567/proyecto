<?php
    session_start();
         
    if($_POST){
         
         $editorial1 = $_POST["nombreeditorial1"];
         $editorial2 = $_POST["nombreeditorial2"];
         $editorial3 = $_POST["nombreeditorial3"];
            $_SESSION["editorial1"] = $editorial1;
            $_SESSION["editorial2"] = $editorial2;
            $_SESSION["editorial3"] = $editorial3;
            ?>

            <button class="boton"><?php header("refresh: 0;url=../index.php?mensaje=5&titulo=buscareditorial"); ?></button>

            <?php
      }
    
