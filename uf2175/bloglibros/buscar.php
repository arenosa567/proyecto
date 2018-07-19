<?php
    
  //include("clases.php");  
   if($_POST){
     //if(isset($_POST["buscar"])){ 
       
       /*include("form/formbuscar.php");*/
   $ssql = Blog::find();
        
    //contar el numero de registros o determinar el número de filas del resultado 
    
    $total = $ssql->num_rows;
         
    if($total == 0 ){
       echo "<div class='text-primary'>No hay registros </div>";
        exit();
    }else{
     ?>   
         <ul class="buscar">
                         
                  
<?php
                    foreach($ssql as $registros ){
                            ?>
                                                                    
                                    <li><span class="buscarregistro">Autor: </span ><?php echo $registros["autor"]; ?></li> 
                                                          
                                    <li><span class="buscarregistro">Título: </span><?php echo $registros["titulo"]; ?></li>
                                    
                                    <li><span class="buscarregistro">Editorial: </span><?php echo $registros["editorial"]; ?></li>
                                                                   
                                    <li><span class="buscarregistro">Categoría:</span> <?php echo $registros["categoria"]; ?></li>
                                                           
                                    <li><span class="buscarregistro">Contenido: </span><?php echo $registros["contenido"]; ?></li> 
                                  <hr> 
                                                   
                      <?php }  ?>
                     
                </ul>
       <?php } } 
             
       
        