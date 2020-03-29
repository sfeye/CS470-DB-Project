create schema library;

use library;

create table user
(
	userid int auto_increment not null,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    phone_number varchar(30) not null,
    email_address varchar(30) not null,
    primary key(userid),
    unique index (phone_number, email_address)
);

create table book
(
	isbn int not null,
    author varchar(100),
    bookname varchar(100),
    shelf_number int not null,
    checkout_userid int,
    checkout_date date,
    checkin_date date,
    checkout_indicator int NOT NULL,
    primary key (isbn),
    foreign key (checkout_userid) references user(userid)
);

create table employee
(
	employeeid int auto_increment NOT NULL,
    userid int NOT NULL,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    permissions_level int NOT NULL,
    phone_number varchar(30) NOT NULL,
    email_address varchar(100) NOT NULL,
    primary key (employeeid),
    foreign key (userid) references user(userid)
);

create table book_history
(
	isbn int NOT NULL,
	author varchar(100),
    bookname varchar(100),
    shelf_number int not null,
    checkout_userid int,
    checkout_date date,
    checkin_date date,
	foreign key (checkout_userid) references user(userid)
)

insert into book 
    (isbn, author, bookname, shelf_number, checkout_indicator)
values 
    (1234567890, "Mary Shelley", "Frankenstein", 1, 0);
