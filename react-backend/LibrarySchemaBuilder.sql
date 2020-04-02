create schema library;

use library;

create table user
(
	userid int auto_increment not null unique,
	userid int auto_increment not null,
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
    on delete cascade
);

create table employee
(
	employeeid int auto_increment NOT NULL unique,
    userid int NOT NULL unique,
	employeeid int auto_increment NOT NULL,
    userid int NOT NULL,
	employeeid int auto_increment NOT NULL,
    userid int NOT NULL,
    firstname varchar(30) NOT NULL,
    lastname varchar(30) NOT NULL,
    permissions_level int NOT NULL,
    phone_number varchar(30) NOT NULL,
    email_address varchar(100) NOT NULL,
    primary key (employeeid),
    foreign key (userid) references user(userid)

    on delete cascade
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
    checkout_indicator int NOT NULL,
	foreign key (checkout_userid) references user(userid)
);

insert into user (firstname, lastname, phone_number, email_address)
	values('Employee', 'Employee', '111-111-1111', 'juicybaby@geocities.org'), ('Plain','User', '111-111-1112', 'krill@whale.ru'), ('Book', 'Reader', '111-111-1113', ';)@uWu.OwO');
    
insert into book (isbn, author, bookname, shelf_number, checkout_userid, checkout_date, checkin_date, checkout_indicator)
	values (1, 'Joe Dirt', 'Dead Sea Scrolls', 1, null, null, null, 0), (2, 'Robert Frost', '1000 Roads You Would Not Believe Are Less Traveled', 2, null, null, null, 0), (3, 'Ginuwine', 'Pony', 2, null, null, null, 0);
    
insert into employee (employeeid, userid, firstname, lastname, permissions_level, phone_number, email_address)
	values (10001, 1, 'Employee', 'Employee', 1, '111-111-1111', 'juicybaby@geocities.org');
    
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
    ("Pam", "T", "2222222222", "test2@gmail.com");

insert into employee 
    (userid, firstname, lastname, phone_number, email_address, permissions_level)
values 
    (2, "Pam", "T", "2222222222", "test2@gmail.com", 0);



