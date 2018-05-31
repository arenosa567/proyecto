
#para utilizar el crontab hay que poner la ruta absoluta
of=/var/www/informesistema.html
        echo'<meta charset="utf-8">' > $of
        echo " <h1>Informe Sistema</h1>" >> $of
function fechahora(){
        echo "<h3>$(date +"%d-%m-%Y:%H-%M")</h3>">> $of
}

function informered(){
        echo "<h3>IP</h3>" >> $of
        ip=$(sudo ifconfig wlan0 |grep "inet " |cut -d: -f2)
        echo "<h4>$ip </h4>" >> $of
        echo "<h3>MAC</h3>" >> $of
        mac=($(sudo ifconfig wlan0 | grep "Link"))
        echo "<h4> ${mac[4]} </h4>" >> $of
       
}
function disco(){
        echo "<h3>Disco Principal</h3>" >> $of
                disco1=($(df -h | grep sda1))
                echo "<h4> ${disco1[0]}: tamaño: ${disco1[1]} ocupado: ${disco1[2]} libre: ${disco1[3]} </h4>" >> $of 
        echo "<h3>Disco Secundario</h3>" >> $of
                disco2=($(df -h | grep sda6))
                echo "<h4>${disco2[0]}: tamaño: ${disco2[1]} ocupado: ${disco2[2]} libre: ${disco2[3]} </h4>" >> $of

}
function memoriaram(){
        echo "<h3>RAM</h3>" >> $of
                ram=($(free | grep Mem:)) 
                echo "<h4> total ${ram[1]} usada ${ram[2]} libre ${ram[3]} </h4>" >> $of
}
function cpu(){
        echo "<h3>CPU</h3>" >> $of
        echo "<ul>">>$of
                cpu=($(sudo lscpu  | grep "Architecture:" ))
                echo "<li> <strong>Architectura:</strong> ${cpu[1]} </li>" >> $of
                cpu1=($(sudo lscpu  | grep "CPU(s):" ))
                echo "<li> <strong>totalcpu:</strong> ${cpu1[1]} </li>" >> $of
                cpu2=($(sudo lscpu  | grep "Vendor ID:" ))
                echo "<li> <strong>Vendor ID:</strong> ${cpu2[2]}</li>" >> $of
                cpu3=($(sudo lscpu  | grep "Model name:" ))
                
                echo "<li><strong> Modelo</strong>" >> $of
                for t in "${cpu3[@]}"
                
                 do
    
                         echo "<span>$t </span>" >> $of 
                done
                echo "</li>" >> $of
                
                #echo "<li> <strong>Model name:</strong> ${cpu3[2]} ${cpu3[3]} ${cpu3[4]} ${cpu3[5]} ${cpu3[6]} ${cpu3[7]} </li>" >> $of      
                cpu4=($(sudo lscpu  | grep "L1i cache:" ))
                echo "<li> <strong>L1 cache:</strong> ${cpu4[2]} </li>" >> $of
                cpu5=($(sudo lscpu  | grep "L2 cache:" ))
                echo "<li> <strong>L2 cache:</strong> ${cpu5[2]} </li>" >> $of
                cpu6=($(sudo lscpu  | grep "L3 cache:" ))
                echo "<li> <strong>L3 cache:</strong> ${cpu6[2]} </li>" >> $of
                cpu7=($(sudo lscpu  | grep "CPU MHz:" ))
                echo "<li> <strong>CPU MHz:</strong> ${cpu7[2]} </li>" >> $of
         echo "</ul>" >> $of
}
function serviciosactivos(){
        echo "<h3>Servicios Activos</h3>" >> $of
        sac=$(sudo service --status-all | grep +)
        
        echo "<pre> $sac </pre>" >> $of
        
}
function Usuarios(){
       echo "<h3>Numero de usuarios</h3>" >> $of 
       numusu=$( who | wc -l)
       echo "<h4> $numusu </h4>" >> $of 
       echo "<h3>usuarios</h3>" >> $of 
       usu=$( who )
       echo "<pre>$usu</pre>" >> $of
     
}
function Hardware(){
     echo "<h3>PCI</h3>" >> $of 
     pci=$(lspci)
     echo "<pre> $pci </pre>" >> $of
     echo "<h3>USB</h3>" >> $of 
     usb=$(lsusb)
     echo "<pre> $usb </pre>"  >> $of 
     echo "<h3>Motherboard</h3>" >> $of 
     placabase=$(sudo dmidecode | grep "^System Information" -A8)
     echo "<pre> $placabase </pre>"  >> $of
     echo "<h3>PCIVGA</h3>" >> $of 
     vga=$(lspci | grep VGA)
     echo "<h4> $vga </h4>" >> $of 
          
}
function openport(){
    echo "<h3>OpenPort</h3>" >> $of 
    openp=$(nmap -p 0-65535 localhost | grep open)
    echo "<pre> $openp </pre>" >> $of   
}
fechahora
informered
disco
memoriaram
cpu
serviciosactivos
Usuarios
Hardware
openport
#la linea de crontab
#* * * * * /bin/bash /home/paco/Documentos/web/git/proyecto/uf1465/monitor.sh
# mi direccion ip 192.168.105.133


