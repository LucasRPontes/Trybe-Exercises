let cabecalho = document.getElementById("header-container");
  cabecalho.style.backgroundColor = "rgb(76, 190, 109)";

let urgente = document.getElementsByClassName("emergency-tasks")[0];
  urgente.style.backgroundColor = "rgb(248, 144, 117)";

let urgenteImportanteH3 = document.querySelector(".emergency-tasks h3");
  urgenteImportanteH3.style.backgroundColor = "rgb(48, 144, 117)";


let urgenteNaoImportanteH3 = document.querySelectorAll(".emergency-tasks h3")[1];
  urgenteNaoImportanteH3.style.backgroundColor = "rgb(48, 144, 117)";

let naoUrgente = document.getElementsByClassName("no-emergency-tasks")[0];
  naoUrgente.style.backgroundColor = "rgb(240, 237, 49)"

let naoUrgenteNaoImportanteH3 = document.querySelectorAll(".no-emergency-tasks h3")[0];
  naoUrgenteNaoImportanteH3.style.backgroundColor = "black";

let naoUrgenteImportanteH3 = document.getElementsByTagName("h3")[3];
  naoUrgenteImportanteH3.style.backgroundColor = "black"; 

let rodape = document.getElementsByTagName("footer")[0];
  rodape.style.backgroundColor = "black";