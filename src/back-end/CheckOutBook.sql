CREATE PROCEDURE `CheckOutBook` (book_isbn int, user_id int)
BEGIN
DECLARE checked_out int;

select checkout_indicator from book where isbn = book_isbn into checked_out;

if checked_out = 0 then
	update book
		set
			checkout_userid = user_id,
            checkout_ind = 1,
            checkout_date = CURDATE()
	where isbn = book_isbn;
    
    insert into book_hist (isbn, author, bookname, shelf_number, checkout_userid, checkout_date, checkin_date)
			Select
				isbn as isbn,
                author as author,
                bookname as bookname,
                shelf_number as shelf_number,
                checkout_userid as checkout_userid,
                checkout_date as checkout_date,
                checkin_date as checkin_date
                From book
                where isbn = book_isbn;
end if;

if checked_out = 1 then
	Select 'Book is checked out to', user_id;
end if;

END
