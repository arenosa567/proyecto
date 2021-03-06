
#documentos personales de los usuarios
function home(){
  rsync -av /home /home/paco/Documentos/backups/
}
#archivos y aplicaciones publicados en el servidor http
function servidorapache(){
    #apache
   rsync -av /var/www /home/paco/Documentos/backups/
}
function servidornode(){
    #node
    cd /home/paco/Documentos/node-v10.1.0-linux-x64
    rsync -av lib/ /usr/local/lib/
    rsync -av bin/ /usr/local/bin/
    rsync -av /usr/local/bin/ /home/paco/Documentos/backups/node/bin/
    rsync -av /usr/local/lib/node_modules /home/paco/Documentos/backups/node/lib/
} 

function basedatos(){
    
    mysqldump -u root -psecret wordpress >/home/paco/Documentos/backups/basedato/wordress.sql
  
    #clientes
   mysqldump -u root -psecret clientes >/home/paco/Documentos/backups/basedato/clientes.sql
} 
home
servidorapache  
servidornode 
basedatos 
#00 23 * * * /bin/bash /home/paco/Documentos/web/scriptbash/copiaseguridadlamp.sh


