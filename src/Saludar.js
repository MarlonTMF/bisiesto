function saludador(nombre, genero) {

  let saludo = "Hola ";

    if(genero.toLowerCase() === "masculino"){
      saludo += "Sr. ";
    } else if(genero.toLowerCase() === "femenino"){
      saludo += "Sra. "
    }

    saludo += nombre;
    return saludo;
  }

  export default saludador;
