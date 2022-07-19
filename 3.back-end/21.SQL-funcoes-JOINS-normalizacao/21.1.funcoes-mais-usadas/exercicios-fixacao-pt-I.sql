-- Make a query that displays the word 'trybe' in ALL CAPS;
SELECT UCASE('trybe');

-- Make a query that transforms the sentence 'Você já ouviu falar do DuckDuckGo?' in 'Você já ouviu falar do Google?';
SELECT REPLACE('Você já ouviu falar em DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Using a query, find how many characters are in 'Uma frase qualquer';
SELECT CHAR_LENGTH('Uma frase qualquer');

-- Extract and return only the word "JavaScript" from the phrase 'A linguagem JavaScript está entre as mais usadas';
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- Finally, standardize the string 'RUA NORTE 1500, SÃO PAULO, BRASIL' so that your information is all in lower case;
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
