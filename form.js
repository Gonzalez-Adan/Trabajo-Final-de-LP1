
function salir() {
    alert("Saliendo del formulario");
}

document.getElementById('registro-form').addEventListener('submit', function (event) {
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

