// Con esa funcion controlo el mini-juego.hmtl
// Controlo los botones de las respuestas
function opcion (seleccion) {
    switch (seleccion) {
        case 1:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 2:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 3:
            alert("Respuesta correcta");
            break;
        case 4:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 5:
            alert("Respuesta correcta");
            break;
        case 6:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 7:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 8:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 9:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 10:
            alert("Respuesta incorrecta, intenta de nuevo");
            break;
        case 11:
            alert("Respuesta correcta");
            break;
        case 12:
            alert("Respuesta incorrecta, intenta de nuevo")
            break;
        default:
            break;
    }
}

// Controlo el boton de regresar del mini-juego.html
function regresar (items) {
    switch (items) {
        case 1:
            alert("Gracias por jugar al mini juego, vuelve cuando quieras");
            location.replace("./extra.html");
            break;

            // Aqui controlo el boton de creditos
            // Para conectar el archivo de creditos.html
        case 2:
            location.replace("./creditos.html");
        default:
            break;
    }

}

// Aqui controlo el boton de regresar del archivo creditos.html
function regreso () {
    location.replace("./extra.html");
}

