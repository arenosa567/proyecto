<?php
    session_start();
    $conexion = new mysqli('localhost','root','tupassword','tubasedatos');
    
	if($conexion->connect_error){
		die("Error conexión: ". $mysqli->connect_errno);
	}
	$conexion->set_charset("utf8");
		
	
    class Blog{
        
       function __construct(){
        
                //$this->idblogs = 0; //se inicializa el id con 0 pues es autocremental
                $this->idblogs=0 ;
                
                $this->autor =trim(ucwords($_POST["autor"]));
                $this->titulo =trim(ucwords($_POST["titulo"]));
                $this->editorial = trim(ucwords($_POST["editorial"]));    
                $this->fecha =trim($_POST["fecha"]);
                $this->categoria =trim(ucwords($_POST["categoria"]));
                $this->contenido =trim(ucwords($_POST["contenido"]));
                
                
           
        }
      function insertaFila(){
          
        // inserta el objeto actual como nueva fila en la BD
        global $conexion;
          
            $sql = $conexion->prepare('insert into  blogs(idblogs,autor,titulo,editorial,fecha,categoria,contenido) values (0, ?, ?, ?, ?, ?, ?) ');
         
            
            $sql->bind_param('ssssss',  $this->autor, 
              $this->titulo, $this->editorial, $this->fecha, 
              $this->categoria,$this->contenido);
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
        $sql = $conexion->prepare('update blogs SET autor = ?, titulo = ?, editorial = ?, fecha= ?, categoria = ?, contenido = ? WHERE idblogs = ? ');
        
        $sql->bind_param('ssssssi',  $this->autor, $this->titulo, $this->editorial, $this->fecha, $this->categoria, $this->contenido, $id);
             
        $sql->execute();
           
        $conexion->close(); 
       
        }
        static function cogeFila($id){
            global $conexion;
          
            $obj = new Blog(); 
           
            $sql = $conexion->prepare("select idblogs,autor, titulo, editorial, fecha, categoria, contenido from blogs where idblogs = ?");    
            $sql->bind_param('i', $id);
            $sql->execute();
            $sql->bind_result($obj->idblogs,  $obj->autor, $obj->titulo, $obj->editorial, $obj->fecha, $obj->categoria, $obj->contenido );
              
            $sql->fetch();
            $conexion->close(); 
            return $obj; 
           
        }
        
        static function pagination(){
            //creamos el objeto para que se ejecute el constructor y devuelva los campos
            
            global $conexion, $empieza, $por_pagina;
            //$pag = $conexion->query("SELECT * FROM  blogs LIMIT $empieza, $por_pagina"); 
            $sql =("SELECT idblogs,autor,titulo, editorial, fecha, categoria, contenido FROM  blogs LIMIT $empieza, $por_pagina");
            $pag = $conexion->query($sql);
            //$conexion->close();
            return $pag;
        
        }
        static function listaFilas(){
            global $conexion;
            $datos = $conexion->query("select idblogs,autor,titulo, editorial, fecha, categoria, contenido from blogs"); 
            //$conexion->close();
            return $datos;
            
        }
        
        static function find(){
            global $conexion;
            if(isset($_POST["or"])){
                $valor_logico = " or ";
            }else{
                $valor_logico = " and ";
            }

            $ssql =("select idblogs,autor,titulo, editorial, fecha, categoria, contenido from blogs where 1");
            if($valor_logico==" or ") $ssql .= " and ( 0 ";
                if(isset($_POST["autor"]) and !empty($_POST["autor"])){
                    $ssql .= " $valor_logico autor like '%{$_POST["autor"]}%' ";
                    //$poner_and = true;
                        }
                if(isset($_POST["titulo"]) and !empty($_POST["titulo"])){

                    $ssql .= " $valor_logico titulo like '%{$_POST["titulo"]}%' ";
                }
                if(isset($_POST["editorial"]) and !empty($_POST["editorial"])){

                    $ssql .= " $valor_logico editorial like '%{$_POST["editorial"]}%' ";
                }
                if(isset($_POST["categoria"]) and !empty($_POST["categoria"])){
                    $ssql .= " $valor_logico categoria like '%{$_POST["categoria"]}%' ";
                            //$poner_and = true;
                }
                if($valor_logico==" or ") $ssql .= ")";
               
				
                if(isset($_POST["orden"])){
					if($_POST["orden"] == "autor"){
						$ssql .= " order by autor desc";
					}elseif($_POST["orden"] == "titulo"){
						$ssql .= " order by titulo ";
                    }elseif($_POST["orden"] == "editorial"){
						$ssql .= " order by editorial "; 
                    }elseif($_POST["orden"] == "categoria"){
						$ssql .= " order by categoria";
					}elseif($_POST["orden"] == "fechamasvieja"){
						$ssql .= " order by fecha";
				    }elseif($_POST["orden"] == "fechamasnueva"){
						$ssql .= " order by fecha desc";
                    }
             $ssql = $conexion->query($ssql);
                //$conexion->close();    
               return $ssql;
            }
        }
    }
    
               
    
       