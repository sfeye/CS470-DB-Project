drop schema if exists library;
create schema library;

use library;

create table user
(
	userid int auto_increment not null unique,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    phone_number varchar(30) not null,
    email_address varchar(30) not null,
    primary key(userid),
    unique index (phone_number, email_address)
);


create table library
(
	libraryid int auto_increment NOT NULL unique,
    libraryname varchar(100) NOT NULL unique,
    street_address varchar(100) NOT NULL unique,
    city varchar(50) not null,
    state varchar(50) not null,
    zipcode varchar(20) not null,
    primary key (libraryid)
);

create table book
(
	isbn varchar(20) not null,
    author varchar(100),
    bookname varchar(100),
    shelf_number int not null,
    checkout_indicator int NOT NULL,
    checkout_userid int,
    libraryid int not null,
    primary key (isbn),
    foreign key (libraryid) references library(libraryid),
    foreign key (checkout_userid) references user(userid)
);

create table employee
(
	employeeid int auto_increment NOT NULL unique,
    userid int NOT NULL unique,
    permissions_level int NOT NULL,
    libraryid int not null,
    primary key (employeeid),
    foreign key (userid) references user(userid),
    foreign key (libraryid) references library(libraryid)
);

create table book_history
(
	historyid int auto_increment NOT NULL unique,
	isbn varchar(20) NOT NULL,
    checkout_userid int,
    checkout_date date,
    checkin_date date,
    checkout_indicator int NOT NULL,
    primary key (historyid),
	foreign key (checkout_userid) references user(userid),
    foreign key (isbn) references book(isbn)
);

insert into library
	(libraryname, street_address, city, state, zipcode)
values
	('Main Library', '123 Mean Street', 'Osawatomie', 'Kansas', '90210'),
    ('Other Library', '69 Nunya B Avenue', 'New York City', 'New York', '00001');
    
insert into book 
    (isbn, author, bookname, shelf_number, checkout_indicator, libraryid)
values 
    ('1234567890', "Mary Shelley", "Frankenstein", 1, 0, 1),
    ('1234567891', "Jane Austen", "Pride and Prejudice", 5, 0, 1),
    ('1234567892', "George Orwell", "Animal Farm", 3, 0, 1),
    ('1234567893', "Herman Melville", "Moby Dick", 3, 0, 1),
    ('1234567894', "Oscar Wilde", "Oliver Twist", 1, 0, 1),
    ('1234567895', "Kurt Vonnegut", "Slaughterhouse Five", 1, 0, 1),
    ('1234567896', "Robert Louis Stevenson", "Treasure Island", 1, 0, 1),
    ('1234567897', "Leo Tolstoy", "Anna Karenina", 1, 0, 1),
    ('1234567898', "Franz Kafka", "The Metamorphosis", 4, 0, 1),
    ('1234567899', "J. R. R. Tolkien", "Lord of the Rings", 1, 0, 1);

insert into user 
    (firstname, lastname, phone_number, email_address)
values 
    ("Sam", "F", "1111111111", "test@gmail.com"),
    ("Pam", "T", "2222222222", "test2@gmail.com");

insert into employee 
    (userid, permissions_level, libraryid)
values 
    (2, 0, 1);


