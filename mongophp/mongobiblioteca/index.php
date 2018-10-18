<?php
    //session_start();
    require_once("plantilla.php");

?>
    
        <div class="container">

            <div id="pagina">
                
                <?php
                    
                    if(isset($_GET["mensaje"])&& isset($_GET["titulo"])){
                        Plantilla::mensajes();
                    }
                ?>

            </div>

        </div> 
            <script src="js/function.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>   
  </body>
</html>