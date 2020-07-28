let result = [];
var bigger = 0;
var name = '';
var storage; 

function maiorNome (nomes){
    result = nomes

    for (let index in result){
        storage = result[index].split('');
        if (storage.length > bigger) {
            bigger = storage.length;
            name = result[index]
        }    
    }
    return name;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Alessandra']));


