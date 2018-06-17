<?php
session_start();
include("ajax/ajax.php");
function cabecera($title){
?>	
<!doctype html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">	
		<link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
		<link rel="stylesheet" href="css/responsive.css">
		<link rel="stylesheet" href="css/estilo.css">
		<script type="text/javascript" src="js/respond.js"></script>	
	<title><?php echo $title; ?></title>
	</head>
<?php	
}

function piepagina($texto = ""){
	echo $texto;
	?>
	
	</body>
</html>
<script type="text/javascript" src="js/jquery-2.2.2.min.js"></script> 
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/smoothscroll.js"></script>
		<script type="text/javascript" src="js/confirmardelete.js"></script>
<?php
}

function conexion(){
		$connect = new mysqli('localhost','root','redes1234','cursos');
	if($connect->connect_error){
		die("Connection failed: ". $mysqli->connect_errno);
	}
	$connect->set_charset("utf8");
		return $connect;
	}

function cerrar_conexion($c){
		$c->close();
	}

function ruta($path){
	echo $path;
		
}

function logout(){
	
	session_destroy();
	ruta("../../../index.php");
	
}


//si tiene la variable formulario(index.php?formulario=alumnos) devuelva el formulario alumnos;
//isset($_GET["formulario"]) && $_GET["formulario"]=='alumnos'
function listado_alumnos($tabla, $columna){
	$connect=conexion();
	$sql ="SELECT * FROM $tabla ORDER BY $columna";
	if(!$resultado = $connect->query($sql)){
		
		echo"error";
		echo "Error: La ejecución de la consulta falló debido a: \n";
    	echo "Query: " . $sql . "\n";
    	echo "Errno: " . $connect->errno . "\n";
    	echo "Error: " . $connect->error . "\n";
    	exit();
}
	if($resultado ->num_rows === 0){
		echo "no existe ningun registro";
		exit();
	}
	//echo var_dump($resultado);
	
	?>
	<div class="table-responsive"> 
	<table class="table">
		<thead class="thead-dark">
			<tr>
				<th scope="col">Apellidos</th>
				<th scope="col">Nombre</th>
				<th scope="col">FecNac</th>
				<th scope="col">Email</th>
				<th scope="col">GitHub</th>
			</th>
			</tr>
		</thead>
		<tbody>
			
	<?php
	//while ($fila = $resultado->fetch_assoc()) {
	foreach($resultado as $fila){
	?>
		
			<tr>
				<td><?php echo ucwords($fila["apellidos"]) ?></td>
				<td><?php echo ucwords($fila["nombre"]) ?></td>	
				<td><?php echo $fila["fecnac"] ?></td>
				<td><?php echo $fila["email"] ?></td>
				<td><?php echo $fila["github"] ?></td>
				<td><a class="accion" href="edit.php?id=<?php echo $fila["id"]; ?>"><span>M</span></a>
				<td><a class="accion" onClick="return confirmarborrar();" href="delete.php?id=<?php echo $fila["id"]; ?>"><span>D</span></a>
				<?php if(!empty($fila["github"])){
				?>
					<td><a class="accion" href="<?php echo $fila["github"];?>"><span>git</span></a></td>
				<?php } ?>
				
			
			</tr>		
				
		
	<?php } 
	$resultado->free();
	//cerrar conexion
	cerrar_conexion($connect);
	
	
	?>
				
		</tbody>
</table>
</div>
<?php
}

function menu_principal(){
	?>
	<a href="index.php?listado=alumnos" class="btn btn-primary">listadoalumnos</a>';
	<?php
}

function form_insertar(){
	include "form/form_insertar.php";
	
}
//comprobar no exista coincidencia en la bd el campo github
function validacionurl($tabla){
	
		$connect = conexion();
		//recogemos la variable github del form_editar
			if(isset($_SESSION['url'])){
				$a= $_SESSION['url'];
				
		}
			
			$sql = $connect->prepare("select github from $tabla where github = ? ");
			
			/*i	Integer
			d	double
			s	string
			b	blob*/
		//iss primero entero segundo string tercero string cuando halla tres ?
		 $sql->bind_param('s', $_POST['github']);
		
		 $sql->execute();
		// Vinculamos variables a columnas
		$sql->bind_result($github);
		
		$row =$sql->fetch();
			$b = $_POST["github"];
				       		
				//solo cuando cambiamos la url y no este vacio el campo			
				if($row and $a !=$b and !empty($b)){ //devuelve un booleano 
					ruta(header("Location:index.php"));
					
					$_SESSION["alumno"] = "la url ya existe ";
					
					exit();
				}
		
		cerrar_conexion($connect);
}
//comprobar no exista coincidencia en la bd el campo email
function validacionemail($tabla){
	
		$connect = conexion();
			//recogemos la variable email del form_editar
			if(isset($_SESSION['email'])){
				$a= $_SESSION['email'];
				
		}
			
			$sql = $connect->prepare("select email from $tabla where email = ? ");
			
			/*i	Integer
			d	double
			s	string
			b	blob*/
		//iss primero entero segundo string tercero string cuando halla tres ?
		 $sql->bind_param('s', $_POST['email']);
		
		 $sql->execute();
		// Vinculamos variables a columnas
		$sql->bind_result($email);
		
		$row =$sql->fetch();
			$b = $_POST["email"];
				       		
				//solo cuando cambiamos el email			
				if($row and $a !=$b){ //devuelve un booleano 
					ruta(header("Location:index.php"));
					
					$_SESSION["alumno"] = "el email ya existe ";
					
					exit();
				}
		
		cerrar_conexion($connect);
}

