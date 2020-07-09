#!/bin/bash

#5
echo "Qual o caminho do diretório?"
read ARQUIVO
if [ -f "$ARQUIVO" ]
  then
    echo "$ARQUIVO é um arquivo comum"
elif [ -d "$ARQUIVO" ]
  then 
    echo "$ARQUIVO é um diretório"
else
    echo "Não sei o que é $ARQUIVO"
fi
ls -l $ARQUIVO

#6

ARQUIVO=$1
if [ -f "$ARQUIVO" ]
  then
    echo "$ARQUIVO é um arquivo comum"
elif [ -d "$ARQUIVO" ]
  then 
    echo "$ARQUIVO é um diretório"
else
    echo "Não sei o que é $ARQUIVO"
fi
ls -l $ARQUIVO