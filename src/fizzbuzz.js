
function generarFizzBuzz(numero){
    if(numero % 3 === 0)
    {
        return"Fizz";
    }
    if(numero % 5 === 0)
    {
        return"Buzz";
    }

    return numero+"";
}
export default generarFizzBuzz;

// no puede hacerse codigo de produccion , sin primero haber hecho la prueba 

