
let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

//Defino las variables para manipular el DOM, aseguro que el formulario
//no se muestre inicialmente y que lo haga al apretar el boton

const botonagregartarea = document.getElementById("boton1");
const formulario = document.getElementById("formulario");

formulario.style.display = 'none';


botonagregartarea.addEventListener("click", function ocultarmostrarform() {
    if (formulario.style.display == "none") {
        formulario.style.display = "block";

    } else { formulario.style.display = "none" }
})

//Establezco la funcion para agregar cada fila por tarea
cuerpotabla = document.getElementById("cuerpo-tabla")

function agregarfila(tarea) {
    const nuevafila = document.createElement("tr");
    const celdatarea = document.createElement("td");
    celdatarea.textContent = tarea;
    nuevafila.appendChild(celdatarea);

    const celdabtnfinalizar = document.createElement("td");
    const botonfinalizar = document.createElement("button");
    botonfinalizar.className = "btn btn-danger";
    botonfinalizar.textContent = "Finalizar";

    botonfinalizar.addEventListener("click", function removertarea() {
        cuerpotabla.removeChild(nuevafila)
    });

    celdabtnfinalizar.appendChild(botonfinalizar);
    nuevafila.appendChild(celdabtnfinalizar);
    cuerpotabla.appendChild(nuevafila);
}


//Establezco la funcionalidad del boton agregar tarea, donde llamo 
// a la funcion creada anteriormente agregarfila.
const botonagregar = document.getElementById("boton2");
const ingresotarea = document.getElementById("nuevaTarea");

botonagregar.addEventListener("click", function agregartarea() {
    tareanueva = ingresotarea.value;
    tareas.push({ tarea: tareanueva });
    agregarfila(tareanueva);
    ingresotarea.value = "";
    formulario.style.display = 'none';
})


//Establezco que por cada tarea presente en el array tareas se cree 
//una fila con cada tarea usando la funcion agregarfila
tareas.forEach(tarea => {
    agregarfila(tarea.tarea)
})




