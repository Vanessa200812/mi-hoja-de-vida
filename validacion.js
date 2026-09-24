document.getElementById("formularioContacto").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    let valido = true;


    // Limpiar mensajes anteriores
    document.getElementById("errorNombre").textContent = "";
    document.getElementById("errorCorreo").textContent = "";
    document.getElementById("errorAsunto").textContent = "";
    document.getElementById("errorMensaje").textContent = "";
    document.getElementById("mensajeExito").textContent = "";


    // Validar nombre
    if (nombre === "") {

        document.getElementById("errorNombre").textContent =
            "Por favor, ingresa tu nombre.";

        valido = false;
    }


    // Validar correo
    let formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo === "") {

        document.getElementById("errorCorreo").textContent =
            "Por favor, ingresa tu correo.";

        valido = false;

    } else if (!formatoCorreo.test(correo)) {

        document.getElementById("errorCorreo").textContent =
            "Ingresa un correo electrónico válido.";

        valido = false;
    }


    // Validar asunto
    if (asunto === "") {

        document.getElementById("errorAsunto").textContent =
            "Por favor, ingresa un asunto.";

        valido = false;
    }


    // Validar mensaje
    if (mensaje === "") {

        document.getElementById("errorMensaje").textContent =
            "Por favor, escribe un mensaje.";

        valido = false;
    }


    // Si todo está correcto
    if (valido) {

        document.getElementById("mensajeExito").textContent =
            "Formulario enviado correctamente.";

        document.getElementById("formularioContacto").reset();
    }

});