#!/bin/bash

delay=2 #uso de delay e sleep $delay aprendido lendo script do Paulo Simões (https://github.com/paulohbsimoes)~ 


# Exercício 1 - Navegar até a pasta unix_tests

echo "\nCriando diretório unix_tests..."
mkdir unix_tests
sleep $delay

echo "\nAcessando o diretório unix_tests..."
cd unix_tests
sleep $delay

# Exercício 2 - Criar arquivo skills2.txt, adicionar valores Internet, Unix e Bash

echo "\nCriando arquivo skills2.txt com 3 valores dentro..."
echo -e "Internet\nUnix\nBash" > skills2.txt
sleep $delay

# Exercício 3 - Adicione 5 outos itens ao arquivo skills e imprima a lista ordenada

echo "\nAdicionando 5 valores ao arquivo skills2.txt"
echo -e "Java\nHTML\nGit\nGithub\nCSS" >> skills2.txt
sleep $delay

# Exercício 4 - Contar quantas linhas tem

echo "\nContando o número de linhas em skills2.txt"
wc -l skills2.txt
sleep $delay

# Exercício 5 - Criar um arquivo top_skills.txt usando as 3 primeiras linhas em ordem alfabética do arquivo skills2.txt

echo "\nCriando um arquivo novo com as 3 primeiras linhas em ordem alfabética"
sort skills2.txt | head -3 > top_skills.txt
sleep $delay

# Exercício 6 - Criar um arquivo novo phrases2.txt e adicione algumas frases da sua escolha

echo "\nCriando um arquivo com frases aleatórias"
echo -e "Lately our conversations end like it's the last goodbye\nYeah, one of us gets too drunk and calls about a hundred times\nSo who you been calling, baby, nobody could take my place\nWhen you're looking at those strangers, hope to God you see my face" > phrases2.txt
sleep $delay

# Exercício 7 - Conte o número de linhas que contêm as letras br

echo "\nContando quantas frases possuem os caracteres 'br'"
grep -ic br phrases2.txt
sleep $delay

# Exercício 8 - Conta o número de linhas que não contêm as letras br

echo "\nContando quantas frases não possuem os caracteres 'br'"
grep -ivc br phrases2.txt
sleep $delay

# Exercício 9 - Adicionar dois nomes de países do arquivo phrases2.txt

echo "\nAdicionando dois países ao final de phrases2.txt"
echo -e "Nepal\nChipre" >> phrases2.txt
sleep $delay

# Download do arquivo countries novamente~

echo "\nDownload do arquivo countries.txt"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercício 10 - Criar um novo arquivo bunch_of_things.txt com os conteúdos de phrases2 e countries

echo "\nCriando um arquivo com os conteúdos de phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $delay

# Exercício 11 - Ordernar o arquivo bunch_of_things.txt

echo "\nOrdenando (somente output) do arquivo bunch_of_things.txt"
sort bunch_of_things.txt
sleep $delay
sleep $delay

# Removendo todos os arquivos .txt
echo "\nRemovendo todos os arquivos .txt"
rm *.txt
sleep $delay

# Removendo a pasta unix_tests
echo "\nApagando pasta unix_tests"
cd ..
rmdir unix_tests
sleep $delay
clear
