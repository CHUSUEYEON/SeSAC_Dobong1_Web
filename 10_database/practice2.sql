CREATE TABLE A(
    id INT PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT NOT NULL
);

desc A;

INSERT INTO A VALUES(20115544, 'a', 34);
INSERT INTO A VALUES(20156677, 'b', 31);
INSERT INTO A VALUES(20227755, 'c', 25);
INSERT INTO A VALUES(20232223, 'd', 23);
INSERT INTO A VALUES(20201144, 'e', 23);
INSERT INTO A VALUES(20145145, 'f', 30);
INSERT INTO A VALUES(20180919, 'g', 26);

SELECT * FROM A;

DROP TABLE if EXISTS register;
CREATE TABLE register(
    신청id INT AUTO_INCREMENT PRIMARY KEY,
    id INT NOT NULL,
    subject VARCHAR(20) NOT NULL
);

desc register;

INSERT INTO register(id, subject) VALUES(20115544, '네트워크');
INSERT INTO register(id, subject) VALUES(20115544, '알고리즘');
INSERT INTO register(id, subject) VALUES(20156677, '알고리즘');
INSERT INTO register(id, subject) VALUES(20227755, '네트워크');
INSERT INTO register(id, subject) VALUES(20232223, 'C언어');
INSERT INTO register(id, subject) VALUES(20145145, '캡스톤');
INSERT INTO register(id, subject) VALUES(20180919, '캡스톤');
INSERT INTO register(id, subject) VALUES(20180919, 'C언어');
INSERT INTO register(id, subject) VALUES(20180919, '네트워크');
INSERT INTO register(id, subject) VALUES(2022091994, 'C언어');
INSERT INTO register(id, subject) VALUES(2022091994, '캡스톤');
INSERT INTO register(id, subject) VALUES(2022091994, '웹프레임워크');
INSERT INTO register(id, subject) VALUES(2018187566, 'C언어');
INSERT INTO register(id, subject) VALUES(2018187566, '네트워크');
INSERT INTO register(id, subject) VALUES(2018187566, '캡스톤');

SELECT * FROM register;

SELECT *
FROM A, register as r
WHERE A.id = r.id;

SELECT *
FROM A LEFT OUTER JOIN register as r
ON A.id = r.id;

SELECT *
FROM A RIGHT OUTER JOIN register as r
ON A.id = r.id;

SELECT *
FROM A NATURAL JOIN register;
