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
