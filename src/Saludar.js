function saludador(nombre, genero, edad) {

  let saludo = "Hola ";

    if(genero.toLowerCase() === "masculino"){
      if (edad < 18) {
        saludo += "Joven ";
    } else if (edad >= 18 && edad <= 35) {
        saludo += "Joven ";
    } else {
        saludo += "Señor ";
    }

    } else if(genero.toLowerCase() === "femenino"){
      if (edad < 18) {
        saludo += "Señorita ";
    } else if (edad >= 18 && edad <= 35) {
        saludo += "Joven ";
    } else {
        saludo += "Señora ";
    }
    }

    saludo += nombre + ". ";
    return saludo;
  }

  export default saludador;
