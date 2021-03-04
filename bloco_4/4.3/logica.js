1
let n = 5;
let asterisco = "*";
let inpult = "";

for (let i = 0; i < n; i += 1){
  inpult = inpult + asterisco
}
for (let i = 0; i < n; i += 1){
  console.log(inpult);
}


2
let n = 5;
let inpult = "";

for (let i = 0; i < n; i += 1){
  inpult = inpult + "*";
  console.log(inpult);
}




3
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = (n - 1);

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};


4

let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};


Bonus

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}