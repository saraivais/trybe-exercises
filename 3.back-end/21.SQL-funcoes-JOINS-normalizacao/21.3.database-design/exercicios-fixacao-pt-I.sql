DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE funcionarios (
	funcionario_id INT PRIMARY KEY,
    nome VARCHAR(50),
    sobrenome VARCHAR(50),
    email VARCHAR(50),
    telefone VARCHAR(30),
    data_cadastro DATE,
    horario_cadastro TIME
);

CREATE TABLE setores (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
);

INSERT INTO funcionarios
	(funcionario_id, nome, sobrenome, email, telefone, data_cadastro, horario_cadastro)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05', '08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05', NULL),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05', '10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05', '11:45:40');
    
INSERT INTO setores
	(setor)
VALUES
	('Administração'),
    ('Vendas'),
    ('Operacional'),
    ('Marketing'),
    ('Estratégico');
    
SELECT * FROM funcionarios;
SELECT * FROM setores;

CREATE TABLE func_por_setor (
	funcionario_id INT,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios (funcionario_id),
    setor_id INT,
    FOREIGN KEY (setor_id) REFERENCES setores (setor_id)
);

INSERT INTO func_por_setor
	(funcionario_id, setor_id)
VALUES
	(12, 1),
    (12, 2),
    (13, 3),
    (14, 2),
    (14, 4),
    (15, 5);
    
-- SELECT * FROM func_por_setor;

-- Dúvida~ teria como fazer func_por_setor ser automático?
