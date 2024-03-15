// transfer.js

var puntaje = 0;


function crearContenedor() {
    // Crear el contenedor div
    var contenedor = document.createElement('div');

    // Agregar la clase 'contenedor' al div
    contenedor.classList.add('contenedor');

    // Crear la imagen izquierda
    var imagenIzquierda = document.createElement('img');
    imagenIzquierda.src = './IMG/GMWLogo_Color_S1.png'; // Cambia 'ruta/de/tu/imagen1.jpg' por la ruta real de tu imagen izquierda
    imagenIzquierda.style.float = 'left'; // Alinear a la izquierda
    imagenIzquierda.style.width = '25%'; // Establecer el ancho de la imagen
    imagenIzquierda.style.height = 'auto'; // Ajustar automáticamente la altura
    

    // Crear la imagen derecha
    var imagenDerecha = document.createElement('img');
    imagenDerecha.src = './IMG/TRANSFERLogo_BW_S1.png'; // Cambia 'ruta/de/tu/imagen2.jpg' por la ruta real de tu imagen derecha
    imagenDerecha.style.float = 'right'; // Alinear a la derecha
    imagenDerecha.style.width = '25%'; // Establecer el ancho de la imagen
    imagenDerecha.style.height = 'auto'; // Ajustar automáticamente la altura


    // Agregar las imágenes al contenedor
    contenedor.appendChild(imagenIzquierda);
    contenedor.appendChild(imagenDerecha);

    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contenedor);

        //BOTON INICIO
    var boton_inicio = document.createElement('button');
    boton_inicio.textContent = 'Empezar'; // Texto del botón
    // Agregar la clase 'boton_inicio' al botón
    boton_inicio.classList.add('boton_inicio');
    // Agregar el botón al contenedor
    contenedor.appendChild(boton_inicio);
    // Agregar el contenedor al cuerpo del documento
    document.body.appendChild(contenedor);
    // Manejar el evento de clic en el botón
    boton_inicio.addEventListener('click', function() {
    // Después de hacer clic, iniciar la cuenta atrás
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

    });    


    // Crear el botón puntaje
    var boton_puntaje = document.createElement('button');
    boton_puntaje.textContent = puntaje.toString()+' Puntos'; // Texto del botón es el valor de la variable puntaje
    // Agregar la clase 'boton_puntaje' al botón
    boton_puntaje.classList.add('boton_puntaje');
    // Agregar el botón puntaje al contenedor
    contenedor.appendChild(boton_puntaje);
    boton_puntaje.style.display = 'none'; // Ocultar el campo de texto inicialmente


        //BOTON ENVIAR
    var boton_enviar = document.createElement('button');
    boton_enviar.textContent = 'Enviar'; // Texto del botón
    // Agregar la clase 'boton_enviar' al botón
    boton_enviar.classList.add('boton_enviar');
    // Agregar el botón al contenedor
    contenedor.appendChild(boton_enviar);
    // Ocultar el botón enviar inicialmente
    boton_enviar.style.display = 'none'; 

    // Crear elemento para feedback_nombre
    var feedback_nombre = document.createElement('div');
    feedback_nombre.textContent = 'Solo se permiten letras.'; // Mensaje de feedback_nombre
    feedback_nombre.classList.add('feedback_nombre'); // Agregar clase 'feedback_nombre' al elemento
    contenedor.appendChild(feedback_nombre); // Agregar el feedback_nombre al contenedor
    feedback_nombre.style.display = 'none'; // Ocultar el feedback_nombre inicialmente

   // Crear elemento para feedback_monto
   var feedback_monto = document.createElement('div');
   feedback_monto.textContent = 'No se permiten letras.'; // Mensaje de feedback_nombre
   feedback_monto.classList.add('feedback_monto'); // Agregar clase 'feedback_nombre' al elemento
   contenedor.appendChild(feedback_monto); // Agregar el feedback_nombre al contenedor
   feedback_monto.style.display = 'none'; // Ocultar el feedback_nombre inicialmente    

   // Crear elemento para feedback_destino
   var feedback_destino = document.createElement('div');
   feedback_destino.textContent = 'Máximo 16 Números.'; // Mensaje de feedback_nombre
   feedback_destino.classList.add('feedback_destino'); // Agregar clase 'feedback_nombre' al elemento
   contenedor.appendChild(feedback_destino); // Agregar el feedback_nombre al contenedor
   feedback_destino.style.display = 'none'; // Ocultar el feedback_nombre inicialmente       

    // Crear elemento para feedback_correo
    var feedback_correo = document.createElement('div');
    feedback_correo.textContent = 'Debe Incluir @ y .com'; // Mensaje de feedback_nombre
    feedback_correo.classList.add('feedback_correo'); // Agregar clase 'feedback_nombre' al elemento
    contenedor.appendChild(feedback_correo); // Agregar el feedback_nombre al contenedor
    feedback_correo.style.display = 'none'; // Ocultar el feedback_nombre inicialmente   


    
    //Texto NOMBRE
    var texto_nombre = document.createElement('span');
    texto_nombre.textContent = 'Nombre:';
    texto_nombre.classList.add('texto_nombre'); // Agregar clase 'texto_nombre' al elemento
    contenedor.appendChild(texto_nombre); // Agregar el texto_nombre al contenedor
    texto_nombre.style.display = 'none'; // Ocultar el campo de texto inicialmente


    //CAMPO NOMBRE
    var campo_nombre = document.createElement('input');
    campo_nombre.type = 'text'; // Establecer el tipo como texto
    campo_nombre.placeholder = 'Nombre'; // Placeholder del campo
    campo_nombre.classList.add('campo_nombre'); // Agregar clase 'campo_nombre' al campo de texto
    campo_nombre.style.display = 'none'; // Ocultar el campo de texto inicialmente
    contenedor.appendChild(campo_nombre); // Agregar el campo de texto al contenedor

    //Texto Correo
    var texto_correo = document.createElement('span');
    texto_correo.textContent = 'Correo:';
    texto_correo.classList.add('texto_correo');
    contenedor.appendChild(texto_correo);
    texto_correo.style.display = 'none';

    //CAMPO CORREO
    var campo_correo = document.createElement('input');
    campo_correo.type = 'text'; // Establecer el tipo como texto
    campo_correo.placeholder = 'Correo'; // Placeholder del campo
    campo_correo.classList.add('campo_correo'); // Agregar clase 'campo_nombre' al campo de texto
    campo_correo.style.display = 'none'; // Ocultar el campo de texto inicialmente
    contenedor.appendChild(campo_correo); // Agregar el campo de texto al contenedor 

    //Texto destino
    var texto_destino = document.createElement('span');
    texto_destino.textContent = 'Transferir A:';
    texto_destino.classList.add('texto_destino');
    contenedor.appendChild(texto_destino);
    texto_destino.style.display = 'none';
    
    //CAMPO DESTINO
    var campo_destino = document.createElement('input');
    campo_destino.type = 'text'; // Establecer el tipo como texto
    campo_destino.placeholder = 'Destinatario'; // Placeholder del campo
    campo_destino.classList.add('campo_destino'); // Agregar clase 'campo_nombre' al campo de texto
    campo_destino.style.display = 'none'; // Ocultar el campo de texto inicialmente
    contenedor.appendChild(campo_destino); // Agregar el campo de texto al contenedor
    
    //Texto monto
    var texto_monto = document.createElement('span');
    texto_monto.textContent = 'Monto: $';
    texto_monto.classList.add('texto_monto');
    contenedor.appendChild(texto_monto);
    texto_monto.style.display = 'none';        

    
    //CAMPO MONTO
    var campo_monto = document.createElement('input');
    campo_monto.type = 'text'; // Establecer el tipo como texto
    campo_monto.placeholder = 'Cantidad'; // Placeholder del campo
    campo_monto.classList.add('campo_monto'); // Agregar clase 'campo_nombre' al campo de texto
    campo_monto.style.display = 'none'; // Ocultar el campo de texto inicialmente
    contenedor.appendChild(campo_monto); // Agregar el campo de texto al contenedor 

    // Agregar un evento de entrada para validar la entrada del usuario NOMBRE
    campo_nombre.addEventListener('input', function() {
        // Guardar el valor original del campo de nombre
        var valorOriginal = this.value;
    
        // Eliminar los caracteres que no sean letras
        this.value = this.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
    
        // Verificar si el valor ha cambiado después de la limpieza
        if (valorOriginal !== this.value) {
            feedback_nombre.style.display = 'block';
        } else {
            feedback_nombre.style.display = 'none';
        }
    });

    // Agregar un evento de entrada para validar el campo destino
    campo_destino.addEventListener('input', function() {
    // Guardar el valor original del campo destino
    var valorOriginal = this.value;

    // Eliminar los caracteres que no sean números, puntos o comas
    this.value = this.value.replace(/[^0-9.,]/g, '');

    // Verificar si la longitud del valor excede los 16 caracteres
    if (this.value.length > 16) {
        // Recortar el valor para que tenga solo 16 caracteres
        this.value = this.value.slice(0, 16);
    }

    // Verificar si el valor ha cambiado después de la limpieza
    if (valorOriginal !== this.value) {
        feedback_destino.style.display = 'block';
    } else {
        feedback_destino.style.display = 'none';
    }
});


    // Agregar un evento de entrada para validar la entrada del usuario MONTO
    campo_monto.addEventListener('input', function() {
        // Guardar el valor original del campo de monto
        var valorOriginal2 = this.value;
    
        // Eliminar los caracteres que no sean numeros, puntos o comas
        this.value = this.value.replace(/[^0-9.,]/g, '');
    
        // Verificar si el valor ha cambiado después de la limpieza
        if (valorOriginal2 !== this.value) {
            feedback_monto.style.display = 'block';
        } else {
            feedback_monto.style.display = 'none';
        }
    });




