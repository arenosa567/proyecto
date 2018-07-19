
  
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
            <ul class="pagination">
                <li ><a class=" boton" href="listado.php?x=lista&pagina=1">Primera</a></li>
            <?php			 
			 for($i=1;$i<=$total_paginas;$i++){
                 ?>
                <li ><a class="  boton" href ="listado.php?x=lista&pagina=<?php echo $i ?>"><?php echo $i ?></a></li>
                <?php
				 
			 }
			 //link a la ultima pagina
           ?>
            <li ><a class="  boton" href ="listado.php?x=lista&pagina=<?php echo $total_paginas ?>">Última</a></li> 
            </ul>        
            <?php			 
       }
    }
    ?>
    

       
