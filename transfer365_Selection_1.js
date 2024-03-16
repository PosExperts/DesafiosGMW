var puntaje = 0;
function crearContenedor() {
    var contenedor = document.createElement('div');
    contenedor.classList.add('contenedor365');
    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contenedor);

    //BOTON INICIO
    var boton_inicio = document.createElement('button');
    boton_inicio.textContent = 'Empezar';
    boton_inicio.classList.add('boton_inicio365');
    contenedor.appendChild(boton_inicio);
    document.body.appendChild(contenedor);
    // Instrucciones del juego
    var instrucciones = document.createElement('p');
    instrucciones.textContent = "Introduce los datos del destinatario, cada destinatario correcto suma 1 punto! Recuerda que los correos llevan @ más .com y las cuentas tienen 16 dígitos";
    instrucciones.classList.add('instrucciones365');
    contenedor.appendChild(instrucciones);
    //Texto NOMBRE
    var texto_nombre = document.createElement('span');
    texto_nombre.textContent = 'Nombre:';
    texto_nombre.classList.add('texto_nombre365');
    contenedor.appendChild(texto_nombre);
    texto_nombre.style.display = 'block';
    //CAMPO NOMBRE
    var campo_nombre = document.createElement('input');
    campo_nombre.type = 'text';
    campo_nombre.placeholder = 'Nombre';
    campo_nombre.classList.add('campo_nombre365');
    campo_nombre.style.display = 'block';
    contenedor.appendChild(campo_nombre);
};
document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});