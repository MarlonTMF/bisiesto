import comprobar_bisiesto from "./bisiesto.js";

describe("bisiesto",() => {
    it("Todos los años divisibles por  400 SON años bisiestos",()=> {
        expect(comprobar_bisiesto(2000)).toEqual("bisiesto");

    });

});

