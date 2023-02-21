// Script para el formulario de confirmación de asistencia
var formConfirmacionAsistencia = document.getElementById("confirmacion-asistencia");
formConfirmacionAsistencia.addEventListener("submit", function(event){
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  alert("¡Gracias, " + nombre + " " + apellido + ", por confirmar tu asistencia!");
});
