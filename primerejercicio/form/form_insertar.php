 <!-- Modal -->
  	
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog ">
    	
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title " id="headermodal">INSERTAR</h4>
          <div class="filtro">Se ha incorpardo filtros para evitar dos emails y github iguales</div>   
        </div>
        <div class="modal-body">
          <form method="post" action="insertar.php">
			  <div class="form-group">
				  <!--<label  for="apellidos">apellidos</label>-->
				  <input type="hidden" class="form-control" name="id"  value="">
			  </div>
			  <div class="form-group">
				  <!--<label  for="apellidos">apellidos</label>-->
				  <input type="text" class="form-control" name="apellidos" placeholder="apellidos" value="" required>
			  </div>
			  <div class="form-group">
				  <!--<label for="nombre">nombre</label>-->
				  <input type="text" class="form-control" name="nombre" placeholder="nombre" value="" required>
			  </div>	  
			  <div class="form-group">
				  <!--<label for="fecnac">fecnac</label>-->  	  
				  <input type="text" class="form-control" name="fecnac" placeholder="fecha nacimiento año-mes-dia" value="" required>
			  </div> 
		      <div class="form-group">
				  <!--<label for="email">email</label>-->		  
				  <input type="email" class="form-control" name="email" placeholder="email" value="" required>
			  </div> 
			  <div class="form-group">
				  <!--<label  for="github">github</label>-->	  
				  <input type="text" class="form-control" name="github" placeholder="urlgithub" value="">
			  </div> 
			<input type="submit" name="accion" class="btn btn-primary" value="guardar">
		  </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
