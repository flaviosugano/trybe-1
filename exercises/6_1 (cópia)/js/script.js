// Função para criar os estados

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

// Biblioteca de data e verificação
var picker = new Pikaday({ field: document.getElementById('datepicker') });

window.onload = function(){
  new window.JustValidate('.cvForm', {
    rules: {
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      name: {
        required: true,
        maxLength: 50
      },
      endereco: {
        required: true,
        maxLength: 500
      },
      cidade: {
        required: true,
        maxLength: 28
      },
      resumo: {
        required: true,
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
      data: {
        required: true
      },
      cpf: {
        required: true,
        maxLength: 11
      }
    },
    messages: {
      email: {
        email: 'Email inválido',
        required: 'Email obrigatório'
      },
      name: {
        required: 'Nome obrigatório',
        maxLength: 'Limite de 40 caracteres'
      }, 
      endereco: {
        required: 'Endereço obrigatório',
        maxLength: 'Limite de 200 caracteres'
      },
      cidade: {
        required: 'Cidade obrigatória',
        maxLength: 'Limite de 28 caracteres'
      },
      resumo: {
        required: 'Resumo obrigatório',
        maxLength: 'Limite de 1000 caracteres'
      },
      cargo: {
        required: 'Cargo obrigatório',
        maxLength: 'Limite de 40 caracteres'
      },
      descricaoCargo: {
        required: 'Descrição de cargo obrigatória',
        maxLength: 'Limite de 500 caracteres'
      },
      data: {
        required: 'Data de início obrigatória'
      },
      cpf: {
        required: 'CPF cargo obrigatório',
        maxLength: 'Limite de 11 caracteres'
      }
    },
    submitHandler: function (form, values) {
      console.log(form, values);
      cvFormFunction();
    },
  })
}

// new window.JustValidate(elements, options);

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


function cvFormFunction(event){
  const formElements = document.getElementById('cvForm').elements;
  const divDados = document.querySelector('#summary');
  // console.log(formElements);

    for (let i = 0; i < formElements.length; i++){
      if (formElements[i].tagName !== 'FIELDSET' && formElements[i].tagName !== 'BUTTON'){
        // console.log(formElements[i].value);

        let dados = document.createElement('p');

        // checa se o elemento da vez é um input, do tipo radio e está selecionado.
        if (formElements[i].tagName == 'INPUT' && formElements[i].type == 'radio' && formElements[i].checked) {
          // Caso seja fazemos esse mapeamento usando esse objeto para saber o que vai ser apresentado de acordo com o value.
          const values = {"apt": "Apartamento", "casa": "Casa"}
          // Exibiremos de acordo com o valor do radio que está checado
          dados.innerHTML += values[formElements[i].value];
        } else {
          // Para evitar que o valor do elemento radio que não está selecionado seja exibido fazemos esse if para não exibir o valor dos inputs do tip radio.
          if (formElements[i].tagName == 'INPUT' && formElements[i].type !== 'radio') {
            dados.innerHTML += formElements[i].value;  
          }  
        }

        if (formElements[i].tagName == 'SELECT' || formElements[i].tagName == 'TEXTAREA') {
          dados.innerHTML += formElements[i].value; 
        }  
        
        divDados.appendChild(dados);
      } 
    }
} 


// let btn = document.querySelector('#button');
// btn.addEventListener('click', function(event){
//     // event.preventDefault();
//     cvFormFunction();
// });

// Botão para Limpar os dados
let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function(){

  let cleanP = document.querySelectorAll('p');
  for (let i = 0; i < cleanP.length; i++){
    cleanP[i].remove();
  }
})


