function crearControles() {
    var controles = document.createElement('div');
    controles.classList.add('controles');
    // BOTON E
    var boton_e = document.createElement('button');
    boton_e.textContent = 'Empezar';
    boton_e.classList.add('boton_e');

    boton_e.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'e',
            keyCode: 78, // Código de tecla para la tecla 'E'
            which: 78   // También se necesita para navegadores antiguos
        });
        document.dispatchEvent(evento);
    });

    controles.appendChild(boton_e);
    document.body.appendChild(controles);
}

document.addEventListener('DOMContentLoaded', function() {
    crearControles();
});
