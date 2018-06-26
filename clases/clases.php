<?php
    session_start();
    $conexion = new mysqli('localhost','poner usuario','poner password','blog');
    //$c = new mysqli('192.168.105.179','root','a','cursos');
	if($conexion->connect_error){
		die("Error conexión: ". $mysqli->connect_errno);
	}
	$conexion->set_charset("utf8");
		
	
    class Blog{
        
       function __construct(){
        
                //$this->idblogs = 0; //se inicializa el id con 0 pues es autocremental
                $this->idblogs=0 ;
                $this->autor =$_POST["autor"];
                $this->titulo =$_POST["titulo"];
                $this->fecha =$_POST["fecha"];
                $this->categoria =$_POST["categoria"];
                $this->contenido =$_POST["contenido"];
        
           
        }
      function insertaFila(){
          
        // inserta el objeto actual como nueva fila en la BD
        global $conexion;
        $sql = $conexion->prepare('insert into blogs values (0, ?, ?, ?, ?, ?) ');
        $sql->bind_param('sssss', $this->autor, $this->titulo, $this->fecha, $this->categoria, 
                                  $this->contenido);
        $sql->execute();
        $conexion->close();
      }
          
      static function deleteFila($id){
            global $conexion;
          
           $sql = $conexion->prepare("delete from blogs where idblogs = ?");
           $sql->bind_param('i',$id);
           $sql->execute();
           $conexion->close();
          
       } 
       function actualizaFila($id){
          
       
        global $conexion;
        $sql = $conexion->prepare('update blogs SET autor = ?, titulo = ?, fecha= ?, categoria = ?, contenido = ? WHERE idblogs = ? ');
        
        $sql->bind_param('sssssi', $this->autor, $this->titulo, $this->fecha, $this->categoria, 
                             $this->contenido, $id);
        
       
        $sql->execute();
           
        $conexion->close(); 
       
    }
        static function cogeFila($id){
            global $conexion;
          
            $obj = new Blog(); 
           
            $sql = $conexion->prepare("select * from blogs where idblogs = ?");    
            $sql->bind_param('i', $id);
            $sql->execute();
            $sql->bind_result($obj->idblogs, $obj->autor, $obj->titulo, $obj->fecha, $obj->categoria, $obj->contenido );
              
            $sql->fetch();
            $conexion->close(); 
            return $obj; 
           
        }
        
         
        static function pagination(){
            //creamos el objeto para que se ejecute el constructor y devuelva los campos
            
            global $conexion, $empieza, $por_pagina;
            $pag = $conexion->query("SELECT * FROM  blogs LIMIT $empieza, $por_pagina");    
            return $pag;
        
        }
        static function listaFilas(){
            global $conexion;
            $datos = $conexion->query("select * from blogs");    
            return $datos;
        }
    }
    
       