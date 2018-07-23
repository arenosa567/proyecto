#DROP DATABASE IF EXISTS blog;
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE blog;
DROP TABLE IF EXISTS `blogs`; 



CREATE TABLE IF NOT EXISTS `blogs` (
  
  `idblogs` int(11) NOT NULL AUTO_INCREMENT,

  `autor` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,

  `titulo` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,

  `editorial` varchar(60) COLLATE utf8_spanish_ci DEFAULT NULL,

  `fecha` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,

  `categoria` varchar(40) COLLATE utf8_spanish_ci DEFAULT NULL,

  `contenido` text COLLATE utf8_spanish_ci,

  `imagen` text COLLATE utf8_spanish_ci,

   PRIMARY KEY(idblogs)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;



alter table blogs add editorial varchar(60) after titulo;
alter table blogs add imgagen text; 