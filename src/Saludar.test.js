import saludador from "./Saludar.js";// saludar

describe("Saludador" ,() => {
    it("Saludar a Andres en Espaniol",() => {

    const saludo = saludador("Andres", "masculino", 55, "ES");
    expect(saludo).toEqual("Hola Señor Andres");
    });

    it("Saludar a Andres en Ingles", ()=>{
        const saludo = saludador("Andres", "masculino",55,"EN");
        expect(saludo).toEqual("Hello Mr. Andres" );

    });
});

