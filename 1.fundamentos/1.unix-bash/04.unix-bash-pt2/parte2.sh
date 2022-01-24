#!/bin/bash

delay=2 #uso de delay e sleep $delay aprendido lendo script do Paulo Simões (https://github.com/paulohbsimoes)~ 


# Navegar até a pasta unix_tests

echo "\nCriando o diretório unix_tests e navegando até ele"
mkdir unix_tests
cd unix_tests
sleep $delay

# Criar arquivo .txt

echo "\nCriando arquivo bunch_of_things.txt"
touch bunch_of_things.txt
sleep $delay

# Exercício 2 - Comando ls -l para ver as permissões do arquivo.

echo "\nComando ls -l para ver as permissões do arquivo bunch_of_things.txt\n"
ls -l
sleep $delay

# Exercício 3 - Mudar permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita (rw-)

echo "\nAlterando permissão do arquivo bunch_of_things.txt para -rw-rw-rw-..."
chmod 666 bunch_of_things.txt
sleep $delay
echo "\nPermissão alterada, veja:\n"
ls -l
sleep $delay

# Exercício 4 - Tirar a permissão de escrita de todos os usuários. (r--)

echo "\nAlterando permissão do arquivo bunch_of_things.txt para -r--r--r--..."
chmod 444 bunch_of_things.txt
sleep $delay
echo "\nPermissão alterada, veja:\n"
ls -l
sleep $delay

# Exercício 5 - Voltar a permissão do bunch_of_things para a listada inicialmente

echo "\nAlterando a permissão do arquivo bunch_of_things.txt para sua formação original..."
chmod 664 bunch_of_things.txt
sleep $delay
echo "\nPermissão alterada, veja:\n"
ls -l
sleep $delay

# Removendo arquivo e diretório, clear
echo "\nRemovendo arquivos..."
rm *.txt
cd ..
sleep $delay
echo "\nRemovendo unix_tests..."
rmdir unix_tests
sleep $delay
clear
