
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


var picker = new Pikaday({ field: document.getElementById('datepicker') });

// let date = document.querySelector('#date');
// date.addEventListener('change', compareDate);

// function compareDate() {
//     let dateValue = document.querySelector('#date').value;
//     let formato = dateValue.split('');
//     if (formato[2] !== '/'  && formato[5] !== '/'){
//         alert('Formato da data inválido');
//     }

//     let parts = dateValue.split('/')

//     if (parts[0] > 31 || parts[0] <= 0){
//       alert('Dia inválido');
//       console.log('dia');
//     }
//     if (parts[1] > 12 || parts[1] <= 0){
//       alert('Mês inválido');
//       console.log('mês');
//     }
//     if (parts[2] <= 0){
//       alert('Ano inválido'); 
//       console.log('ano');
//     }  
// }


new window.JustValidate('.cvForm', {
  Rules: {
    email: {
        required: true,
        email: true
    },
    name: {
        required: true,
        minLength: 3,
        maxLength: 15
    },
    cpf: {
        required: true,
        maxLength: 11,
        minLength: 5
    },
    endereco: {
        required: true,
        minLength: 200,
        maxLength: 8
    },
    cidade: {
      required: true,
    },
    cv: {
      required: true,
      minLength: 200,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descricaoCargo: {
      required: true,
      maxLength: 500
    },

}
});


// function cvForm(event){
//   const formElements = document.getElementById('cvForm').elements;
//   const divDados = document.querySelector('#summary');
  

//   for (let i = 0; i < formElements.length; i++){
//     if (formElements[i].tagName !== 'FIELDSET' && formElements[i].tagName !== 'BUTTON'){
//       console.log(formElements[i].value);
//       let dados = document.createElement('p');
//       dados.innerHTML += formElements[i].value;
//       divDados.appendChild(dados);
//     } 
//   }
// }

// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(event){
//     event.preventDefault();
//     cvForm();
// });


