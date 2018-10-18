pasos para incorporar mongodb a php
instalar el composer en la pagina https://getcomposer.org/download/
1º nos dirigimos carpeta del proyecto>composer require "mongodb/mongodb=^1.0.0"
2º directorio raiz(index.php) se pone:
    require_once "vendor/autoload.php" 