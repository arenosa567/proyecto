 	<script	src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
$(function(){
//transformar un enlace normal por un enlace ajax con el evento on hacer click	
	$(".boton").on("click", function(){
		
		var url = $(this).attr("href");
		//lo cargo en la capa de pagina
		$("#pagina").load(url);
		//no se me cargue la pagina del enlace y evito poner event.preventdefault
		return false;	
		
	});
		
});
    
$(function(){
//transformar un enlace normal por un enlace ajax con el evento on hacer click	
	$(".boton1").on("click", function(){
		
		var url = $(this).attr("href");
		//lo cargo en la capa de pagina
		$("#pagina1").load(url);
		//no se me cargue la pagina del enlace y evito poner event.preventdefault
		return false;
    });
});
</script>