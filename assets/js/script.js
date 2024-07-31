
let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]



const botonagregartarea = document.getElementById("boton1");
const formulario = document.getElementById("formulario");

formulario.style.display = 'none';


botonagregartarea.addEventListener("click", function ocultarmostrarform() {
    if (formulario.style.display == "none") {
        formulario.style.display = "block";
        
    } else { formulario.style.display = "none"}
    
})

cuerpotabla = document.getElementById ("cuerpo-tabla")

function agregarfila(tarea) {
    const nuevafila = document.createElement("tr");
    const celdatarea = document.createElement("td");
    celdatarea.textContent = tarea;
    nuevafila.appendChild(celdatarea);

    const celdabtnfinalizar = document.createElement("td");
    const botonfinalizar = document.createElement("button");
    botonfinalizar.className = "btn btn-danger";
    botonfinalizar.textContent ="Finalizar";
    botonfinalizar.addEventListener("click", function removertarea() {
        cuerpotabla.removeChild(nuevafila)
        
    });
    celdabtnfinalizar.appendChild(botonfinalizar);
    nuevafila.appendChild(celdatarea);
    nuevafila.appendChild(celdabtnfinalizar);
    cuerpotabla.appendChild(nuevafila);
    
}



const botonagregar = document.getElementById("boton2");
const ingresotarea = document.getElementById ("nuevaTarea");

botonagregar.addEventListener("click", function agregartarea () {
    tareanueva = ingresotarea.value;
    tareas.push({tarea: tareanueva});
    agregarfila(tareanueva);
    ingresotarea = "";
    formulario.style.display = 'none';

    
})
    
tareas.forEach(tarea =>{
    agregarfila (tarea.tarea)
})




