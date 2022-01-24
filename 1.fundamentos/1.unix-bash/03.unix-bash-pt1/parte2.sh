#!/bin/sh

delay=2 #uso de delay e sleep $delay aprendido lendo script do Paulo Simões (https://github.com/paulohbsimoes)~ 

# Exercício 1 - Download do arquivo countries.txt

echo "\nFazendo download do arquivo countries.txt"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercício 2 - Mostrar conteúdo do arquivo na tela

echo "\nImprimir o conteúdo do arquivo countries.txt"
cat countries.txt
sleep $delay

# Exercício 3 - Mostrar conteúdo página por página

echo "\nMostrar conteúdo página por página usando o comando less"
sleep $delay
less countries.txt
sleep $delay

# /Zambia para pesquisar
# next (n) previous (p)

# Exercício 5 - Buscar no arquivo

echo "\nBuscando 'Brazil' em countries.txt"
grep Brazil countries.txt
sleep $delay

# Exercício 6 - Buscar no arquivo - case sensitivity

echo "\nBuscando 'brazil' em countries.txt usando -i para tirar a case sensitivity"
grep -i brazil countries.txt
sleep $delay

# Criando arquivo phrases.txt

echo "\nCriando o arquivo phrases.txt"
echo "I'm your biggest fan\nI'll follow you until you love me\nPapa-paparazzi\nBaby, there's no other superstar\nYou know that I'll be\nYour papa-paparazzi\nPromise I'll be kind\nBut I won't stop until that boy is mine\nBaby, you'll be famous\nChase you down until you love me\nPapa-paparazzi" > phrases.txt
sleep $delay

# Exercício 7 - Buscar frases que não contenham a palavra fox

echo "\nBuscando todas as linhas que não tem a keyword 'fox' em phrases.txt"
grep -v fox phrases.txt
sleep $delay

# Exercício 8 - Contar número de palavras

echo "\nContando palavras em phrases.txt"
wc -w phrases.txt
sleep $delay

# Exercício 9 - Contar número de linhas

echo "\nContando linhas em phrases.txt usando"
wc -l phrases.txt
sleep $delay

# Exercício 10 - Criar arquivos .tbt e .pdf

echo "\nCriando dois arquivos, empty.pdf e empty.tbt"
touch empty.pdf empty.tbt
sleep $delay

# Exercício 11 - Listar os arquivos do diretório

echo "\nListando o que existe dentro do diretório"
ls
sleep $delay

# Exercício 12 - Listar arquivos que terminem com .txt

echo "\nListando todos os arquivos que terminam em .txt"
ls *.txt
sleep $delay

# Exercício 13 - Listar arquivos que terminem com .tbt ou .txt

echo "\nListando todos os arquivos que terminam em .txt e .tbt"
ls *.txt *.tbt
sleep $delay

# Exercício 14 - Acessar manual do comando ls

echo "\nAbrindo manual do comando ls"
man ls
sleep $delay

# Excluindo todos os arquivos
echo "\nExcluindo os arquivos .txt, .pdf e .tbt..."
rm *.txt *.pdf *.tbt
sleep $delay

clear
