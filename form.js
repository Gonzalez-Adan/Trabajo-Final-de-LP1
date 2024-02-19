function salir() {
    window.location.href ="Interfaz1.html";
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    // Evita que se envíe el formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;
    const genero = document.getElementById('genero').value;

    if (!nombre || !email || !contrasena || !genero) {
        mostrarAlerta('Por favor, completa todos los campos.');
    } else {
        // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones
        console.log('Datos enviados:', nombre, email, contrasena, genero);
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
});

function mostrarAlerta(mensaje) {
    const alerta = document.createElement('div');
    alerta.className = 'alerta';
    alerta.textContent = mensaje;
    document.body.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
function Volver () {
    window.location.href = "Interfaz1.html";
}




