var appendSegundos = document.getElementById("segundos");
var appendMinutos = document.getElementById("minutos");
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset');
var borda = document.getElementsByClassName("timer");
var Interval;

buttonStart.onclick = function () { 
  clearInterval(Interval);
  Interval = setInterval(iniciarPomodoro, 1000);
  borda[0].style.borderColor = "red";
}

buttonStop.onclick = function () {
  clearInterval(Interval);
}

buttonReset.onclick = function reset() {
  clearInterval(Interval);
  segundos = "00";
  minutos = "25";
  appendMinutos.innerHTML = minutos;
  appendSegundos.innerHTML = segundos;
}

function iniciarPomodoro () {
  var tempoSegundos = document.getElementById("segundos").textContent;
  var segundos = parseInt(tempoSegundos);
  var tempoMinutos = document.getElementById("minutos").textContent;
  var minutos = parseInt(tempoMinutos);

  segundos--;
  if (segundos < 0) {
    minutos--;
    appendMinutos.innerHTML = minutos;
    segundos = 59;
    appendSegundos.innerHTML = segundos;
  }

  if (segundos > 9) {
    appendSegundos.innerHTML = segundos;
  }
  if (segundos <= 9) {
    appendSegundos.innerHTML = "0" + segundos;
  }

  if (minutos <= 9) {
    appendMinutos.innerHTML = "0" + minutos;
  }

  if (minutos > 9) {
    appendMinutos.innerHTML = minutos;
  }

  if (minutos == 0 && segundos == 0) {
    clearInterval(Interval);
    segundos = "00";
    minutos = "00";
    appendMinutos.innerHTML = minutos;
    appendSegundos.innerHTML = segundos;
    borda[0].style.borderColor = "white";
  }

}