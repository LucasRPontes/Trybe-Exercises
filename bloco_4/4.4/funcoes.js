let singer = {
  name: "Milton",
  lastName: "Nascimento",
  nickname: "bituca",
  age: 77,
  bestAlbuns: ["Travessia", "Clube da esquina", "minas"]
};


console.log("O cantor " + singer.name + " " + singer.lastName + " possui " + singer.age + " anos.");

singer.fullName = singer.name + " " + singer.lastName;

console.log(singer);



let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");




let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}




let car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

for (let i in car) {
  console.log(car[i]);
}



let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};


console.log("Bem-vinda, " + info.personagem);

info.recorrente = "Sim";

console.log(info.recorrente);
console.log(info);


for(let key in info){
  console.log(key);
}

for (let key in info) {
  console.log(info[key]);
}


info.personagem = info.personagem + " e Tio Patinhas";
info.origem = info.origem + " e Christmas on Bear Mountain, Dell's Four Color Comics #178";
info.nota = info.nota + " e O último MacPatinhas";

console.log(info);



1
function palindromo (palavra){
  let palavraPraTras = ""
  for (let indexPraTras = palavra.length -1; indexPraTras >= 0; indexPraTras -= 1) {
    palavraPraTras += palavra[indexPraTras];
  } if (palavra == palavraPraTras){
    return true;
  } else {
    return false;
  }
}
console.log(palindromo("arara"));






  