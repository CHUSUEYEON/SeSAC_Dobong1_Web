-- DB 목록 확인

SHOW DATABASES;

-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;

-- CREATE: DATABASE 생성
CREATE DATABASE sesac DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
/*
dobong 이라는 데이터 베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8mb4_unicode_ci를 사용!
utf8mb4는 uft8보다 더 많은 문자 지원(일부 이모지 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4, 이모지를 저장하지 않아도 된다면 utf8
*/
CREATE DATABASE dobong CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- USE : 이 데이터 베이스를 사용하겠다!
USE sesac;

-- ------------------ 테이블(TABLE) 관련 명령어
-- 1. 테이블 생성
/*
CREATE TABLE products(
    속성1 값형식 제약조건,
    속성2 값형식 제약조건,
)
*/

-- 제약 조건
-- NOT NULL : NULL 허용 x
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY : 기본키(중복 허용x, NULL값 허용 x) - 한 테이블에 한 개만 가능
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 x, NULL 허용(한 테이블에 여러개 가능)
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조 확인)
DESC products;

-- 테이블 삭제
DROP table products; -- 테이블 자체가 삭제
TRUNCATE TABLE products; -- 테이블 내부에 있는 데이터만 삭제 >> show tables 하면 보임

-- 테이블 변경(수정) ALTER
-- 1. 컬럼 추가
ALTER TABLE products ADD new_column VARCHAR(20);

-- 2. 특정 컬럼 수정( varchar 를 int로 수정)
ALTER TABLE products MODIFY new_column INT;

-- 3. 특정 컬럼 삭제
ALTER TABLE products DROP new_column;

-- -------------------- DML
-- Data Maniqulation Language (데이터 조작어)
-- user Table(id: INT not null, auto_increment PRIMARY, 
-- name: varchar(10) not null,
-- age: int not null,
-- address: varchar(100)

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW TABLES;
DESC user;

-- CREATE(데이터 추가) >> INSERT INTO
-- INSERT INTO 테이블 이름 (컬럼1, 컬럼2, ...) VALUES(갑1, 값2, ...)

INSERT INTO user(name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('이한이', 30, '서울특별시 강남구');
INSERT INTO user(name, age, address) VALUES('이지은', 22, '대구광역시 동구');
INSERT INTO user(name, age, address) VALUES('윤세희', 25, '부산광역시 관악구');
INSERT INTO user(name, age, address) VALUES('박수진', 19, '서울특별시 노원구');
INSERT INTO user(name, age, address) VALUES('박찬희', 23, '서울특별시 강서구');
INSERT INTO user(name, age, address) VALUES('이지수', 32, '부산광역시 동구');
INSERT INTO user(name, age, address) VALUES('최솔희', 37, '강원도 강릉시');
INSERT INTO user(name, age, address) VALUES('한소희', 26, '충청남도 공주구');
INSERT INTO user(name, age, address) VALUES('권희수', 4, '강원도 속초시');
INSERT INTO user(name, age, address) VALUES('김민지', 22, '서울특별시 중구');

-- 테이블 전체 조회
SELECT * FROM user;

-- 2. 데이터 수정
-- UPDATE 테이블명 SET 데이터 어떻게 수정할건지 WHERE 어떤 데이터를;
UPDATE user SET name='김민지' WHERE id = 1;

-- 3. 데이터 삭제
-- DELETE FROM 테이블명 WHERE 삭제 조건;
DELETE FROM user WHERE id=1;

-- DELETE FROM user; 전체 데이터 삭제

TRUNCATE TABLE user;

-- 이씨인 사람 지우기 >> 전체 데이터 조회
DELETE FROM user WHERE name LIKE '이%';
SELECT * FROM user;


-- 4. 데이터 조회(read) SELECT ~ FROM ~
SELECT * FROM user; -- user 테이블에서 전체 컬럼 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT name, age FROM user; -- 이름과 나이 컬럼 조회

-- WHERE 절로 조건 적용
SELECT * FROM user WHERE age >= 25;

SELECT name FROM user WHERE id = 3;

SELECT id, age FROM user WHERE name = '이지은';

-- ORDER BY : 데이터 정렬
-- Desc : 내림차순
-- asc : 오름차순(default)
SELECT * FROM user ORDER BY age DESC;

SELECT * FROM user WHERE id > 6 ORDER BY age;

-- LIKE : 문자열 패던 조회(WHERE와 함께 쓰임
-- '서울로 시작하는 주소 찾기'
SELECT * FROM user WHERE address LIKE '서울%';

-- 이름의 마지막 글자가 '희'인 사람
SELECT * FROM user WHERE name LIKE '__희';

-- 주소에 광역시가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역%';

-- 이름에 희가 들어가는 사람(이름 컬럼만 조회)
SELECT name from user WHERE name LIKE '%희%';

-- Limit : 데이터의 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;

-- BETWWEN a AND B : A와 B의 사이값 조회(A, B 포함)
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

-- IN(리스트)) : 리시트의 요소와 일치하면 참
SELECT * FROM user WHERE age IN(20,21,22,23)

-- Is Null / is not NULL
INSERT INTO user (name, age) VALUES('서현승', 28);
SELECT * FROM user;
SELECT * FROM user WHERE address is null;
SELECT * FROM user WHERE address is NOT null;

-- 논리 연산자 : AND, OR, NOT
-- 주소가 null이 아니면서 age가 25보다 큰 전체 속성 검색

SELECT * FROM user WHERE address is not null AND age >= 25;
SELECT * FROM user WHERE address is not null OR age >= 25;

-- 이씨이면서 나이가 22살인 사람
SELECT name FROM user WHERE name LIKE '이%' AND age = 22;

-- DISTINCT (중복 튜플 제거)
SELECT age FROM user;
SELECT DISTINCT age FROM user;

