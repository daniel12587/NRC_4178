// La función que maneja la lógica de inicio de sesión
function validarLogin(event) {
  // Previene el envío del formulario por defecto (evita la recarga)
  event.preventDefault();

  // Clave estática para la demo
  const CLAVE_SECRETA = "2000's";
  const passwordInput = document.getElementById("password").value;

  // 2. Realizar la verificación
  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Sesión Iniciada! Bienvenido.");
    // Redirige a tu página principal
    window.location.href = "landingpage.html";
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}
