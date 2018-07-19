
<h3>Búsqueda avanzada </h3>

        <form class="busqueda"  method="post" >
          <div class="form-group">
              <label  for="autor">Autor</label><br>
               <input type="text" class="form-control"  name="autor" placeholder="autor"
                value="<?php  if(isset($_POST["buscar"])){
                            echo $_POST["autor"];
                        }
                ?>">
          </div>
           <div class="form-group">
               <label  for="titulo">Título</label><br>
               <input type="text" class="form-control"  name="titulo" placeholder="titulo"
                value="<?php  if(isset($_POST["buscar"])){
                            echo $_POST["titulo"];
                        }
                ?>">
          </div>
          <div class="form-group">
               <label  for="editorial">editorial</label><br>
               <input type="text" class="form-control"   name="editorial" placeholder="editorial"
                value="<?php  if(isset($_POST["buscar"])){
                            echo $_POST["editorial"];
                        }
                ?>">
          </div>
          <div class="form-group">
              <label  for="categoria">Categoría</label><br>
               <input type="text" class="form-control"  name="categoria" placeholder="categoria"
                      value="<?php  if(isset($_POST["buscar"])){
                            echo $_POST["categoria"];
                        }
                ?>">
        </div>
        
            <!--<input type="text"  name="contenido" placeholder="contenido">-->
        <div class="form-group">
            <label><input id="check" class="form-control"   type="checkbox" name="or" <?php echo !empty($_POST['or']) ? 'checked="checked"' : ''; ?>> Búsqueda por or </label>
                                
        </div>
        <div class="form-group">
            <label  for="orden">Ordenar</label><br>
            <select class="form-control" name="orden" >
                <!--cuando se selecciona una opcion quede seleccionado al hacer click en el boton submit-->
                    <option value="autor" 
                        
                        <?php if(isset($_POST["orden"]) && $_POST["orden"]=="autor"){ echo "selected";}?>>autor, desc </option>
                    <option value="titulo"
                        <?php if(isset($_POST["orden"]) && $_POST["orden"]=="titulo"){ echo "selected";}?>>Título, asc </option>
                    <option value="editorial"
                        <?php if(isset($_POST["orden"]) && $_POST["orden"]=="editorial"){ echo "selected";}?>>Editorial, asc </option>
                    <option value="categoria"
                         <?php if(isset($_POST["orden"]) && $_POST["orden"]=="categoria"){ echo "selected";}?>>Categoría, asc </option>
                    <option value="fechamasvieja"
                         <?php if(isset($_POST["orden"]) && $_POST["orden"]=="fechamasvieja"){ echo "selected";}?>>fecha más antigua, asc </option>
                    <option value="fechamasnueva"
                        <?php if(isset($_POST["orden"]) && $_POST["orden"]=="fechamasnueva"){ echo "selected";}?>>fecha más nueva, desc </option>
            </select>
        </div>  
        <input class="btn btn-primary" id="submit"  name="buscar" type="submit" value="buscar">
    </form>

 
  
 