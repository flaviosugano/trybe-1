#!/bin/bash

ARQUIVO=$@

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