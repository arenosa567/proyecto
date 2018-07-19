#DROP DATABASE IF EXISTS blog;
CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE blog;
DROP TABLE IF EXISTS `blogs`; 

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor` varchar(45) COLLATE utf8_spanish_ci ,
   editorial varchar(60),	
  `titulo` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
   categoria varchar(40),	
  `contenido` text,
  `fecha` DATE,
   imagen text
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

alter table blogs add editorial varchar(60) after titulo;
alter table blogs add imgagen text; 