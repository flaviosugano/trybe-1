#!/bin/bash

DIR=$1

if [ -d $DIR ]
then
    echo "O argumento" $DIR "é um diretório"
    echo "O argumento" $DIR "tem `ls $DIR | wc -l` arquivos"
else 
    echo "O argumento" $DIR "não é um diretório"
fi
