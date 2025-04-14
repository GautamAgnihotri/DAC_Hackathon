DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS blogs;
DROP TABLE IF EXISTS categories;

CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT,full_name VARCHAR(50) not null, 
email VARCHAR(30) not null unique,
phone_no VARCHAR(10), 
password VARCHAR(20) not null,
created_time DateTime DEFAULT CURRENT_TIMESTAMP
);

Insert into users(full_name,email,phone_no,password) Values("gautam","gautam@gmail.com","7467537675","1234");

CREATE TABLE categories (id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
description VARCHAR(50)
);


INSERT INTO categories(title,description) Values("Nature","This contain all nature related blog");

CREATE TABLE blogs(id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) not null,
contents VARCHAR(100) not null,
created_time Datetime DEFAULT CURRENT_TIMESTAMP,
user_id INT,
category_id INT ,
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(category_id) REFERENCES categories(id)
);



Insert Into blogs(title,contents,user_id,category_id) Values("How to Nature Journal the Signs of Spring","As life continues to shift, many of us are seeking ways to reconnect with the world around us. ",1,1);
