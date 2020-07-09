#!/bin/bash

echo "Qual é o seu nome?"
read NOME

echo "Quantos anos você tem?"
read IDADE

echo "Qual é o usuário?"
USER=`whoami`

echo "Qual é o caminho?"
PATH=`pwd`

echo "Oi," $NOME " Você tem" $IDADE "anos."
echo "O usuário é" $USER "e o caminho é" $PATH
