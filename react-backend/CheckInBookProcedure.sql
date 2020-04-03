DELIMITER //

CREATE PROCEDURE CheckInBook (book_isbn int)
BEGIN
DECLARE checked_out int;
declare book_userid int;

select checkout_indicator from book where isbn = book_isbn into checked_out;
select userid from user join book on userid = checkout_userid where book_isbn = isbn into book_userid;

if checked_out = 1 then
	update book
		set
			checkout_userid = book_userid,
            checkout_indicator = 0,
            checkin_date = CURDATE()
	where isbn = book_isbn;
    
    insert into book_history (isbn, author, bookname, shelf_number, checkout_userid, checkout_date, checkin_date, checkout_indicator)
			Select
				isbn as isbn,
                author as author,
                bookname as bookname,
                shelf_number as shelf_number,
                checkout_userid as checkout_userid,
                checkout_date as checkout_date,
                checkin_date as checkin_date,
                checkout_indicator as checkout_indicator
                From book
                where isbn = book_isbn;
end if;

if checked_out = 0 then
	Select 'Book is checked in';
end if;

END //

DELIMITER ;