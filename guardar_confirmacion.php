<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];

// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Fallo en la conexión: " . mysqli_connect_error());
}

// Insertar los datos de confirmación en la base de datos
$sql = "INSERT INTO confirmacion_asistencia (nombre, apellido) VALUES ('$nombre', '$apellido')";
if (mysqli_query($conn, $sql)) {
  echo "Gracias, " . $nombre . " " . $apellido . ", por confirmar tu asistencia!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
