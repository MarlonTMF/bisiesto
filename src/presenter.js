import saludador from "./Saludar";

const nombreInput = document.querySelector("#nombrePersona");
const generoInput = document.querySelector("#sexoPersona");
const edadInput = document.querySelector("#edadPersona");
const idiomaInput = document.querySelector("#idioma");
const form = document.querySelector("#nombre-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();
    const genero = generoInput.value.trim().toLowerCase();
    const edad = edadInput.value.trim();  // Capturamos la edad
    const idioma = idiomaInput.value;

    const saludo = saludador(nombre, genero,edad, idioma);

    div.innerHTML = `<p>${saludo}</p>`;

    nombreInput.disabled = true;
    generoInput.disabled = true;
    edadInput.disabled = true;
    idiomaInput.disabled = true;
    event.submitter.disabled = true;
});
