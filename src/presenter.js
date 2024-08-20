import saludador from "./Saludar";

const nombreInput = document.querySelector("#nombrePersona");
const generoInput = document.querySelector("#sexoPersona");
const edadInput = document.querySelector("#edadPersona");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const genero = generoInput.value.trim().toLowerCase();
    const edad = edadInput.value.trim();  // Capturamos la edad


    const saludo = saludador(nombre, genero,edad);

    div.innerHTML = `<p>${saludo}</p>`;

    nombreInput.disabled = true;
    generoInput.disabled = true;
    edadInput.disabled = true;
    event.submitter.disabled = true;
});
