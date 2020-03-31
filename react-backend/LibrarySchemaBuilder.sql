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
    (1234567890, "Mary Shelley", "Frankenstein", 1, 0),
    (1234567891, "Jane Austen", "Pride and Prejudice", 5, 0),
    (1234567892, "George Orwell", "Animal Farm", 3, 0),
    (1234567893, "Herman Melville", "Moby Dick", 3, 0),
    (1234567894, "Oscar Wilde", "Oliver Twist", 1, 0),
    (1234567895, "Kurt Vonnegut", "Slaughterhouse Five", 1, 0),
    (1234567896, "Robert Louis Stevenson", "Treasure Island", 1, 0),
    (1234567897, "Leo Tolstoy", "Anna Karenina", 1, 0),
    (1234567898, "Franz Kafka", "The Metamorphosis", 4, 0),
    (1234567899, "J. R. R. Tolkien", "Lord of the Rings", 1, 0);

insert into user 
    (firstname, lastname, phone_number, email_address)
values 
    ("Sam", "F", "1111111111", "test@gmail.com"),
    ("Pam", "T", "2222222222", "test2@gmail.com")

insert into employee 
    (userid, firstname, lastname, phone_number, email_address, permissions_level)
values 
    (2, "Pam", "T", "2222222222", "test2@gmail.com", 0)