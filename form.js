function salir () {
    location.replace("./Interfaz1.html");
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    // Evita que se envíe el formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;


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


    let guardarDatosUsuario = {
        nombre : nombre,
        email : email,
        contrasena : contrasena,
        genero : genero
    };

    let jsonData = JSON.stringify(guardarDatosUsuario);

    localStorage.setItem("guardarDatosUsuario", jsonData);

    document.getElementById("myForm").reset();

    alert("Datos guardados correctamente en el localStorage");
    alert("¡Gracias por usar nuestro formulario!");

    location.replace('./extra.html');
    //location.href = './Interfaz1.html';

});

function Volver () {
    location.replace("Interfaz1.html");
}


