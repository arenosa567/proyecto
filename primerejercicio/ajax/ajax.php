 	<script	src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
$(function(){
//transformar un enlace normal por un enlace ajax con el evento on hacer click	
	$(".boton").on("click", function(){
		//no se me cargue la pagina del enlace
		//event.preventDefault();
		//cargar el erchivo cargar.php en la capa de resultado con $this se refiere #enlacesajax
		var url = $(this).attr("href");
		//lo cargo en la capa de resultados
		$("#pagina").load(url);
		//no se me cargue la pagina del enlace y evito poner event.preventdefault
		return false;	
		
	});
		
});
</script>