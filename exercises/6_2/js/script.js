
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

window.onload = function () {
new JustValidate('.cvForm', {
  rules: {
    email: {
      required: true,
      email: true
    },
  messages: {
    email: {
      email: 'Email inválido',
      required: 'Email necessário'
    },
  
  submitHandler: function (form, values) {
    console.log(form, values);
  },
   }
  }
 });
}

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
