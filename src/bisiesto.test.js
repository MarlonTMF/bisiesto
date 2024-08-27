import comprobar_bisiesto from "./bisiesto.js";

describe("bisiesto",() => {
    it("Todos los años divisibles por  400 SON años bisiestos",()=> {
        expect(comprobar_bisiesto(2000)).toEqual("bisiesto");

    });
    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos ",()=> {
        expect(comprobar_bisiesto(1700)).toEqual("no bisiesto");

    });

});

