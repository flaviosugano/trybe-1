#/bin/bash

# if cd / | se o comando "cd" retornar verdadeiro
# then
#     echo "Este comando funcionou"
# fi

VARIAVEL=`whoami`

if [ $VARIAVEL ]
then    
    echo "Este comando funcionou!"
else
    echo "Este comando NÃO funcionou"
fi

#CONDIÇÕES
#lt <
#gt > 
#le <=
#ge >=
#eq =
#ne !=

echo "Qual a sua idade?"
read IDADE

if [ $IDADE -gt 18 ]
then 
    echo "Você é maior de idade"
else
    echo "Você é menor de idade"
fi


