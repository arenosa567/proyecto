<?php

if(isset($_POST["boton"])){
$x = Blog::cogeFila($_POST["idblogs"]);
?>
<div class="container form">
     <form >
         
      <div class="form-group">
        <label for="autor">Autor:</label>
        <input type="text" class="form-control" id="autor" value="<?= $x->autor; ?>">
      </div>
      <div class="form-group">
        <label for="titulo">Título:</label>
        <input type="text" class="form-control" id="titulo" value="<?= $x->titulo; ?>">
      </div>
      <div class="form-group">
        <label for="editorial">Editorial:</label>
        <input type="text" class="form-control" id="editorial" value="<?= $x->editorial; ?>">
      </div>     
      <div class="form-group">
        <label for="fecha">Fecha:</label>
        <input type="text" class="form-control" id="fecha" value="<?= $x->fecha; ?>">
      </div>
      <div class="form-group">
        <label for="categoria">Categoría:</label>
        <input type="text" class="form-control" id="categoria" value="<?= $x->categoria; ?>">
      </div>
      <div class="form-group">
        <label for="contenido">Contenido:</label>
        <textarea name="contenido" class="form-control" rows="3" cols="5" id="comment"> 
        <?= $x->contenido; ?></textarea>
      </div> 
        <a href="index.php"><button type="button" class="btn btn-default">Index</button></a>
    </form>
</div>       
<?php } ?>

       


       