
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
}
informe
#la linea de crontab
#* * * * * /bin/bash /home/paco/Documentos/web/git/proyecto/uf1465/monitor.sh


