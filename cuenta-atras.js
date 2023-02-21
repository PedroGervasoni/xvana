var countDownDate = new Date("Mar 18, 2023 20:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Feliz Cumpleaños!";
    }
}, 1000);

// Script para el botón de confirmación de asistencia
var botonConfirmarAsistencia = document.getElementById("confirmar-asistencia");
botonConfirmarAsistencia.addEventListener("click", function () {
    alert("¡Gracias por confirmar tu asistencia!");
});