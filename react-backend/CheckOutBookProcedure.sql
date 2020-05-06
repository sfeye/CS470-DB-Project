drop procedure if exists checkoutbook;
DELIMITER //
CREATE PROCEDURE CheckOutBook (book_isbn varchar(20), user_id int)
BEGIN
DECLARE checked_out int;
DECLARE bookhistory_id int;

select checkout_indicator from book where isbn = book_isbn into checked_out;

if checked_out = 0 then
	update book
		set
			checkout_userid = user_id,
            checkout_indicator = 1,
            checkout_date = curdate(),
            checkin_date = null
	where isbn = book_isbn;
    
    insert into book_history (isbn, checkout_userid, checkout_date, checkin_date, checkout_indicator)
			Select
				isbn as isbn,
                checkout_userid as checkout_userid,
                checkout_date as checkout_date,
                checkin_date as checkin_date,
                checkout_indicator as checkout_indicator
                From book
                where isbn = book_isbn;

    Select 'Book was successfully checked out to', firstname, lastname from user where userid = user_id;
end if;

if checked_out = 1 then
	Select 'Book is checked out to', firstname, lastname from user where userid = user_id;
end if;

END //

DELIMITER ;