function insertar($tabla){
	if($_POST){
		$connect = conexion();
		validacionemail($tabla);
		validacionurl($tabla);
        $fecha = $_POST['fecnac'];
         $fec = date("Y-m-d");
        
        
		$insert =$connect->prepare("INSERT INTO $tabla VALUES (?,?,?,?,?,?)");
        if(!empty($fecha)){
		    $insert->bind_param('isssss', $_POST['id'], $_POST['apellidos'], $_POST['nombre'],$fecha,   $_POST['email'], $_POST['github']);
        }else{
            $insert->bind_param('isssss', $_POST['id'], $_POST['apellidos'], $_POST['nombre'],$fec, $_POST['email'], $_POST['github']);
        }
		$insert->execute();
		$_SESSION["alumno"] = 'alumno '. $_POST["id"] .' Agregado';
		ruta(header("Location: index.php"));
		cerrar_conexion($insert); //se cierra la sentencia
		cerrar_conexion($connect); //se cierra la conexion
	}
		
		
}

function update($tabla){
	
	if(isset($_GET["id"]) and isset($_POST["boton"])){
		$connect = conexion();
		validacionemail($tabla);
		validacionurl($tabla);
        $fecha = $_POST['fecnac'];
        $fec = date("Y-m-d");
		//$modificar =$connect->prepare("UPDATE $tabla SET apellidos= ?,nombre= ?,fecnac= ?,email= ?,github= ? WHERE id= ?");
		$sql =("UPDATE $tabla SET apellidos= ?,nombre= ?,fecnac= ?,email= ?,github= ? WHERE id= ?");
		$modificar = $connect->prepare($sql);
        if(!empty($fecha)){
		  $modificar->bind_param('sssssi', $_POST['apellidos'], $_POST['nombre'], $fecha,   $_POST['email'], $_POST['github'], $_GET['id']);
        }else{
          $modificar->bind_param('sssssi', $_POST['apellidos'], $_POST['nombre'], $fec, $_POST['email'],  $_POST['github'], $_GET['id']);
        }
		$modificar->execute();
		$_SESSION["alumno"] = 'alumno '. $_GET["id"] . ' '.$_POST['nombre']. ' '.$_POST['apellidos'].' actualizado';
		ruta(header("Location: index.php?listado=alumnos"));
		cerrar_conexion($modificar); //se cierra la sentencia
		cerrar_conexion($connect); //se cierra la conexion.
	}
	
		$value="Update";
		form_editar($value,$tabla);
	
}

function delete($tabla){
		
	if(isset($_GET["id"])){
		$connect = conexion();
		$delet =$connect->prepare("DELETE FROM $tabla WHERE id= ?");
		$delet->bind_param('i',  $_GET['id']);
		$delet->execute();
		$_SESSION["alumno"] = 'alumno '. $_GET["id"] .' Eliminado';
		
		cerrar_conexion($delet); // se cierra la sentencia
		cerrar_conexion($connect); //se cierra la conexion
	}
		
		
}

function form_editar($value,$tabla){
	$connect = conexion();
	if(isset($_GET["id"]) && !isset($_POST["boton"])){
		
	$edit = $connect->prepare("select * from $tabla where id = ?");
		//i es entero
		//iss primero entero segundo string tercero string cuando halla tres ?
		$edit->bind_param('i', $_GET['id']);
		
		$edit->execute();
		$edit->bind_result($id, $apellidos,$nombre,$fecnac,$email,$github);
		$edit->fetch();
		cerrar_conexion($edit); //se cierra la sentencia
		
    }
		include("form/form_edit.php")
	?>
			
	<?php
		
		cerrar_conexion($connect); //se cierra la conexion
		//se redirige a la funcion validacionemail() y validacionurl()
		
		$_SESSION['email'] = $email;//no realizamos cambios en el campo email
		
		
		$_SESSION["url"] = $github; //no realizamos cambios en el campo github
		
		
		
}
	
	$connect = conexion(); //llamamos la funcion conexion 