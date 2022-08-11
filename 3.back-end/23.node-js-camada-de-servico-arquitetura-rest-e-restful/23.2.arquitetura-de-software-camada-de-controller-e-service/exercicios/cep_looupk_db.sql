CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (cep)
);

INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
VALUES
	(58779290, 'Dezesseis', 'Centro', 'Itajaí', 'SC'),
	(90465766, 'Brasil', 'Planalto', 'Tatuí', 'SP'),
    (78229998, 'Santa Luzia', 'São Cristóvão', 'Rio Branco', 'AC'),
    (49832389, 'Rua das Flores', 'Centro', 'Alagoas', 'AL'),
    (78001996, 'Boa Vista', 'São Francisco', 'Boa Vista', 'RR');