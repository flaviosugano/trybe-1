function ehPalindromo (string){
    
    let verificador = string.split('').join();
    let verificador2 = string.split('').reverse().join();

    if (verificador === verificador2){
        resultado = "true";
        return resultado
    } else {
        resultado = "false";
        return resultado
    }
}

ehPalindromo("tenet");
console.log(resultado);


// function Palindromo(palavra) {
//     let array = palavra.split('');
//     isPalindromo = true;

//     for (let i in array ){
//         if (array[i] != palavra[(palavra.length - 1) -i])
//           isPalindromo = false;
//     }
//     return isPalindromo;
// }

// console.log(Palindromo("tenet"));
