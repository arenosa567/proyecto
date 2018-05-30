
#para utilizar el crontab hay que poner la ruta absoluta
of=/var/www/informesistema.html

function informe(){

        echo'<meta charset="utf-8">' > $of
        echo " <h1>Informe Sistema</h1>" >> $of
        echo "<h3>$(date +"%d-%m-%Y:%H-%M")</h3>">> $of
        echo "<h3>Disco Principal</h3>" >> $of
        disco1=($(df -h | grep sda1))
        echo "<h4> ${disco1[0]}: tamaño: ${disco1[1]} ocupado: ${disco1[2]} libre: ${disco1[3]} </h4>" >> $of 
        echo "<h3>Disco Secundario</h3>" >> $of
        disco2=($(df -h | grep sda6))
        echo "<h4>${disco2[0]}: tamaño: ${disco2[1]} ocupado: ${disco2[2]} libre: ${disco2[3]} </h4>" >> $of
        echo "<h3>IP</h3>" >> $of
        ip=$(sudo ifconfig wlan0 |grep "inet " |cut -d: -f2)
        echo "<h4>$ip </h4>" >> $of
        echo "<h3>RAM</h3>" >> $of
        ram=($(free | grep Mem:)) 
        echo "<h4> total ${ram[1]} usada ${ram[2]} libre ${ram[3]} </h4>" >> $of
        echo "<h3>MAC</h3>" >> $of
        mac=($(sudo ifconfig wlan0 | grep "Link"))
        echo "<h4> ${mac[4]} </h4>" >> $of
        echo "<h3>CPU</h3>" >> $of
        echo "<ul>">>$of
                cpu=($(sudo lscpu  | grep "Architecture:" ))
                        echo "<li> <strong>Architectura:</strong> ${cpu[1]} </li>" >> $of
                cpu1=($(sudo lscpu  | grep "CPU(s):" ))
                        echo "<li> <strong>totalcpu:</strong> ${cpu1[1]} </li>" >> $of
                cpu2=($(sudo lscpu  | grep "Vendor ID:" ))
                       echo "<li> <strong>Vendor ID:</strong> ${cpu2[2]}</li>" >> $of
                cpu3=($(sudo lscpu  | grep "Model name:" ))
                       echo "<li> <strong>Model name:</strong> ${cpu3[2]} ${cpu3[3]} ${cpu3[4]} ${cpu3[5]} ${cpu3[6]} ${cpu3[7]} </li>" >> $of      
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
informe
#la linea de crontab
#* * * * * /bin/bash /home/paco/Documentos/web/git/proyecto/uf1465/monitor.sh


