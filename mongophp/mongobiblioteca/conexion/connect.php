<?php

    function connect($nombredbs,$nombrecolection){
        $connection = new MongoDB\Client("mongodb://localhost:27017");
        $nombre = $connection->selectCollection($nombredbs,$nombrecolection);
        return $nombre;
    }