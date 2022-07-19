-- Build a query using the MOD together with the IF to find out if the value 15 is odd or even. Call this column 'Even or Odd', where it could say 'Even' or 'Odd';
SELECT IF(15 MOD 2 = 0, 'Even', 'Odd') AS 'Even or Odd';

-- We have a movie theater that seats 220 people. How many complete groups of 12 people can we take to the cinema without anyone being left out?
SELECT 220 DIV 12;

-- Using the previous result, answer the following question: do we have places left over? If yes, how many?
SELECT (220 - (12 * (220 DIV 12)));

-- Build a query that generates a value between 15 and 20;
SELECT ROUND(15 + (RAND() * 5));

-- Build a query that displays the value rounded to 15.7515971 with a precision of 5 decimal places;
SELECT ROUND(15.7515971, 5);
SELECT TRUNCATE(15.7515971, 5);
-- Qual é o melhor?

-- We have an average of 39,494 shirt sales per month. What is the approximate value below this average?
SELECT FLOOR(39.494);

-- We have an entry rate of 85.234% for the beginner photography course. What is the approximate value above this average?
SELECT CEIL(85.234);