<?php
$name = $_POST['name'];
$pais = $_POST['pais'];
$email = $_POST['email'];
$celular = $_POST['celular'];
$giro = $_POST['giro'];
$producto = $_POST['producto'];
$mensaje = $_POST['mensaje'];
$formcontent=" Envia: $name \n Del País: $pais \n El correo es: $email \n Celular: $celular \n Giro de la empresa: $giro \n Producto Selecionado: $producto \n Mensaje: $mensaje";
$recipient = "contacto@aihgroup.com.mx";
$subject = "Correo de la Pagina Web";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script>window.history.back()</script>";
?>
