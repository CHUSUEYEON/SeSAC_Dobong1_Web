-- Active: 1712546518235@@sesac-rds.cd2ogi4g25uy.ap-northeast-2.rds.amazonaws.com@3306@information_schema
SHOW DATABASES;

CREATE DATABASE rds DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE rds;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

SHOW TABLES;

DESC products;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SELECT now();

SELECT * FROM Users;