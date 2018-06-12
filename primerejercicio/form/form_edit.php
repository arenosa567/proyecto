	<div class="container" id="formeditar">
        
		<form method="post" class="form-horizontal">
			   
			  <div class="form-group">
				  <label  for="apellidos">apellidos</label>
				  <input type="text" class="form-control" name="apellidos" value="<?php
					
						echo ucwords($apellidos);
					?>">
					 
			  </div>
			 <div class="form-group">
				  <label for="nombre">nombre</label>
				  <input type="text" class="form-control" name="nombre" value="<?php
					
						echo ucwords($nombre); 
					?>">
			  </div>	  
			  <div class="form-group">
				  <label for="fecnac">fecnac</label>  	  
				  <input type="text" class="form-control" name="fecnac" value="<?php echo $fecnac ?>">
			  </div> 
		      <div class="form-group">
				  <label for="email">email</label>		  
				  <input type="email" class="form-control" name="email" value="<?php echo $email ?>">
			  </div> 
			  <div class="form-group">
				  <label  for="github">github</label>	  
				  <input type="text" class="form-control" name="github" value="<?php
						
						echo $github;
						?>">
			  </div>
			  <input type="submit" class="btn btn-primary " value="<?php echo $value ?>" name="boton">	
		</form>
</div>