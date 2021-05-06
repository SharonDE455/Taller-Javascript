// Elaborar un programa que lea un numero y determine si es capicúa

let numero;
let inicio = 0;
let fin
let mitad;

console.log('Señor usuario digite el numero que desee ');

process.stdin.on('data', (data) => {       
    numero = data.toString().trim();                                 
    fin = numero.length - 1;           
    mitad = parseInt(fin/2);  

    while(numero[inicio] == numero[fin]){   
        if(mitad == inicio){
             console.log("El numero que digito es capicúa")
             break;
        }
        fin--;
        inicio++;
    }
    if(mitad != inicio)
    console.log("El numero que digito no es capicúa")

    process.exit();
})