// Manejar el evento de clic en el botón enviar
boton_enviar.addEventListener('click', function() {
    // Verificar si todos los campos están llenos antes de realizar acciones adicionales
    if (
        campo_nombre.value.trim() !== '' &&
        campo_correo.value.includes('@') &&
        campo_correo.value.includes('.com') &&
        campo_destino.value.trim().length === 16 &&
        campo_monto.value.trim() !== ''
    ) {
        // Si todos los campos están llenos, agregar un punto a la variable puntaje
        puntaje++;
        // Actualizar el texto del botón puntaje con el nuevo valor de la variable puntaje
        boton_puntaje.textContent = puntaje.toString() + (puntaje === 1 ? ' Punto' : ' Puntos');
        // Mostrar el valor actual de la variable puntaje en la consola
        console.log("Puntaje actual: " + puntaje);
        // Aquí puedes agregar más acciones relacionadas con el envío si lo deseas
    } else {
        // Mostrar mensaje de feedback para correo inválido si no se cumplen los requisitos
        feedback_correo.style.display = 'block';
    }
    // Limpiar todos los campos solo si se ha verificado que todos están llenos
    campo_nombre.value = '';
    campo_correo.value = '';
    campo_destino.value = '';
    campo_monto.value = '';
});



}

document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});

function iniciarCuentaAtras() {
    var segundos = 10; // Cambia el valor a la cantidad de segundos que desees
    var mostrarContador = document.createElement('div');
    mostrarContador.style.fontSize = '20px';
    mostrarContador.style.textAlign = 'center';
    mostrarContador.style.fontFamily = 'Pixeled'; // Cambiar el tipo de letra a Pixeled
    mostrarContador.style.color = 'white'; // Cambiar el color del texto a blanco
    document.body.appendChild(mostrarContador);

    var cuentaAtras = setInterval(function() {
        mostrarContador.textContent = segundos;

        segundos--;

        if (segundos < 0) {
            clearInterval(cuentaAtras);
            mostrarContador.textContent = '¡Tiempo terminado!';
            // Aquí puedes agregar cualquier acción adicional después de que la cuenta atrás termine


        }
    }, 1000); // Actualizar el contador cada segundo (1000 milisegundos)
}

document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});