import comprobar_bisiesto from "./bisiesto.js";

describe("bisiesto",() => {
    it("Todos los años divisibles por  400 SON años bisiestos",()=> {
        expect(comprobar_bisiesto(2000)).toEqual("bisiesto");

    });
    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos ",()=> {
        expect(comprobar_bisiesto(1700)).toEqual("no bisiesto");

    });
    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos  ",()=> {
        expect(comprobar_bisiesto(2008)).toEqual("bisiesto");

    });
    it("Todos los años que no son divisibles por 4 NO son años bisiestos  ",()=> {
        expect(comprobar_bisiesto(2017)).toEqual("no bisiesto");

    });

});

