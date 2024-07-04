principalFunction();


function principalFunction() {
    
    if (document.querySelector(".container-picture")) { 
        imagenHover(); 
    }

    if (document.querySelector("select")) { 
        comprobacionTabla();
    }
    
    if (document.querySelector("form")) { 
        comprobacionForm();
    }
    
}


function imagenHover() {
    
    let imagen1Proyectos = document.getElementById("img-1");
    let imagen2Proyectos = document.getElementById("img-2");
    let imagen3Proyectos = document.getElementById("img-3");
    
    imagen1Proyectos.addEventListener("mouseover",function() {imagen1Proyectos.style.height="150%";})
    imagen1Proyectos.addEventListener("mouseout", function() {imagen1Proyectos.style.height="100%";})
    
    imagen2Proyectos.addEventListener("mouseover",function() {imagen2Proyectos.style.height="150%";})
    imagen2Proyectos.addEventListener("mouseout", function() {imagen2Proyectos.style.height="100%";})
    
    imagen3Proyectos.addEventListener("mouseover",function() {imagen3Proyectos.style.height="150%";})
    imagen3Proyectos.addEventListener("mouseout", function() {imagen3Proyectos.style.height="100%";})
    
}

function comprobacionTabla() {

    //Declaración variables
    let tablaPotencias = new Map([["Nevera" , "Entre 0.250 - 0.350 kW"],["Vitrocerámica" , "Entre 0.900 - 2.000 kW"],["Microondas" , "Entre 0.900 - 1.500 kW"],["Horno" , "Entre 1.200 - 2.200 kW"],["Lavavajillas" , "Entre 1.500 - 2.200 kW"],["Lavadora" , "Entre 1.500 - 2.200 kW"],["Televisión" , "Entre 0.150 - 0.400 kW"],["Aire Acondicionado" , "Entre 0.900 - 2.000 kW"],["Calefacción" , "Entre 1.000 - 2.500 kW"]]);
    let contenedorOpciones = document.getElementById("contenedor-options")


    //Creación de options
    for (let[productos,contenidoOption] of tablaPotencias) {
        
        let productOption=document.createElement("option");
        productOption.innerHTML = productos;
        productOption.setAttribute("id",productos);
        contenedorOpciones.appendChild(productOption);
        
    }

    //Comprobación de cambio
    contenedorOpciones.addEventListener("change",function() {
        

        let respuesta = document.querySelector("#respuesta");


        //Recorrer la tabla
        for (let [indice,valor] of tablaPotencias) {
            
            if (contenedorOpciones.value == indice ) {
                
                //Si contiene valor
                respuesta.innerHTML = valor ;
                
            } else if (contenedorOpciones.value == "") {
                
                //Si no contiene valor
                respuesta.innerHTML = "";
            }
        }
    });
}

function comprobacionForm() { 

    let inputNombre = document.getElementById("nombre");
    let inputEmail = document.getElementById("correo-electronico");
    let inputNumero = document.getElementById("telefono");
    let botonEnviar = document.getElementById("boton");
    let respuesta = document.getElementById("respuesta");

    let verificarNombre = false;
    let verificarNumero = false;
    let verificarEmail = false;

    let email = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let letras = /[A-Za-záéíóúÁÉÍÓÚ]/;
    let numeros = /[0-9]/;

    botonEnviar.addEventListener("click",function() {

        if ((letras.test(inputNombre) && inputNombre.value!="")) {

            verificarNombre = true;
            inputNombre.style.borderBottomColor = "#222";

        } else {inputNombre.style.borderBottomColor = "red";}

        if (numeros.test(inputNumero) && inputNumero.value!="") {
            
            verificarNumero = true;
            console.log("Wey");
            inputNumero.style.borderBottomColor = "#222";

        } else {
            inputNumero.style.borderBottomColor = "red";
        }

        if (email.test(inputEmail) && inputEmail.value!="") {
            
            verificarEmail = true;
            console.log("nose");
            inputEmail.style.borderBottomColor = "#222";

        } else {
            inputEmail.style.borderBottomColor = "red";
        }

        if (verificarEmail && verificarNombre && verificarNumero) {

            respuesta.innerHTML = "Formulario enviado correctamente";

        } else {
            
            respuesta.innerHTML = "El formulario tiene errores";
        }
    })
}