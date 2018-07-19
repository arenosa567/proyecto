<?php include("../clases.php"); 


$articulo = Blog::listaFilas();
?>
<div class="container form">
            
          <form method="post">
              <div class="form-group">
                      <input type="hidden" name="idblogs" value="">
                  </div> 
			  <div class="form-group">
				  <!--<label  for="apellidos">apellidos</label>-->
                  <select name="idblogs">
                      
                        <?php
                            
                            foreach($articulo as $arti){
                                //para dejar seleccionado la opcion elegida
                                   
                          ?>     
                             <option value="
                         <?php 
                             echo $arti['idblogs'].$arti['titulo'];
                            
                         ?>"><?php  echo $arti['idblogs'].$arti['titulo'] ?></option>
                            
                      <?php
                               
                            } 
                      ?>
                  
                  </select>
                  
                  <div class="form-group">
                      <input type="hidden"  name="titulo" value="">
                  </div> 
                  <div class="form-group">
                      <input type="hidden"  name="editorial" value="">
                  </div> 
                  <div class="form-group">
                      <input type="hidden"  name="autor" value="">
                  </div> 
                  <div class="form-group">
                      <input type="hidden" name="fecha" value="">
                  </div> 
                  <div class="form-group">
                      <input type="hidden"   name="categoria" value="">
                  </div> 
                  <div class="form-group">
                      <input type="hidden"  name="contenido" value="">
                  </div> 
                                    
                  <input  type="submit" name="boton" class="btn btn-primary" value="listafila">
                  <input  type="submit" onClick="return confirmarborrar();" name="delete" class="btn btn-primary" value="delete">
                 <input type="submit" name="update" class="btn btn-primary" value="modificar">
		  </form>
                <?php
                    if(isset($_POST["boton"]) || isset($_POST["delete"])|| isset($_POST["update"])){
                        header("Location:../index.php");
                    }
                ?>
        </div>