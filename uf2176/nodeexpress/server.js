class App{
   //esta clase maneja la aplicación 
    
}

class Articulo{
    //esta clase maneja la tabla blogs
}

//el navegador admita otra direccion ip distinta a localhost
//header('Access-Control-Allow-Origin: *');
//script hola mundo en http://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const mysql = require('mysql'); //se carga la libreria mysql
const bodyParser=require('body-parser');
//la conexion a la base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tupassword',
    database: 'tubasededatos'
});
conn.connect();
app.use(express.static('htdocs') ); //lo que ponga en public lo considera raiz
           
app.use(bodyParser.json());
//localhost:3000/describe/varible o nombre tabla
app.get('/describe/:tabla', describe);//:pasamos una variable
app.get('/server', (req, res) =>{res.sendFile(__dirname + "/server.js")});
app.get('/select/:tabla', select);//:pasamos una variable
app.post('/grabar', insertupdate);
app.post('/borrar', borrar);

app.listen(3000);



function insertupdate(req, res){
    res.header('Access-control-allow-origin', "*");
    if(req.body.idblogs > 0 && req.body.titulo !=""){
   
        conn.query("update blogs set titulo=?, autor=?, editorial=?, categoria=?, contenido=?, fecha=?, imagen=? where idblogs = ?", [req.body.titulo, req.body.autor,  req.body.editorial , req.body.categoria, req.body.contenido, req.body.fecha, req.body.imagen, req.body.idblogs] ,function(error, results){
            if(error) {res.send(error)}
            else {res.send(results)}
        });
   }else {
       //para evitar insertar un campo vacio
       if(req.body.titulo !=""){
            conn.query("INSERT INTO blogs  values(0,?,?,?,?,?,?,?) ", [req.body.titulo,         req.body.autor,  req.body.editorial , req.body.categoria, req.body.contenido, req.body.fecha, 
            req.body.imagen, ] ,function(error, results){
            if(error) {res.send(error)}
            else {res.send(results)}
        });
      }else{
          alert("el campo titulo no debe estar vacio");
      }
    }
}



function borrar(req, res){
    res.header('Access-control-allow-origin', "*");
    conn.query("DELETE FROM blogs WHERE idblogs=?",[req.body.idblogs],function(error, results){
        if(error) {res.send(error)}
        else {res.send(results)}
    });
}

function select(req, res){
    res.header('Access-control-allow-origin', "*");
    //?? cuando es nombre de tabla
    //? cuando es nombre de un valor de un campo
    conn.query('select * from ??', [req.params.tabla], function(error, results){
        res.send(results);
    });
}


function describe(x,y){
    //para que se pueda conectar otro equipo a mi maquina y el navegador lo acepte
    y.header('Access-control-allow-origin', "*"); 
    //?? cuando es nombre de tabla
    //? cuando es nombre de un valor de un campo
   conn.query('describe ??',
   [x.params.tabla],
   function(error, results){ y.send(results) });    
   
}




//app.listen(3000, () => console.log('Example app listening on port 3000!'))
//app.listen(3000, n=>{});