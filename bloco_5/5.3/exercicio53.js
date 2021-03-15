function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
1
function DiasDoMes() {
  let getDaysList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let listaDedias = document.createElement('li');
    let dia = dezDaysList[i];
    
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      listaDedias.className = 'day holiday';
      listaDedias.innerHTML = dia;
      getDaysList.appendChild(listaDedias);
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
        listaDedias.className = 'day friday';
        listaDedias.innerHTML = dia;
        getDaysList.appendChild(listaDedias);
    } else if (dezDaysList[i] === 25) {
        listaDedias.className = 'day holiday friday';
        listaDedias.innerHTML = dia;
        getDaysList.appendChild(listaDedias);
    } else {
        listaDedias.innerHTML = dia;
        listaDedias.className = 'day';
        getDaysList.appendChild(listaDedias);
    }
  }
}

DiasDoMes();


2
function criacaoFeriados(nomeBotao) {
  let botao = document.createElement('button');
  let divBotao = document.getElementsByClassName('buttons-container')[0];

  botao.id = 'btn-holiday';
  botao.innerHTML = nomeBotao;
  divBotao.appendChild(botao);
}

criacaoFeriados('Feriados');


3
function botaoDeMudarCor() {

let getButton = document.querySelector('#btn-holiday');
let feriados = document.querySelectorAll('.holiday')
let antigaCorFundo = 'rgb(238, 238, 238)';
let novaCorFundo = 'white';

  getButton.addEventListener('click', function() {
    for (let i = 0; i < feriados.length; i += 1) {
      if (feriados[i].style.backgroundColor === antigaCorFundo) {
        feriados[i].style.backgroundColor = novaCorFundo;
      } else {
        feriados[i].style.backgroundColor = antigaCorFundo;
      }
    }
  })
};

botaoDeMudarCor();


4
function fridayButton(buttonName) {
  let divButton = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  let buttonID = 'btn-friday';

  button.id = buttonID;
  button.innerHTML = buttonName;
  divButton.appendChild(button);
};

fridayButton('sexta-feira');



5
function eventFriday(){
  let fridayDays = document.getElementById('friday');
  let buttonFriday = document.querySelector('#btn-friday');
  let sextou = 'SEXTOU!';
  let sextaFeira = fridayDays.innerText;

  buttonFriday.addEventListener('click', function(){
    for (let i = 0; i < fridayDays.length; i += 1) {
      if (fridayDays[i].innerHTML === sextaFeira) {
        fridayDays[i] = sextou;
      } else {
          fridayDays[i] = sextaFeira;
      }
    }  
  })
};

eventFriday();