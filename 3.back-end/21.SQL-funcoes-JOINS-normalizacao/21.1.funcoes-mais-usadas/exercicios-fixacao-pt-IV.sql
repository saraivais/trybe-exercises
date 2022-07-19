-- Build a query that displays the difference in days between '2030-01-20' and today;
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- Build a query to display the time difference between '10:25:45' and '11:00:00';
SELECT TIMEDIFF('11:00:00', '10:25:45');