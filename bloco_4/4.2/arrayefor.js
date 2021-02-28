let coisas = ["Taco", "Mesa", "Cadeira", "Porta"];

coisas.push("Garfo");
coisas.unshift("Facas");

console.log(coisas);


let nada = ["Computador", "Geladeira", "som", "Tv", "Chuva"];

nada.pop();
nada.shift();

let indexOf = nada.indexOf("Tv");

console.log(indexOf);


Exercícios
1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato');

console.log(menu);


let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
  for (let i=0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
  }


1

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for (let i=0; i < numbers.length; i+=1) {
    console.log(numbers[i]);
  }

2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let i=0; i < numbers.length; i++) {
  soma += numbers[i];
} 

console.log(soma);

3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i=0; i < numbers.length; i++) {
  soma += numbers[i];
} 

soma = (soma / numbers.length);

console.log(soma);

4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i=0; i < numbers.length; i++) {
  soma += numbers[i];
} 

soma = (soma / numbers.length);

if (soma > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor que 20")
}

5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);

6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
  for (let i=0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      numerosImpares += 1;
    } 
  }

  if (numerosImpares === 0) {
    console.log("nenhum valor encontrado");
  } else {
    console.log(numerosImpares);
  }

  

7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 200;
for (let i=0; i < numbers.length; i++) {
if (numbers[i] < menorNumero){
  menorNumero = numbers[i];
}
}

  console.log(menorNumero);

8
let ate25 = [];

for(let i = 1; i <= 25; i += 1) {
ate25.push(i);
}


console.log(ate25);


9
let nome = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let divisao = [];

for(let index = 0; index < nome.length; index += 1) {
  divisao.push(nome[index] / 2); 
}


console.log(divisao);



Bonus


let numeros = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for(let i = 1; i < numeros.length; i += 1) {
  for(let j = 0; j < i; j += 1) {
    if (numeros[i] < numeros[j]) {
      let position = numeros[i];

      numeros[i] = numeros[j];
      numeros[j] = position;
    }
  }
}


console.log(numeros);


























