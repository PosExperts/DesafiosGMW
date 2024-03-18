var emisor = "Cuentas";
var monto = 0;
var Balance_1 = 35;
var Balance_2 = 35;
var Balance_3 = 35;
var receptor = 'none';
var precio = 80;

function crearContenedor() {

    var contenedor = document.createElement('div');
    contenedor.classList.add('contenedor365');
    document.body.appendChild(contenedor);

    function updateReceptorText (){
        if (receptor=='Balance_1'){
            texto_receptor.textContent='Jugador 1'
        }
        else if (receptor=='Balance_2'){
            texto_receptor.textContent='Jugador 2'
        }
        else if (receptor=='Balance_3'){
            texto_receptor.textContent='Jugador 3'
        };
    }
    function updateMonto() {
        cantidad_transferir.textContent = '$' + monto;
        cantidad_transferir2.textContent = '$' + monto;
    }
    function updateBalancesLog() {
        balances_log.textContent = Balance_1 + " " + Balance_2 + " " + Balance_3;
    }
    function seleccion_equipo() {
        boton_tienda.style.display = 'block';
        boton_transferir.style.display = 'block';
        boton_atras.style.display = 'block';
        instrucciones.style.display = 'none';
        boton_atras2.style.display = 'none';
        boton_masmonto.style.display = 'none';
        boton_confirmar_monto.style.display = 'none';
        boton_menosmonto.style.display = 'none';
        cantidad_transferir.style.display = 'none';
        var botones_equipos = document.querySelectorAll('.botones_jugadores365');
        botones_equipos.forEach(function(button) {
            button.style.display = 'none';
        });
    }
    function ventana_equipo() {
        boton_tienda.style.display = 'none';
        boton_transferir.style.display = 'none';
        boton_atras.style.display = 'none';
        instrucciones.style.display = 'block';
        var botones_equipos = document.querySelectorAll('.botones_jugadores365');
        botones_equipos.forEach(function(button) {
            button.style.display = 'block';
        });
    }

    //LOGO I
    var producto = document.createElement('img');
    producto.src='./IMG/GMWLogo_Color_S1.png';
    producto.style.display = 'block';
    producto.style.width = '125px';
    producto.style.height = 'auto';
    producto.style.position = 'absolute';
    producto.style.top = '15%';
    producto.style.left = '17%';
    producto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(producto);
    //LOGO D
    var producto = document.createElement('img');
    producto.src='./IMG/TRANSFERLogo_B_S1.png';
    producto.style.display = 'block';
    producto.style.width = '95px';
    producto.style.height = 'auto';
    producto.style.position = 'absolute';
    producto.style.top = '16%';
    producto.style.left = '85%';
    producto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(producto);




    var texto_titulo = document.createElement('span');
    texto_titulo.textContent = emisor;
    texto_titulo.classList.add('titulo365');
    texto_titulo.style.top = '16%';
    texto_titulo.style.left = '50%';
    texto_titulo.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(texto_titulo);
        //SIN FONDOS
        var texto_sinfondos = document.createElement('span');
        texto_sinfondos.textContent = 'No tienes los fondos necesarios para realizar la transferencia!';
        texto_sinfondos.classList.add('sinfondo');
        texto_sinfondos.style.top = '50%';
        texto_sinfondos.style.left = '50%';
        texto_sinfondos.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(texto_sinfondos);
        texto_sinfondos.style.display = 'none';

        //APROBADA
        var texto_transaccion_aprobada = document.createElement('span');
        texto_transaccion_aprobada.textContent = '¡Transacción Exitosa!';
        texto_transaccion_aprobada.classList.add('transaccion_aprobada');
        texto_transaccion_aprobada.style.top = '50%';
        texto_transaccion_aprobada.style.left = '50%';
        texto_transaccion_aprobada.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(texto_transaccion_aprobada);
        texto_transaccion_aprobada.style.display = 'none';

        //RECEPTOR
        var texto_receptor = document.createElement('span');
        texto_receptor.textContent = receptor;
        texto_receptor.classList.add('titulo365');
        texto_receptor.style.top = '60%';
        texto_receptor.style.left = '50%';
        texto_receptor.style.fontSize = '20';
        texto_receptor.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(texto_receptor);
        texto_receptor.style.display = 'none';
    //BOTON Jugador 1
    var boton_jugador1 = document.createElement('button');
    boton_jugador1.textContent = 'Jugador 1';
    boton_jugador1.classList.add('botones_jugadores365');
    boton_jugador1.style.position = 'absolute';
    boton_jugador1.style.top = '34%'
    boton_jugador1.style.left = '50%'
    boton_jugador1.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_jugador1);
    document.body.appendChild(contenedor);
        //BOTON Jugador 1B
        var boton_jugador1b = document.createElement('button');
        boton_jugador1b.textContent = 'a Jugador 1';
        boton_jugador1b.classList.add('botones_jugadores365');
        boton_jugador1b.style.position = 'absolute';
        boton_jugador1b.style.top = '34%'
        boton_jugador1b.style.left = '50%'
        boton_jugador1b.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(boton_jugador1b);
        document.body.appendChild(contenedor);
        boton_jugador1b.style.display = 'none';
        //BOTON Jugador 2B
        var boton_jugador2b = document.createElement('button');
        boton_jugador2b.textContent = 'a Jugador 2';
        boton_jugador2b.classList.add('botones_jugadores365');
        boton_jugador2b.style.position = 'absolute';
        boton_jugador2b.style.top = '49%'
        boton_jugador2b.style.left = '50%'
        boton_jugador2b.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(boton_jugador2b);
        document.body.appendChild(contenedor);
        boton_jugador2b.style.display = 'none';
        //BOTON Jugador 3B
        var boton_jugador3b = document.createElement('button');
        boton_jugador3b.textContent = 'a Jugador 3';
        boton_jugador3b.classList.add('botones_jugadores365');
        boton_jugador3b.style.position = 'absolute';
        boton_jugador3b.style.top = '64%'
        boton_jugador3b.style.left = '50%'
        boton_jugador3b.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(boton_jugador3b);
        document.body.appendChild(contenedor);
        boton_jugador3b.style.display = 'none';
    //BOTON Jugador 2
    var boton_jugador2 = document.createElement('button');
    boton_jugador2.textContent = 'Jugador 2';
    boton_jugador2.classList.add('botones_jugadores365');
    boton_jugador2.style.position = 'absolute';
    boton_jugador2.style.top = '50%'
    boton_jugador2.style.left = '50%'
    boton_jugador2.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_jugador2);
    document.body.appendChild(contenedor);
    //BOTON Jugador 3
    var boton_jugador3 = document.createElement('button');
    boton_jugador3.textContent = 'Jugador 3';
    boton_jugador3.classList.add('botones_jugadores365');
    boton_jugador3.style.position = 'absolute';
    boton_jugador3.style.top = '66%'
    boton_jugador3.style.left = '50%'
    boton_jugador3.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_jugador3);
    document.body.appendChild(contenedor);    
    // Instrucciones
    var instrucciones = document.createElement('p');
    instrucciones.textContent = "Selecciona una cuenta";
    instrucciones.classList.add('instrucciones365');
    instrucciones.style.top = '82%';
    instrucciones.style.left = '50%';
    instrucciones.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(instrucciones);
    // SUBTITULO
    var subtitulo = document.createElement('p');
    subtitulo.textContent = "Cantidad a transferir:";
    subtitulo.classList.add('instrucciones365');
    subtitulo.style.top = '19%';
    subtitulo.style.left = '50%';
    subtitulo.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(subtitulo);
    subtitulo.style.display = 'none';

    boton_jugador1.addEventListener('click', function() {
        emisor = 'Jugador 1';
        texto_titulo.textContent = emisor;
        seleccion_equipo();
        subtitulo.style.display = 'block';
        subtitulo.textContent = 'Tienes';
        balance_de_cuenta.style.display = 'block';
        balance_de_cuenta.textContent = "$"+Balance_1;
    });
    boton_jugador2.addEventListener('click', function() {
        emisor = 'Jugador 2';
        texto_titulo.textContent = emisor;
        seleccion_equipo();
        subtitulo.style.display = 'block';
        subtitulo.textContent = 'Tienes';
        balance_de_cuenta.style.display = 'block';
        balance_de_cuenta.textContent = "$"+Balance_2;
    });
    boton_jugador3.addEventListener('click', function() {
        emisor = 'Jugador 3';
        texto_titulo.textContent = emisor;
        seleccion_equipo();
        subtitulo.style.display = 'block';
        subtitulo.textContent = 'Tienes';
        balance_de_cuenta.style.display = 'block';
        balance_de_cuenta.textContent = "$"+Balance_3;
    });
    //BOTON ATRAS
    var boton_atras = document.createElement('button');
    boton_atras.textContent = 'Atrás';
    boton_atras.classList.add('botones_365_Atras');
    boton_atras.style.position = 'absolute';
    boton_atras.style.top = '88%'
    boton_atras.style.left = '50%'
    boton_atras.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_atras);
    document.body.appendChild(contenedor);   
    boton_atras.style.display = 'none';
    boton_atras.addEventListener('click', function() {
        emisor = 'Cuentas';
        texto_titulo.textContent = emisor;
        ventana_equipo();
        subtitulo.style.display = 'none';
        balance_de_cuenta.style.display = 'none';
        boton_jugador1b.style.display = 'none';
        boton_jugador2b.style.display = 'none';
        boton_jugador3b.style.display = 'none';
        texto_sinfondos.style.display = 'none';
        texto_transaccion_aprobada.style.display = 'none';
        boton_comprar.style.display = 'none';
        cantidad_precio.style.display = 'none';
        producto.style.display = 'none';
    });
    //BOTON ATRAS 2
    var boton_atras2 = document.createElement('button');
    boton_atras2.textContent = 'Atrás';
    boton_atras2.classList.add('botones_365_Atras');
    boton_atras2.style.position = 'absolute';
    boton_atras2.style.top = '88%'
    boton_atras2.style.left = '50%'
    boton_atras2.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_atras2);
    document.body.appendChild(contenedor);   
    boton_atras2.style.display = 'none';
    boton_atras2.addEventListener('click', function() {
        seleccion_equipo();
        monto = 0;
        updateMonto ();
        subtitulo.textContent = 'Tienes';
        balance_de_cuenta.style.display = 'block';
        boton_jugador1b.style.top = '34%'
        boton_jugador2b.style.top = '49%'
        boton_jugador3b.style.top = '64%'
        texto_sinfondos.style.display = 'none';
        texto_transaccion_aprobada.style.display = 'none';
        cantidad_precio.style.display = 'none';
        producto.style.display = 'none';

    });
    //BOTON TIENDA
    var boton_tienda = document.createElement('button');
    boton_tienda.textContent = 'Tienda';
    boton_tienda.classList.add('botones_365_2');
    boton_tienda.style.position = 'absolute';
    boton_tienda.style.top = '75%'
    boton_tienda.style.left = '50%'
    boton_tienda.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_tienda);
    document.body.appendChild(contenedor);   
    boton_tienda.style.display = 'none';
        //BOTON COMPRAR
        var boton_comprar = document.createElement('button');
        boton_comprar.textContent = 'Comprar';
        boton_comprar.classList.add('botones_365_2');
        boton_comprar.style.position = 'absolute';
        boton_comprar.style.top = '75%'
        boton_comprar.style.left = '50%'
        boton_comprar.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(boton_comprar);
        document.body.appendChild(contenedor);   
        boton_comprar.style.display = 'none';
    //BOTON TRANSFERIR
    var boton_transferir = document.createElement('button');
    boton_transferir.textContent = 'Transferir';
    boton_transferir.classList.add('botones_365_2');
    boton_transferir.style.position = 'absolute';
    boton_transferir.style.top = '59%'
    boton_transferir.style.left = '50%'
    boton_transferir.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_transferir);
    document.body.appendChild(contenedor);
    boton_transferir.style.display = 'none';
    boton_transferir.addEventListener('click', function() {
        ir_a_transferir();
        balance_de_cuenta.style.display = 'none';
    });
    function ir_a_transferir() {
        boton_transferir.style.display = 'none';
        boton_tienda.style.display = 'none';
        boton_atras.style.display = 'none';
        boton_atras2.style.display = 'block';
        subtitulo.style.display = 'block';
        subtitulo.textContent = "a que cuenta?"
        if (emisor == 'Jugador 1'){
            boton_jugador2b.style.display = 'block';
            boton_jugador3b.style.display = 'block';
            boton_jugador2b.style.top = '34%'
            boton_jugador3b.style.top = '49%'
        }
        else if (emisor == 'Jugador 2'){
            boton_jugador1b.style.display = 'block';
            boton_jugador3b.style.display = 'block';
            boton_jugador3b.style.top = '49%'
        }
        else if (emisor == 'Jugador 3'){
            boton_jugador1b.style.display = 'block';
            boton_jugador2b.style.display = 'block';
        };
    }
    boton_jugador1b.addEventListener('click', function() {
        monto = 0;
        updateMonto ();
        subtitulo.textContent = 'Cantidad a transferir:';
        cantidad_transferir.style.display = 'block';
        boton_jugador1b.style.display = 'none';
        boton_jugador2b.style.display = 'none';
        boton_jugador3b.style.display = 'none';
        boton_masmonto.style.display = 'block';
        boton_menosmonto.style.display = 'block';
        receptor='Balance_1';
        boton_confirmar_monto.style.display = 'block';
        updateReceptorText ();
    });
    boton_jugador2b.addEventListener('click', function() {
        monto = 0;
        updateMonto ();
        subtitulo.textContent = 'Cantidad a transferir:';
        cantidad_transferir.style.display = 'block';
        boton_jugador1b.style.display = 'none';
        boton_jugador2b.style.display = 'none';
        boton_jugador3b.style.display = 'none';
        boton_masmonto.style.display = 'block';
        boton_menosmonto.style.display = 'block';
        receptor='Balance_2';
        boton_confirmar_monto.style.display = 'block';
        updateReceptorText ();
    });
    boton_jugador3b.addEventListener('click', function() {
        monto = 0;
        updateMonto ();
        subtitulo.textContent = 'Cantidad a transferir:';
        cantidad_transferir.style.display = 'block';
        boton_jugador1b.style.display = 'none';
        boton_jugador2b.style.display = 'none';
        boton_jugador3b.style.display = 'none';
        boton_masmonto.style.display = 'block';
        boton_menosmonto.style.display = 'block';
        receptor='Balance_3';
        boton_confirmar_monto.style.display = 'block';
        updateReceptorText ();
    });
    //BOTON MAS
    var boton_masmonto = document.createElement('button');
    boton_masmonto.textContent = '+';
    boton_masmonto.classList.add('botones_monto');
    boton_masmonto.style.position = 'absolute';
    boton_masmonto.style.top = '52.5%'
    boton_masmonto.style.left = '85%'
    boton_masmonto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_masmonto);
    document.body.appendChild(contenedor);   
    boton_masmonto.style.display = 'none';
    //BOTON MENOS
    var boton_menosmonto = document.createElement('button');
    boton_menosmonto.textContent = '-';
    boton_menosmonto.classList.add('botones_monto');
    boton_menosmonto.style.position = 'absolute';
    boton_menosmonto.style.top = '52.5%'
    boton_menosmonto.style.left = '15%'
    boton_menosmonto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_menosmonto);
    document.body.appendChild(contenedor);   
    boton_menosmonto.style.display = 'none';
    boton_masmonto.addEventListener('click', function(){
        if (monto>=0){
            monto += 5;
            updateMonto ();
        }
    });
    boton_menosmonto.addEventListener('click', function(){
        if (monto>0){
            monto -=5;
            updateMonto ();
        }
    })
    //CANTIDAD A TRANSFERIR CONFIRMA
    var cantidad_transferir2 = document.createElement('span');
    cantidad_transferir2.textContent = '$'+monto;
    cantidad_transferir2.classList.add('cantidad_transferir2');
    cantidad_transferir2.style.top = '40%';
    cantidad_transferir2.style.left = '50%';
    cantidad_transferir2.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(cantidad_transferir2);
    cantidad_transferir2.style.display = 'none';
        //PRECIO
        var cantidad_precio = document.createElement('span');
        cantidad_precio.textContent = '$'+precio;
        cantidad_precio.classList.add('titulo365');
        cantidad_precio.style.top = '62%';
        cantidad_precio.style.left = '50%';
        cantidad_precio.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(cantidad_precio);
        cantidad_precio.style.display = 'none';
        cantidad_precio.style.textAlign = 'center';
    //CANTIDAD A TRANSFERIR
    var cantidad_transferir = document.createElement('span');
    cantidad_transferir.textContent = '$'+monto;
    cantidad_transferir.classList.add('cantidad_transferir');
    cantidad_transferir.style.top = '55%';
    cantidad_transferir.style.left = '50%';
    cantidad_transferir.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(cantidad_transferir);
    cantidad_transferir.style.display = 'none';
    //BALANCE DE CUENTA
    var balance_de_cuenta = document.createElement('span');
    balance_de_cuenta.textContent = 'x';
    balance_de_cuenta.classList.add('cantidad_transferir');
    balance_de_cuenta.style.top = '40%';
    balance_de_cuenta.style.left = '50%';
    balance_de_cuenta.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(balance_de_cuenta);
    balance_de_cuenta.style.display = 'none';
    //BOTON CONFINRMAR MONTO
    var boton_confirmar_monto = document.createElement('button');
    boton_confirmar_monto.textContent = 'CONFIRMAR';
    boton_confirmar_monto.classList.add('botones_confirmar');
    boton_confirmar_monto.style.position = 'absolute';
    boton_confirmar_monto.style.top = '76%'
    boton_confirmar_monto.style.left = '50%'
    boton_confirmar_monto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_confirmar_monto);
    document.body.appendChild(contenedor);   
    boton_confirmar_monto.style.display = 'none';
    boton_confirmar_monto.addEventListener('click', function() {
        boton_masmonto.style.display = 'none';
        boton_confirmar_monto.style.display = 'none';
        boton_menosmonto.style.display = 'none';
        boton_atras2.style.display = 'none';
        subtitulo.style.display = 'none';
        boton_enviar_monto.style.display = 'block';
        boton_cancelar_envio.style.display = 'block';
        texto_confirmar.style.display = 'block';
        cantidad_transferir.style.display = 'none';
        cantidad_transferir2.style.display = 'block';
        texto_confirmar2.style.display = 'block';
        texto_receptor.style.display = 'block';
    });
    //BOTON ENVIAR MONTO
    var boton_enviar_monto = document.createElement('button');
    boton_enviar_monto.textContent = 'ENVIAR';
    boton_enviar_monto.classList.add('botones_confirmar');
    boton_enviar_monto.style.position = 'absolute';
    boton_enviar_monto.style.top = '75%'
    boton_enviar_monto.style.left = '50%'
    boton_enviar_monto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_enviar_monto);
    document.body.appendChild(contenedor);   
    boton_enviar_monto.style.display = 'none';
    //BOTON CANCELAR ENVIO
    var boton_cancelar_envio = document.createElement('button');
    boton_cancelar_envio.textContent = 'Cancelar';
    boton_cancelar_envio.classList.add('botones_365_Atras');
    boton_cancelar_envio.style.position = 'absolute';
    boton_cancelar_envio.style.top = '88%'
    boton_cancelar_envio.style.left = '50%'
    boton_cancelar_envio.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(boton_cancelar_envio);
    document.body.appendChild(contenedor);   
    boton_cancelar_envio.style.display = 'none';
    // TEXTO DE CONFIRMACION DE ENVIO
    var texto_confirmar = document.createElement('p');
    texto_confirmar.textContent = "Estás seguro que deseas enviar:";
    texto_confirmar.classList.add('confirmar365');
    texto_confirmar.style.top = '22%';
    texto_confirmar.style.left = '50%';
    texto_confirmar.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(texto_confirmar);
    texto_confirmar.style.display = 'none';
        // TEXTO DE CONFIRMACION DE ENVIO2
        var texto_confirmar2 = document.createElement('p');
        texto_confirmar2.textContent = "a la cuenta de:";
        texto_confirmar2.classList.add('confirmar365');
        texto_confirmar2.style.top = '46%';
        texto_confirmar2.style.left = '50%';
        texto_confirmar2.style.transform = 'translate(-50%, -50%)';
        contenedor.appendChild(texto_confirmar2);
        texto_confirmar2.style.display = 'none';
        boton_cancelar_envio.addEventListener('click', function() {
        texto_confirmar.style.display = 'none';
        boton_enviar_monto.style.display = 'none';
        boton_cancelar_envio.style.display = 'none';
        cantidad_transferir.style.display = 'none';
        texto_confirmar2.style.display = 'none';
        cantidad_transferir2.style.display = 'none';
        texto_receptor.style.display = 'none';
        ir_a_transferir();
    });
    boton_enviar_monto.addEventListener('click', function() {
        boton_enviar_monto.style.display = 'none';
        boton_cancelar_envio.style.display = 'none';
        cantidad_transferir.style.display = 'none';
        texto_confirmar2.style.display = 'none';
        boton_atras.style.display = 'block';
        texto_receptor.style.display = 'none';
        texto_confirmar.style.display = 'none';
        cantidad_transferir2.style.display = 'none';
        if (emisor=='Jugador 1'){
            if (Balance_1 >= monto){
                Balance_1-=monto;
                updateBalancesLog();
                if (receptor=='Balance_2'){
                    Balance_2+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
                else if (receptor=='Balance_3'){
                    Balance_3+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
            }
            else  if (Balance_1 <= monto){
                texto_sinfondos.style.display = 'block';
            }
        }
        else if (emisor=='Jugador 2'){
            if (Balance_2 >= monto){
                Balance_2-=monto;
                updateBalancesLog();
                if (receptor=='Balance_1'){
                    Balance_1+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
                else if (receptor=='Balance_3'){
                    Balance_3+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
            }
            else  if (Balance_2 <= monto){
                texto_sinfondos.style.display = 'block';
            }
        }
        else if (emisor=='Jugador 3'){
            if (Balance_3 >= monto){
                Balance_3-=monto;
                updateBalancesLog();
                if (receptor=='Balance_1'){
                    Balance_1+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
                else if (receptor=='Balance_2'){
                    Balance_2+=monto;
                    updateBalancesLog();
                    texto_transaccion_aprobada.style.display = 'block';
                }
            }
            else  if (Balance_3 <= monto){
                texto_sinfondos.style.display = 'block';
            }
        }
    });
    // Balances
    var balances_log = document.createElement('p');
    balances_log.textContent = Balance_1+" "+Balance_2+" "+Balance_3;
    balances_log.classList.add('confirmar365');
    balances_log.style.top = '100%';
    balances_log.style.left = '50%';
    balances_log.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(balances_log);
    balances_log.style.display = 'none';

    var producto = document.createElement('img');
    producto.src='./IMG/producto.png';
    producto.style.display = 'none';
    producto.style.width = '125px';
    producto.style.height = 'auto';
    producto.style.position = 'absolute';
    producto.style.top = '40%';
    producto.style.left = '50%';
    producto.style.transform = 'translate(-50%, -50%)';
    contenedor.appendChild(producto);

    boton_tienda.addEventListener('click',function(){
        boton_tienda.style.display = 'none';
        boton_comprar.style.display = 'block';
        subtitulo.textContent = 'Tienda';
        boton_transferir.style.display = 'none';
        balance_de_cuenta.style.display = 'none';
        cantidad_precio.style.display = 'block';
        producto.style.display = 'block';
      
    })

    boton_comprar.addEventListener('click',function(){
        if (emisor=='Jugador 1'){
            if(Balance_1<precio){
                texto_sinfondos.style.display = 'block';
                boton_tienda.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.display = 'none';
            }
            else if (Balance_1>=precio){
                texto_titulo.textContent ='Compra Exitosa!';
                subtitulo.style.display = 'none';
                boton_comprar.style.display = 'none';
                boton_atras.style.display = 'none';
                boton_atras2.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.width = '200px';
                producto.style.top = '55%';
            }
        }
        else if (emisor=='Jugador 2'){
            if(Balance_2<precio){
                texto_sinfondos.style.display = 'block';
                boton_tienda.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.display = 'none';
            }
            else if (Balance_2>=precio){
                texto_titulo.textContent ='Compra Exitosa!';
                subtitulo.style.display = 'none';
                boton_comprar.style.display = 'none';
                boton_atras.style.display = 'none';
                boton_atras2.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.width = '200px';
                producto.style.top = '55%';
            }
        }
        else if (emisor=='Jugador 3'){
            if(Balance_3<precio){
                texto_sinfondos.style.display = 'block';
                boton_tienda.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.display = 'none';
            }
            else if (Balance_3>=precio){
                texto_titulo.textContent ='Compra Exitosa!';
                subtitulo.style.display = 'none';
                boton_comprar.style.display = 'none';
                boton_atras.style.display = 'none';
                boton_atras2.style.display = 'none';
                cantidad_precio.style.display = 'none';
                producto.style.width = '200px';
                producto.style.top = '55%';
            }
        };
    })

};
document.addEventListener('DOMContentLoaded', function() {
    crearContenedor();
});