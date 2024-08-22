import generarFizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz",() => {
    it("generar el mismo numero si no sigue la regla",()=> {
        expect(generarFizzBuzz(1)).toEqual("1");

    });
    it("generar el mismo numero si no sigue la regla",()=> {
        expect(generarFizzBuzz(2)).toEqual("2");

    });

    it("generar Fizz para el 3 ",()=> {
        expect(generarFizzBuzz(3)).toEqual("Fizz");

    });

    it("generar el mismo numero si no sigue la regla",()=> {
        expect(generarFizzBuzz(4)).toEqual("4");

    });

    it("generar Buzz para el 5 ",()=> {
        expect(generarFizzBuzz(5)).toEqual("Buzz");

    });
    
    it("generar Fizz para el 6, por ser multiplo de 3 ",()=> {
        expect(generarFizzBuzz(6)).toEqual("Fizz");

    });

    it("generar el mismo numero si no sigue la regla (7)",()=> {
        expect(generarFizzBuzz(7)).toEqual("7");

    });

    it("generar Fizz para el 9, por ser multiplo de 3 ",()=> {
        expect(generarFizzBuzz(9)).toEqual("Fizz");

    });

    it("generar Fizz para el 10, por ser multiplo de 5 ",()=> {
        expect(generarFizzBuzz(10)).toEqual("Buzz");

    });

    it("generar FizzBuzz para el 15, por ser multiplo de 3 y 5 ",()=> {
        expect(generarFizzBuzz(15)).toEqual("FizzBuzz");

    });

});

