USE PecasFornecedores;

-- Create a query that returns all parts that start with the letters 'GR';
SELECT code, name FROM Pecas
WHERE name LIKE 'GR%';

-- Now, write a query to show all deliveries that contain the part with code 2. Organize the result in alphabetical order by supplier;
SELECT code, peca, fornecedor, Preco FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor ASC;

-- Then make a query to display the parts, price and supplier for all supplies where the supplier code has the letter 'N';
SELECT peca, name, Preco, fornecedor FROM Fornecimentos JOIN Pecas
ON (Fornecimentos.peca = Pecas.code)
WHERE fornecedor LIKE '%N%';

-- Write a query to display all information from suppliers that are limited companies (LTDA). Sort these results in descending alphabetical order;
SELECT code, name FROM Fornecedores
WHERE name LIKE '%LTDA%';

-- Now, make a query to display the number of companies (suppliers) that contain the letter F in the code;
SELECT code, name FROM Fornecedores
WHERE code LIKE '%F%';

-- Now write a query to display supplies where parts cost more than $15.00 and less than $40.00. Sort the results in ascending order;
SELECT code, peca, fornecedor, Preco FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40;

-- Finally, make a query to display the number of sales made between 04/15/2018 and 07/30/2019.
SELECT code, fornecimento, quantity, order_date FROM Vendas
WHERE order_date BETWEEN '2018-04-15%' AND '2019-07-30%';