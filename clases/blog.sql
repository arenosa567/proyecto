DROP DATABASE IF EXISTS blog;
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE blog;
#DROP TABLE IF EXISTS `blogs`; 

CREATE TABLE `blogs` (
  `idblogs` int(11) NOT NULL AUTO_INCREMENT,
  `autor` varchar(45) COLLATE utf8_spanish_ci ,
  `titulo` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
   fecha varchar(10),
   categoria varchar(40),	
  `contenido` LONGTEXT,
   PRIMARY KEY (`idblogs`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
  
