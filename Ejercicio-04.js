// Elaborar un programa que lea un numero, y un digito y determine si el digito esta dentro del numero 

let preguntas = ['Señor usuario ingrese un numero: ', 'Digito a encontrar es: '];
let numeros = [];
let resultado;

const Preguntas = (i)  => {
    console.log(preguntas[i]);
}

process.stdin.on('data', (data) => {        
    numeros.push(data.toString().trim())    
    if(numeros.length < preguntas.length){
        Preguntas(numeros.length)
    }
    else {
        buscar(numeros[0], numeros[1]);
        process.exit();
    }
})

const buscar = (num, b) => {
    resultado = num.indexOf(b)              
    if(resultado != -1){
        console.log(`El digito que ingreso se encontró`);
    }
    else console.log('El digito que ingreso No fue encontrado');
}

Preguntas(0);