import comprobar_bisiesto from "./bisiesto.js";


const anioInput = document.querySelector("#anio");
const form = document.querySelector("#bisiestoForm"); // Corregido para coincidir con el id del formulario
const div = document.querySelector("#resultado"); // Corregido para coincidir con el id del div

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const anio = anioInput.value; // Se captura el valor del input
    const resultado = comprobar_bisiesto(anio); // Llama a la función y guarda el resultado

    div.innerHTML = `<p>El año ${anio} es ${resultado}</p>`; // Muestra el resultado

    anioInput.disabled = true; // Deshabilita el input después de enviar
    event.submitter.disabled = true; // Deshabilita el botón de envío
});