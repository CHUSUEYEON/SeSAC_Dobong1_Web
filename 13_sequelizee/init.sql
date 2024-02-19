-- Active: 1707101282439@@127.0.0.1@3306@sesac
show tables;
CREATE TABLE visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    comment MEDIUMTEXT
);

DROP TABLE visitor;

DESC visitor;

INSERT INTO visitor(name, comment) VALUES('sue', 'hi');
INSERT INTO visitor(name, comment) VALUES('crystal', 'hello');
INSERT INTO visitor VALUES(null, 'mimi', 'yeah');

SELECT * FROM visitor;

##############[DCL]###############

-- 새로운 User 만들기1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면!

-- 새로운 User 만들기2
-- CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
# --> 모든 DB에 접근 가능하도록, sesac 계정에 DB 접근 권한 부여

FLUSH PRIVILEGES;
# --> 현재 사용중인 Sql 캐시 제거 과정
# 캐시란 : 데이터베이스를 매번 새로운 것을 불러오는 것이 아닌 처음에 저장한 정보(를 가져옴)


