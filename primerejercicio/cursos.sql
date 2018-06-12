DROP database cursos;
CREATE DATABASE IF NOT EXISTS cursos DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE cursos;

CREATE TABLE IF NOT EXISTS alumnos (
  id INT NOT NULL AUTO_INCREMENT,
  apellidos VARCHAR(150) NOT NULL,
  nombre VARCHAR(150) NOT NULL,
  fecnac date NOT NULL,
  email VARCHAR(250),
  github VARCHAR(250),	
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO alumnos VALUES(0,'Muñoz','Domingo','1955-06-16','munoz@m.es',"https://github.com/munoz567")
,(0,'Pérez','Luis','1967-12-23','perez@p.es',"https://github.com/perez345"),(0,'Gómez','Fernando','2000-07-10','gomez@g.es',"https://github.com/gomez345");