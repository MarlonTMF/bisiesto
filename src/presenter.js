import saludador from "./Saludar";

const nombreInput = document.querySelector("#nombrePersona");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreInput.value;
    const saludo = saludador(nombre);

    div.innerHTML = `<p>${saludo}</p>`;

    nombreInput.disabled = true;
    event.submitter.disabled = true;
});
