CREATE DATABASE IF NOT EXISTS SGA_DB;

USE SGA_DB;

CREATE TABLE Usuarios (
    userName VARCHAR(11) NOT NULL,
    names VARCHAR(45) DEFAULT NULL,
    lastNames VARCHAR(45) DEFAULT NULL,
    uPassword VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (userName)
);

INSERT INTO Usuarios VALUES ("JosueMTZ", "JOSUE AARON", "MARTINEZ MARTINEZ", "JO122ZZ");

CREATE TABLE Citas (
    id  int (11) AUTO_INCREMENT,
    fecha VARCHAR(20) NOT NULL,
    hora VARCHAR(45) DEFAULT NULL,
    duracion VARCHAR(45) DEFAULT NULL,
    paciente VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
);



INSERT INTO Citas VALUES ("05/10/2023", "10:00", "2 horas" , "Josue Martinez");

SELECT *  FROM Citas WHERE fecha = "05/10/2023" and hora = "10:00";