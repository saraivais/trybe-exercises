#!/bin/sh

delay=2 #uso de delay e sleep $delay aprendido lendo script do Paulo Simões (https://github.com/paulohbsimoes)~ 

# Exercício 1 - Criar um diretório e navegar até ele

echo "\nCriando diretório..."
mkdir unix_tests
echo "\nNavegando até o diretório."
cd unix_tests
sleep $delay

# Exercício 2 - Criar um arquivo .txt

echo "\nCriando arquivo trybe.txt"
touch trybe.txt
sleep $delay

# Exercício 3 - Criar uma cópia do arquivo trybe.txt

echo "\nCriando cópia do arquivo trybe.txt"
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercício 4 - Renomear o arquivo trybe.txt

echo "\nRenomeando arquivo trybe.txt utilizando comando mv"
mv trybe.txt trybe_teste.txt
sleep $delay

# Exercício 5 - Dentro de unix_testes, criar um diretório 

echo "\nCriando diretório chamado backup"
mkdir backup
sleep $delay

# Exercício 6 - Mover arquivo trybe_backup.txt para diretório backup

echo "\nMovendo arquivo trybe.txt para o diretório backup"
mv trybe_backup.txt backup
sleep $delay

# Exercício 7 - Criar novo diretório chamado backup2

echo "\nCriando diretório chamado backup2"
mkdir backup2
sleep $delay

# Exercício 8 - Mover trybe_backup.txt do diretório backup para o diretório backup2

echo "\nEntrando no diretório backup"
cd backup
echo "\nMovendo o arquivo trybe_backup.txt para o diretório backup2"
mv trybe_backup.txt ../backup2
sleep $delay

# Exercício 9 - Apagar pasta backup

echo "\nVoltando para o diretório pai"
cd ..
echo "\nRemovendo diretório backup"
rmdir backup
sleep $delay

# Exercício 10 - Renomear a pasta backup2 

echo "\nRenomeando diretório backup2"
mv backup2 backup
sleep $delay

# Exercício 11 - Ver path completo do diretório atual e listar arquivos dentro dele

echo "\nEndereço completo do diretório atual"
pwd 
ls *
sleep $delay

# Exercício 12 - Apagar o diretório backup

echo "\nApagando o diretório backup mesmo que não esteja vazio..."
rm -rf backup
sleep $delay

# Exercício 13 - Limpar terminal

echo "\nLimpando o terminal..."
clear
sleep $delay

# Arquivo skills.txt criado na interface gráfica

echo "\nCriando o arquivo skills.txt"
touch skills.txt
sleep $delay
echo "\nAtribuindo valores ao arquivo skills.txt"
echo "Internet\nUnix\nBash\nHTML\nCSS\nJavascript\nReact\nSQL" >> skills.txt
sleep $delay

# Exercício 14 - Mostrar 5 primeiras linhas

echo "\nVisualizando as 5 primeiras linhas..."
head -5 skills.txt
sleep $delay

# Exercício 15 - Mostrar 4 últimas linhas

echo "\nVisualizando as 4 últimas linhas..."
tail -4 skills.txt
sleep $delay

# Exercício 16 - Apagar todos os arquivos .txt

echo "\nRemovendo qualquer arquivo com extensão .txt"
rm *.txt
sleep $delay

# Removendo diretório unix_tests

cd ..
sleep $delay
echo "Removendo diretório unix_tests"
rmdir unix_tests
sleep $delay
clear
