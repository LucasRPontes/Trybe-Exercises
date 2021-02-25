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

7
let nota = 77;

if (nota > 100 || nota < 0) {
    console.log("Erro");
}  else if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50 ) {
    console.log("F");
}

8
let num7 = 8;
let num8 = 6;
let num9 = 9;

console.log(num7 % 2 == 0 || num8 % 2 == 0 || num9 % 2 == 0);

9
let num10 = 10;
let num11 = 12;
let num12 = 16;

if (num10 % 2 != 0 || num11 % 2 != 0 || num12 % 2 != 0) {
    console.log("True");
} else {
    console.log("False");
}

10
let custo = 4237;
let venda = 5678;
let valorCustoTotal = (custo * 1.2);
let lucro = (venda - valorCustoTotal);

if (custo < 0 || venda < 0) {
    console.log("Erro")
} else {
    console.log(lucro * 1000);
}

11
let salarioBruto = 3500;
