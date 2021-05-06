// Elaborar un programa que lea un numero y determine si es primo 

let numero;
let primo;

console.log('Señor usuario digite el numero ');

process.stdin.on('data', (data) => {
    numero = data.toString().trim();
    let contador = 0;

    for(let i=1; i<=parseInt(numero); i++){
        if(parseInt(numero)%i == 0){
            contador++;
        } 
        if(contador==2){
            primo = `${numero} El numero es primo`;
        }
        else{
            primo = `${numero} El numero NO es primo`;
        }
    }
    
    console.log(primo);
    process.exit();
})