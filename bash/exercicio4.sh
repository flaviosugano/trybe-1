#!/bin/bash

PATH=/home/alessandra/unixstuff/trybe/exercicio4.sh

if [ -e $PATH ]
then
    echo "O caminho" $PATH "está habilitado"
else
    echo "O caminho" $PATH "NÃO está habilitado"
fi

if [ -w $PATH ]
then   
    echo "Você tem permissão para editar" $PATH
else
    echo "Você não tem permissão para editar" $PATH
fi