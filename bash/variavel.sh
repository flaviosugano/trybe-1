#!/bin/bash

VARIAVEL=`whoami`
echo $VARIAVEL

VARIAVEL=whoami
echo $VARIAVEL

VARIAVEL="Eu sou uma usuária"
echo $VARIAVEL

VARIAVEL="Eu estou logada como usuária `whoami` "
echo $VARIAVEL

VARIAVEL="Eu estou logada com usuária whoami"
echo $VARIAVEL

echo "Digite a sua idade: "
read IDADE
echo "Eu tenho" $IDADE "anos de idade"
