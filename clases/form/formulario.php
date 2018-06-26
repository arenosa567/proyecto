
<div class="container form">
        <?php
            if(isset($_POST["update"])){
                $x = Blog::cogeFila($_POST["idblogs"]); 
            }
    
        ?>
          <form method="post">
			  <div class="form-group">
				  <!--<label  for="apellidos">apellidos</label>-->
				  <input type="hidden" class="form-control" name="idblogs"  value="<?php 
                      if(isset($_POST["update"])){
                          echo $x->idblogs;
                      }
                    ?>">
              </div>      
			  <div class="form-group">
				  <label  for="autor">Autor</label>
				  <input type="text" class="form-control" name="autor" placeholder="autor" value="<?php 
                      if(isset($_POST["update"])){
                          
                          echo $x->autor;
                      }     
                  ?>"required> 
                                
			  </div>
              
			  <div class="form-group">
				  <label  for="titulo">Título</label>
				  <input type="text" class="form-control" name="titulo" placeholder="titulo" value="<?php 
                      if(isset($_POST["update"])){
                         
                         echo $x->titulo;
                      }     
                  ?>"required> 
                          
			  </div>
              <div class="form-group">
				 <label for="fecha">Fecha </label>
				  <input type="text" class="form-control" name="fecha" placeholder="fecha (yyyy-mm-dd)"
                  value="<?php echo date('Y-m-d'); ?>">
                  
			  </div>
              <div class="form-group">
				 <label for="categoria">Categoría</label>
				  <input name="categoria" class="form-control" placeholder="categoria" value="<?php 
                      if(isset($_POST["update"])){
                         
                          echo $x->categoria;
                      }
                  ?>"> 
                        
			  </div>
			  <div class="form-group">
				 <label for="contenido">Contenido</label>
				  <textarea name="contenido" class="form-control" rows="3" cols="5" id="comment"><?php 
                      if(isset($_POST["update"])){
                         
                         echo $x->contenido;
                      }
                     
                  ?>  
                </textarea>
			 </div>	  
						
            <?php if(!isset($_POST["update"])){
                ?>
                 <input type="submit" name="accion" class="btn btn-primary" value="Insertar">
            <?php }else{
                ?>
                 <input type="submit" name="modificar" class="btn btn-primary" value="update">
                
            <?php } ?>
              
            
                          
              
		  </form>
        </div>