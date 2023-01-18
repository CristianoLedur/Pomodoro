window.onload = function () {

  var segundos = 59;
  var minutos = 24;

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
    segundos = "59";
    minutos = "24";
    appendMinutos.innerHTML = minutos;
    appendSegundos.innerHTML = segundos;
  }

  function iniciarPomodoro () {
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
      segundos = "59";
      minutos = "24";
      appendMinutos.innerHTML = minutos;
      appendSegundos.innerHTML = segundos;
      borda[0].style.borderColor = "white";
    }
  }
}
