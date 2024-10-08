const nombre = document.getElementById("nombres");
const correo = document.getElementById("correoe");
const celular = document.getElementById("numerotel");
const mensaje = document.getElementById("mensajetext");
const form = document.getElementById("form"); // Asegúrate de tener el ID correcto del formulario.

form.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let entrar = false;

    if (nombre.value.length < 5) {
        warnings += 'Nombre muy corto. <br>';
        entrar = true;
    }
    if (!regexEmail.test(correo.value)) {
        warnings += 'Correo no válido. <br>';
        entrar = true;
    }
    if (celular.value.length < 9) {
        warnings += 'Número celular muy corto. <br>';
        entrar = true;
    }
    if (mensaje.value.length < 10) {
        warnings += 'Ingrese un mensaje. <br>';
        entrar = true;
    }

    if (entrar) {
        // Muestra todas las advertencias en un solo SweetAlert
        Swal.fire({
            title: "Error",
            html: warnings,
            icon: 'error'
        });
    } else {
        // Muestra el mensaje de éxito
        Swal.fire({
            title: "¡Hola!",
            text: "Nos pondremos en contacto contigo",
            icon: 'success'
        });

        // Aquí puedes proceder a enviar el formulario si todo es válido
        // form.submit(); // Descomenta esta línea si deseas enviar el formulario
    }
});



    
