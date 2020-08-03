
state(['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']);

function state(array){
    let estado = document.querySelector('#estados');
    for(let i in array){
        let stateItem = createState(array[i]);
        stateItem.innerHTML = array[i];
        estado.appendChild(stateItem);
    }
}

function createState (){
    let stateItem = document.createElement('option');
    return stateItem;
}

let date = document.querySelector('#date');
console.log(date);
let dateValue = document.querySelector('#date').value;

function compareDate() {
    console.log(dateValue);
    let formato = dateValue.split('');
    console.log(formato);
    if (formato[2] !== '/'  && formato[5] !== '/'){
        alert('Formato da data inválido');
    }
    let parts = dateValue.split('/')

    if (parts[0] > 31 || parts[0] <= 0){
      // alert('Dia inválido');
      console.log('dia');
    }
    if (parts[1] > 12 || parts[1] <= 0){
      // alert('Mês inválido');
      console.log('mês');
    }
    if (parts[2] <= 0){
      // alert('Ano inválido'); 
      console.log('ano');
    }  
}

let btn = document.querySelector('#button');
btn.addEventListener('click', function(event){
    event.preventDefault();
    compareDate();
});


