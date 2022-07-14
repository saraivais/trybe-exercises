USE PiecesProviders;

SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT * FROM Provides;

SELECT piece, price FROM Provides
WHERE provider = 'RBT';

SELECT * FROM Provides
ORDER BY price DESC LIMIT 5;

SELECT provider, price FROM Provides
ORDER BY price DESC LIMIT 4 OFFSET 2;

-- ir na mentoria~ quero selecionar os codes usando where provider = 'HAL', dps buscar em Pieces o nome correspondente ao código~
-- descobrir como excluir uma coluna na junção~ on devia funcionar?
SELECT piece, name, price FROM Provides JOIN Pieces
ON (Provides.piece = Pieces.code)
WHERE provider = 'HAL';
-- code price name~ piece price name
-- gambiarra que não é gambiarra~ se tiver campo c/ nome igual entre duas tabelas, põe nome da tabela antes do FROM

SELECT DISTINCT provider FROM Provides
WHERE piece = 1;