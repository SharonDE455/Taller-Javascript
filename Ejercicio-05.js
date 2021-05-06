// Elaborar un programa que lea un numero y determine el mayor de los digitos

let numero;
let mayor = 0;

console.log('Señor usuario digite un numero ');

process.stdin.on('data', (data) => {        
    numero = data.toString().trim();

    for(let i=0; i<numero.length; i++){
        if(mayor<numero[i]){
            mayor = numero[i];
        }
    }
    
    console.log(`El numero que ingreso, el mayor es : ${mayor}`);
    process.exit();
})