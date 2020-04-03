DELIMITER //

CREATE PROCEDURE GetUser (user_id int)
BEGIN

Select * from user u where u.userid = user_id;

END //

DELIMITER ;
