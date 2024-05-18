var puntaje = 0;
function crearContenedor() {
    var contenedor = document.createElement('div');
    contenedor.classList.add('contenedor');
    contenedor.style.backgroundImage = "url('./IMG/PANTALLAS2.png')";
    contenedor.style.backgroundSize = 'cover';
    // Crear la imagen izquierda
    var imagenIzquierda = document.createElement('img');
    imagenIzquierda.src = './IMG/GMWLogo_Color_S2.png';
    imagenIzquierda.style.float = 'left';
    imagenIzquierda.style.width = '15%';
    imagenIzquierda.style.height = 'auto';
// Create the imagenCoin1
var imagenCoin1 = document.createElement('img');
imagenCoin1.src = './IMG/TRANSFER_Coin1.png';
imagenCoin1.style.position = 'absolute';
imagenCoin1.style.bottom = '20%'; // Adjust the bottom position as needed
imagenCoin1.style.right = '10px'; // Adjust the right position as needed
imagenCoin1.style.width = '20%';
imagenCoin1.style.height = 'auto';
contenedor.appendChild(imagenCoin1);

// Create the imagenCoin2
var imagenCoin2 = document.createElement('img');
imagenCoin2.src = './IMG/TRANSFER_Coin2.png';
imagenCoin2.style.position = 'absolute';
imagenCoin2.style.bottom = '20%'; // Adjust the bottom position as needed
imagenCoin2.style.left = '10px'; // Adjust the left position as needed
imagenCoin2.style.width = '20%';
imagenCoin2.style.height = 'auto';
contenedor.appendChild(imagenCoin2);
    // Crear la imagen derecha
    var imagenDerecha = document.createElement('img');
    imagenDerecha.src = './IMG/TRANSFERLogo_WB_S1.png';
    imagenDerecha.style.float = 'right';
    imagenDerecha.style.width = '25%';
    imagenDerecha.style.height = 'auto';
    // Agregar las imágenes al contenedor
    contenedor.appendChild(imagenIzquierda);
    contenedor.appendChild(imagenDerecha);
    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contenedor);

    //BOTON INICIO
    var boton_inicio = document.createElement('button');
    boton_inicio.textContent = 'Empezar';
    boton_inicio.classList.add('boton_enviar');
    contenedor.appendChild(boton_inicio);
    document.body.appendChild(contenedor);

    //BOTON RESET
    var boton_reinicio = document.createElement('button');
    boton_reinicio.textContent = 'Reiniciar';
    boton_reinicio.classList.add('boton_recargar');
    contenedor.appendChild(boton_reinicio);
    document.body.appendChild(contenedor);
    boton_reinicio.style.display = 'none';

    // Instrucciones del juego
    var instrucciones = document.createElement('p');
    instrucciones.textContent = "Introduce los datos del destinatario, cada destinatario correcto suma 1 punto. Recuerda que los correos llevan @ más .com y las cuentas tienen 16 dígitos";
    instrucciones.classList.add('instrucciones');
    instrucciones.style.width = '37%' ;
    instrucciones.style.color = 'white';
    contenedor.appendChild(instrucciones);
    

    function iniciarCuentaAtras() {
        var segundos = 45; // Cambia el valor a la cantidad de segundos que desees
        var mostrarContador = document.createElement('div');
        mostrarContador.className = 'mostrar-contador';
        document.body.appendChild(mostrarContador);
        var cuentaAtras = setInterval(function() {
            mostrarContador.textContent = segundos;
            segundos--;
            if (segundos < 0) {
                clearInterval(cuentaAtras);
                mostrarContador.textContent = '¡Tiempo terminado!'; // Cambia el texto a vacío
                setTimeout(function() {
                    // Ocultar el texto después de 1 segundo
                    mostrarContador.style.display = 'none';
                }, 1000);
                // Acción adicional después de que la cuenta atrás termine
                boton_enviar.style.display = 'none';
                texto_nombre.style.display = 'none';
                campo_nombre.style.display = 'none';
                texto_correo.style.display = 'none';
                campo_correo.style.display = 'none';
                texto_destino.style.display = 'none';
                campo_destino.style.display = 'none';
                texto_monto.style.display = 'none';
                campo_monto.style.display = 'none';
                feedback_correo.style.display = 'none';
                feedback_destino.style.display = 'none';
                feedback_monto.style.display = 'none';
                feedback_nombre.style.display = 'none';
                boton_puntaje.classList.add('boton_puntajefinal');
                boton_reinicio.classList.remove('boton_recargar'); // Quita la clase 'boton_recargar'
                boton_reinicio.classList.add('boton_reinicio'); // Añade la clase 'boton_reinicio'
                texto_banco2.style.display = 'none';
                dropdown.style.display = 'none';
            }
        }, 1000); // Actualizar el contador cada segundo (1000 milisegundos)
    }

    // Después de hacer clic, iniciar la cuenta atrás
    boton_inicio.addEventListener('click', function() {
    iniciarCuentaAtras();
    boton_inicio.style.display = 'none';
    boton_enviar.style.display = 'block';
    boton_puntaje.style.display = 'block';
    texto_nombre.style.display = 'block';
    campo_nombre.style.display = 'block';
    texto_correo.style.display = 'block';
    campo_correo.style.display = 'block';
    texto_destino.style.display = 'block';
    campo_destino.style.display = 'block';
    texto_monto.style.display = 'block';
    campo_monto.style.display = 'block';
    boton_reinicio.style.display = 'block';
    instrucciones.style.display = 'none';
    dropdown.style.display = 'block';
    texto_banco2.style.display = 'block';


    });    

    boton_reinicio.addEventListener('click', function() {
        location.reload();
    });    

    // Crear el botón puntaje
    var boton_puntaje = document.createElement('button');
    boton_puntaje.textContent = puntaje.toString()+' Puntos';
    boton_puntaje.classList.add('boton_puntaje');
    contenedor.appendChild(boton_puntaje);
    boton_puntaje.style.display = 'none';
    //BOTON ENVIAR
    var boton_enviar = document.createElement('button');
    boton_enviar.textContent = 'TRANSFERIR';
    boton_enviar.classList.add('boton_enviar');
    contenedor.appendChild(boton_enviar);
    boton_enviar.style.display = 'none'; 
    // Crear elemento para feedback_nombre
    var feedback_nombre = document.createElement('div');
    feedback_nombre.textContent = 'Solo se permiten letras.';
    feedback_nombre.classList.add('feedback_nombre');
    contenedor.appendChild(feedback_nombre);
    feedback_nombre.style.display = 'none'; 
    feedback_nombre.style.top = '36%';
    // Crear elemento para feedback_monto
    var feedback_monto = document.createElement('div');
    feedback_monto.textContent = 'No se permiten letras.';
    feedback_monto.classList.add('feedback_nombre');
    contenedor.appendChild(feedback_monto);
    feedback_monto.style.display = 'none';
    feedback_monto.style.top = '66%';

    // Crear elemento para feedback_destino
    var feedback_destino = document.createElement('div');
    feedback_destino.textContent = 'Máximo 16 Números.';
    feedback_destino.classList.add('feedback_nombre');
    contenedor.appendChild(feedback_destino);
    feedback_destino.style.display = 'none';
    feedback_destino.style.top = '56%';

    // Crear elemento para feedback_correo
    var feedback_correo = document.createElement('div');
    feedback_correo.textContent = 'Debe Incluir @ y .com';
    feedback_correo.classList.add('feedback_nombre');
    contenedor.appendChild(feedback_correo);
    feedback_correo.style.display = 'none';
    feedback_correo.style.top = '46%';
    //Texto NOMBRE
    var texto_nombre = document.createElement('span');
    texto_nombre.textContent = 'Nombre:';
    texto_nombre.classList.add('texto_de_campo');
    contenedor.appendChild(texto_nombre);
    texto_nombre.style.top = '36%';
    texto_nombre.style.display = 'none';
    //CAMPO NOMBRE
    var campo_nombre = document.createElement('input');
    campo_nombre.type = 'text';
    campo_nombre.placeholder = 'INTRODUZCA el nombre';
    campo_nombre.classList.add('campo_a_llenar');
    campo_nombre.style.display = 'none';
    campo_nombre.style.top = '40%';
    contenedor.appendChild(campo_nombre);

    //CAMPO BANCO
    var dropdown = document.createElement('select');
    var options_banco = ['Banco 1', 'Banco 2', 'Banco 3'];
    // Create a default placeholder option
    var placeholderOption = document.createElement('option');
    placeholderOption.text = 'Institución de destino';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    dropdown.add(placeholderOption);
    // Loop options_banco array and add them to the dropdown
    options_banco.forEach(function(optionText) {
        var option = document.createElement('option');
        option.text = optionText;
        dropdown.add(option);
    });
    // Set any additional attributes or styles for the dropdown menu
    dropdown.classList.add('dropdown_menu');
    dropdown.style.display = 'none'; // Initially hide the dropdown menu
    contenedor.appendChild(dropdown);

        //Texto banco destino
        var texto_banco2 = document.createElement('span');
        texto_banco2.textContent = 'Destino:';
        texto_banco2.classList.add('texto_de_campo');
        contenedor.appendChild(texto_banco2);
        texto_banco2.style.top = '25%';
        texto_banco2.style.display = 'none';

    //Texto Correo
    var texto_correo = document.createElement('span');
    texto_correo.textContent = 'Correo:';
    texto_correo.classList.add('texto_de_campo');
    contenedor.appendChild(texto_correo);
    texto_correo.style.top = '46%';
    texto_correo.style.display = 'none';
    //CAMPO CORREO
    var campo_correo = document.createElement('input');
    campo_correo.type = 'text';
    campo_correo.placeholder = 'Correo';
    campo_correo.classList.add('campo_a_llenar');
    campo_correo.style.display = 'none';
    campo_correo.style.top = '50%';
    contenedor.appendChild(campo_correo);
    //Texto destino
    var texto_destino = document.createElement('span');
    texto_destino.textContent = 'Cuenta:';
    texto_destino.classList.add('texto_de_campo');
    contenedor.appendChild(texto_destino);
    texto_destino.style.top = '56%';
    texto_destino.style.display = 'none';
    //CAMPO DESTINO
    var campo_destino = document.createElement('input');
    campo_destino.type = 'text';
    campo_destino.placeholder = 'Destinatario';
    campo_destino.classList.add('campo_a_llenar');
    campo_destino.style.display = 'none';
    campo_destino.style.top = '60%';
    contenedor.appendChild(campo_destino);
    //Texto monto
    var texto_monto = document.createElement('span');
    texto_monto.textContent = 'Monto: $';
    texto_monto.classList.add('texto_de_campo');
    contenedor.appendChild(texto_monto);
    texto_monto.style.top = '66%';
    texto_monto.style.display = 'none';        
    //CAMPO MONTO
    var campo_monto = document.createElement('input');
    campo_monto.type = 'text';
    campo_monto.placeholder = 'Cantidad';
    campo_monto.classList.add('campo_a_llenar');
    campo_monto.style.display = 'none';
    campo_monto.style.top= '70%';
    contenedor.appendChild(campo_monto);

    // Eventos de entrada para validar campos
    campo_nombre.addEventListener('input', function() {
        var valorOriginal = this.value;
        this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
        if (valorOriginal !== this.value) {
            feedback_nombre.style.display = 'block';
        } else {
            feedback_nombre.style.display = 'none';
        }
    });
    campo_destino.addEventListener('input', function() {
        var valorOriginal = this.value;
        this.value = this.value.replace(/[^0-9.,]/g, '');
        if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
        }
        if (valorOriginal !== this.value) {
        feedback_destino.style.display = 'block';
        } else {
        feedback_destino.style.display = 'none';
        }
    });
    campo_monto.addEventListener('input', function() {
        var valorOriginal2 = this.value;
        this.value = this.value.replace(/[^0-9.,]/g, '');
        if (valorOriginal2 !== this.value) {
            feedback_monto.style.display = 'block';
        } else {
            feedback_monto.style.display = 'none';
        }
    });

    // Clic en el botón Enviar
    boton_enviar.addEventListener('click', function() {
    // Campos están llenos
    if (
        campo_nombre.value.trim() !== '' &&
        campo_correo.value.includes('@') &&
        campo_correo.value.includes('.com') &&
        campo_destino.value.trim().length === 16 &&
        campo_monto.value.trim() !== ''
    ) {
        puntaje++;
        boton_puntaje.textContent = puntaje.toString() + (puntaje === 1 ? ' Punto' : ' Puntos');
        console.log("Puntaje actual: " + puntaje);
        // Más acciones relacionadas con el envío
    } else {
        feedback_correo.style.display = 'block';
    }
    // Limpiar todos campos solo si están llenos
    campo_nombre.value = '';
    campo_correo.value = '';
    campo_destino.value = '';
    campo_monto.value = '';
});
}
document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});