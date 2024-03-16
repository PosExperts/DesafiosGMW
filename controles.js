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
            keyCode: 78,
            which: 78
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_e);
    document.body.appendChild(controles);
    // BOTON P
    var boton_p = document.createElement('button');
    boton_p.textContent = 'Pausa';
    boton_p.classList.add('boton_p');

    boton_p.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'e',
            keyCode: 80,
            which: 80
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_p);
    document.body.appendChild(controles);
    // BOTON UP
    var boton_up = document.createElement('button');
    boton_up.textContent = '▲';
    boton_up.classList.add('boton_up');
    boton_up.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'ArrowUp',
            keyCode: 38,
            which: 38
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_up);
    document.body.appendChild(controles);
    // BOTON DOWN
    var boton_down = document.createElement('button');
    boton_down.textContent = '▼';
    boton_down.classList.add('boton_down');
    boton_down.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            keyCode: 40,
            which: 40
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_down);
    document.body.appendChild(controles);
    // BOTON RIGHT
    var boton_right = document.createElement('button');
    boton_right.textContent = '►';
    boton_right.classList.add('boton_right');
    boton_right.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            keyCode: 39,
            which: 39
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_right);
    document.body.appendChild(controles);
    // BOTON LEFT
    var boton_left = document.createElement('button');
    boton_left.textContent = '◄';
    boton_left.classList.add('boton_left');
    boton_left.addEventListener('click', function() {
        var evento = new KeyboardEvent('keydown', {
            key: 'ArrowLeft',
            keyCode: 37,
            which: 37
        });
        document.dispatchEvent(evento);
    });
    controles.appendChild(boton_left);
    document.body.appendChild(controles);
}

document.addEventListener('DOMContentLoaded', function() {
    crearControles();
});
