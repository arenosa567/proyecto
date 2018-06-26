<?php
    $res = Blog::listaFilas();
    //contar el numero de registros o determinar el número de filas del resultado 
    $total_registros = $res->num_rows;
    //$conexion->close();
    //mysqli_free_result($res);
    if($total_registros ){ 
		
        //usando ceil para dividir el total de registros ente $por_pagina 
        $total_paginas = ceil($total_registros/$por_pagina);
        
       if($_GET["x"]=="lista"){
           ?>
                <center><a class=" boton" href="listado.php?x=lista&pagina=1"><button type="button" class="btn btn-default">Primera</button></a>
            <?php			 
			 for($i=1;$i<=$total_paginas;$i++){
                 ?>
                <a class=" boton" href ="listado.php?x=lista&pagina=<?php echo $i ?>"><button type="button" class="btn btn-default"><?php echo $i ?></button></a>
                <?php
				 
			 }
			 //link a la ultima pagina
           ?>
            <a class=" boton" href ="listado.php?x=lista&pagina=<?php echo $total_paginas ?>"><button type="button" class="btn btn-default">Última</button></a></center>        
            <?php			 
       }
    }
       
