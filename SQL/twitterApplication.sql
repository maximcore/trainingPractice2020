CREATE DATABASE TwitterDB;
USE TwitterDB;
CREATE TABLE USER
(
USER_ID INT PRIMARY KEY,
NAME VARCHAR(40)
);
CREATE TABLE POST
(
POST_ID INT PRIMARY KEY,
USER_ID INT,
DESCRIPTION VARCHAR(120),
CREATED_AT DATE,
PHOTO_LINK VARCHAR(60),
LIKES INT,
FOREIGN KEY (USER_ID) REFERENCES USER (USER_ID)
);

INSERT USER(USER_ID,NAME) 
VALUES 
(1337,'Maxim'), (1336,'Nikita'), (1400,'Yura'), (1450,'Vova'), (1120,'Polina'),
(1222,'Alena'), (1660,'Anya'), (1063,'Katya'), (1010,'Vadim'), (1001,'Sasha');

INSERT POST(POST_ID,USER_ID,DESCRIPTION,CREATED_AT,PHOTO_LINK,LIKES)
VALUES
(1,1337,'Cute dog','2019-11-02','www.photoofcutedog.com',1000),
(2,1336,'Ball','2020-02-01','www.photoofball.com',24),
(8,1120,'Football','2020-12-04','www.footballphoto.com',2222),
(3,1337,'Cute cat','2020-01-05','www.photoofcutedog.com',321),
(10,1222,'Beautiful flower','2020-04-04','www.flowerphoto.com',15),
(5,1337,'University','2020-05-07','www.university.com',1020),
(7,1001,'Anime','2020-06-07','www.photoofcutedog.com',0),
(9,1337,'Cute dog','2019-06-05','www.photoofcutedog.com',1337),
(4,1063,'Music','2018-02-01','www.musicphoto.com',500),
(6,1400,'Cute dogs','2007-03-29','www.photoofcutedog.com',17700);