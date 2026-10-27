function inicio() {
    var usuario = document.getElementById("user").value;
    var contrasena = document.getElementById("password").value;
    if (usuario == "admin" && contrasena == "admin") {
        localStorage.setItem("autorizado", "true");
        window.location.href = "../eventos.html";
    } else {
        localStorage.setItem("autorizado", "false");
    }
    if (localStorage.getItem("autorizado") === "false") {
        document.getElementById("mensaje-error".trim()).textContent = "Usuario o contraseña erróneos";
    }
}