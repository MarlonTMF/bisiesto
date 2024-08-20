import saludador from "./Saludar";

const nombreInput = document.querySelector("#nombrePersona");
const generoInput = document.querySelector("#sexoPersona");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const genero = generoInput.value.trim().toLowerCase();

    const saludo = saludador(nombre, genero);

    div.innerHTML = `<p>${saludo}</p>`;

    nombreInput.disabled = true;
    nombreInput.disabled = true;
    event.submitter.disabled = true;
});
