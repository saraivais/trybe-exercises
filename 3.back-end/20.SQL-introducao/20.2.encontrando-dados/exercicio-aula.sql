CREATE DATABASE livraria;

CREATE TABLE livraria.livros (
	id INT PRIMARY KEY AUTO_INCREMENT,
  	titulo VARCHAR(50) NOT NULL,
  	paginas INT,
  	ano_lancamento INT,
  	vendas INT
);

INSERT INTO livraria.livros (titulo, paginas, ano_lancamento, vendas) VALUES
('Livro #01', 100, 2022, 153),
('Metamorfose', 125, 1980, 500),
('Livro #02', NULL, 1999, 357),
('Harry Potter', 857, 2002, 854),
('O Cortiço', 159, 1985, 254);

USE livraria;
-- 1 - todos os livros cadastrados na livraria
SELECT titulo FROM livros;

-- 2 - quantidade de livros cadastrados
SELECT COUNT(titulo) FROM livros;

-- 3 - retornar todos os livros ordenados por nº de paginas de forma decrescente
SELECT titulo, paginas FROM livros
ORDER BY paginas DESC;

-- 4 - lista dos 3 livros mais vendidos
SELECT titulo, vendas FROM livros
ORDER BY vendas DESC LIMIT 3;

-- 5 - retornar 3 livros ignorado os 2 primeiros resultados
SELECT titulo, paginas FROM livros
LIMIT 3 OFFSET 2;

-- (bônus) retornar somente os livros que contenham o número de páginas cadastrado.
SELECT titulo, paginas FROM livros
WHERE paginas IS NOT NULL;