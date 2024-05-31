// Funcion Aceptar
function aceptarSolicitud(boton) {
    
    let solicitud = boton.parentNode; // El parentNode es una propiedad que obtiene el nodo (div) padre de la linea que estamos seleccionando
    // Remover la solicitud al hacerle click
    solicitud.remove();

    //Para disminuir la cantidad de solicitudes
    let cantidadSolicitudesElemento = document.querySelector('.solicitudes-cantidad .cantidad');
    let cantidadSolicitudes = Number(cantidadSolicitudesElemento.innerText);
    cantidadSolicitudes--;
    cantidadSolicitudesElemento.innerText = cantidadSolicitudes;

    // Incrementar la cantidad de conexiones
    let cantidadConexionesElemento = document.querySelector('.conexiones-cantidad .num-conexiones');
    let cantidadConexiones = parseInt(cantidadConexionesElemento.innerText);
    cantidadConexiones++;
    cantidadConexionesElemento.innerText = cantidadConexiones;
}

// Funcion Rechazar

function rechazarSolicitud(boton) {
    
    let solicitud = boton.parentNode;

   
    solicitud.remove();

    let cantidadSolicitudesElemento = document.querySelector('.solicitudes-cantidad .cantidad');
    let cantidadSolicitudes = Number(cantidadSolicitudesElemento.innerText);
    cantidadSolicitudes--;
    cantidadSolicitudesElemento.innerText = cantidadSolicitudes;
}

//Funcion Cambiar nombre de Jane Doe

function cambiarNombre() {
    
    let nombreJane = document.querySelector('.nombre h1'); // .nombre porque es el div que le contiene al h1
    nombreJane.innerText = 'Juan Perez'; // para definir el nuevo valor del texto
}