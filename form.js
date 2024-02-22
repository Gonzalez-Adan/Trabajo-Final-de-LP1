// Esta funcion controla el boton de salir del formulario.html
function salir () {
    location.replace("./Interfaz1.html");
}

// Validando los datos del formulario.html
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    // Evita que se envíe el formulario

    // Guardando los datos del formulario.html
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;


    // Asegurando que el usuario me ponga los datos correctos
    // Utilizo el .trim() para eliminar los espacios en blanco
    if (!nombre.trim()) {
        alert("Favor de ingresar su nombre");
        return;
    };

    if (!email.trim()) {
        alert("Por Favor poner su email");
        return;
    } else if (!email.includes("@")) {
        alert("Incluya tambien un signo de @ en su email");
        return;
    }

    if (!contrasena.trim()) {
        alert("Introduzca una contraseña tambien");
        return;
    }


    // Guardando los datos del formulario en el localStorge
    let guardarDatosUsuario = {
        nombre : nombre,
        email : email,
        contrasena : contrasena,
        genero : genero
    };


    // Guardando como JSON los datos del formulario
    let jsonData = JSON.stringify(guardarDatosUsuario);

    localStorage.setItem("guardarDatosUsuario", jsonData);

    document.getElementById("myForm").reset();

    alert("Datos guardados correctamente en el localStorage");
    alert("¡Gracias por usar nuestro formulario!");

    location.replace('./extra.html');
    //location.href = './Interfaz1.html';

});


// Con esa funcion controlo el boton de volver de la interfaz3.html
// La interfaz de tutorial
function Volver () {
    location.replace("Interfaz1.html");
}


// Con esa funcion controlo los personajes de extra.html
// Osea interfaz4
function personaje (seleccion) {
    switch (seleccion) {
        case 1: 
        alert("Selecionaste un personaje");
            break;
        case 2:
            alert("Seleccionaste un personaje");
            break;
        case 3:
            alert("Seleccionaste un personaje");
            break;
        case 4:
            alert("Seleccionaste un personaje");
            break;
        default:
            break;
    }
}

// Con esa funcion tambien controlo los botones de extra.html
function regresar (agarrar) {
    switch (agarrar) {
        case 1:
            location.replace("./Interfaz1.html");
            break;
        case 2:
            location.replace("./mini-juego.html");
            break;
        default:
            break;
    }
}

// Con la funcion de silenciar y silenciarmusic controlo
// Los botones de la interfaz2.html
function silenciar(){
    alert("Juego silenciado");
}
function silenciarmusic(){
    alert("Audio del juego silenciado")
}

// Este tambien controlo el boton de volver de la interfaz2.html
function volverdos () {
    location.replace("./Interfaz1.html");   
}