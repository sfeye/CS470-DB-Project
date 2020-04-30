drop procedure if exists getusercheckedoutbooks;
DELIMITER //

CREATE PROCEDURE GetUserCheckedOutBooks (user_id int)
BEGIN

Select u.userid, u.firstname, u.lastname, b.isbn, b.author, b.bookname, b.checkout_date from user u join book b on u.userid = b.checkout_userid  where u.userid = user_id;

END //

DELIMITER ;

