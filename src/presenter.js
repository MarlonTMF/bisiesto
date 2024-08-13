import sumar from "./sumador";
import multiplicar from "./Multiplicador";


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

   if (event.submitter.id === "sumar-button") {

  div.innerHTML = "<p>Resultado de la suma: " + sumar(firstNumber, secondNumber) + "</p>";
    } else if (event.submitter.id === "multiplicar-button") {
      
  div.innerHTML = "<p>Resultado de la multiplicación: " + multiplicar(firstNumber, secondNumber) + "</p>";
  }

});
