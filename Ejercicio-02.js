
//Elaborar un programa que lea un numero y determine la suma de sus digitos

let numero;
let suma = 0;

console.log('Señor usuario digite el numero que desee ');

process.stdin.on('data', (data) => {        
    numero = data.toString().trim();        

    for(let i=0; i<numero.length; i++){
        suma = suma + parseInt(numero[i], 10);
    }
    
    console.log(`La suma de los numeros es: ${suma}`);
    process.exit();
})