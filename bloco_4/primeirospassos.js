4.1

1
let a = 5;
let b = 9;

console.log(a + b)
console.log(b -a)
console.log(a * b)
console.log(b / a)
console.log(b % a)

2
let num1 = 27;
let num2 = 32;

if (num1 >= num2) {
    console.log(num1)
} else {
    console.log(num2)
}

3
let num3 = 45;
let num4 = 38;
let num5 = 40;

if ( num3 >= num4 && num3 >= num5){
    console.log(num3)
} else if (num4 >= num3 && num4 >= num5) {
    console.log(num4)
} else {
    console.log(num5)
}

4
let num6 = 0;

if (num6 > 0) {
    console.log("Positivo");
} else if (num6 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

5
let angulo1 = 35;
let angulo2 = 37;
let angulo3 = 110;

console.log(angulo1 + angulo2 + angulo3 == 180);

6
let pecaXadrez = "RaiNHA";

switch (pecaXadrez.toLowerCase()) {
    case "cavalo":
        console.log("Anda em movimento L");
        break;

    case "bispo":
        console.log("Anda em diagonal");
        break;
        
    case "torre":
        console.log("Anda para frente ou para o lado");
        break;

    case "rainha":
        console.log("Anda pra onde ela quiser");
        break;

    case "rei":
        console.log("Anda uma casa para onde ele quiser");
        break;

    case "peao":
        console.log("Anda para frente");
        break;

    default:
        console.log("Não existe essa peça fera");
    }