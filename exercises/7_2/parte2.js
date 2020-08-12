const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EXERCÍCIO 1
const morningShift = (obj, key, value) =>{
  let result = obj[key] = value;
}

morningShift(lesson2, 'turno', 'manhã');
console.log(lesson2);

// EXERCÍCIO 2
const keysList = (obj) => {
  console.log(Object.keys(obj));
}
keysList(lesson2);

// EXERCÍCIO 3
const objSize = (obj) => {
 console.log(Object.keys(obj).length);
}
objSize(lesson3);

// EXERCÍCIO 4
const objValues = (obj) => {
  console.log(Object.values(obj));
}
objValues(lesson1);

// EXERCÍCIO 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// EXERCÍCIO 6
let allStudents = (obj) => {
  let total = 0;
  let allLessons1 = Object.values(obj);
  for (let i in allLessons1){
    total += allLessons1[i].numeroEstudantes;
  }
  return total;
}
console.log(allStudents(allLessons));

// EXERCÍCIO 7
const getValue = (obj, number) => {
  let result = Object.values(obj)[number];
  return result;
}
console.log(getValue(lesson1, 0));

// EXERCÍCIO 8
const isThereKey = (obj, key, value) => {
  let chave = Object.keys(obj).includes(key);
  let valor = Object.values(obj).includes(value);

  if (chave){
    output = `Possui a chave ${key}`;
  } else {
    output = `Não ossui a chave ${key}`;
  }
  if (valor){
    output2 = `Possui o valor ${value}`;
  } else {
    output2 = `Não possui o valor ${value}`;
  }
  return `${output} e ${output2}`;
}
console.log(isThereKey(lesson3, 'materia', 'Matemática'));

// EXERCÍCIO BÔNUS 1

const inClass = (obj) => {
  var total2 = 0;
  let total = Object.values(obj);
  
  for (let i in total){
    console.log(total[i]);
    if (total[i].materia === 'Matemática'){
      total2 += total[i].numeroEstudantes;
    }
  }
  return total2;
}
console.log(inClass(allLessons));

// EXERCÍCIO BÔNUS 2