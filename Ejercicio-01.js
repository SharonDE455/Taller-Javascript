// Elaborar un programa que lea un numero y lo imprima en forma inversa

let numero;

console.log('Señor usuario digite el numero que desee ');

process.stdin.on('data', (data) => {        
    numero = data.toString().trim();        
    let numero_alreves = '';

    for(let i=(numero.length-1); i>=0; i--){   
        numero_alreves += numero[i];         
    }
    
    console.log(`Su numero al reves es: ${numero_alreves}`);
    process.exit();
})