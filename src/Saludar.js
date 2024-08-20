function saludador(nombre, genero, edad, idioma) {
  let saludo = idioma === "ES" ? "Hola " : "Hello ";

  if (idioma === "ES") {
      if (genero.toLowerCase() === "masculino") {
          if (edad < 18) {
              saludo += "Joven ";
          } else if (edad >= 18 && edad <= 35) {
              saludo += "Joven ";
          } else {
              saludo += "Señor ";
          }
      } else if (genero.toLowerCase() === "femenino") {
          if (edad < 18) {
              saludo += "Señorita ";
          } else if (edad >= 18 && edad <= 35) {
              saludo += "Joven ";
          } else {
              saludo += "Señora ";
          }
      }
      saludo += nombre;
  } else if (idioma === "EN") {
      if (genero.toLowerCase() === "masculino") {
          if (edad < 18) {
              saludo += "Young man ";
          } else if (edad >= 18 && edad <= 35) {
              saludo += "Young man ";
          } else {
              saludo += "Mr. ";
          }
      } else if (genero.toLowerCase() === "femenino") {
          if (edad < 18) {
              saludo += "Miss ";
          } else if (edad >= 18 && edad <= 35) {
              saludo += "Young lady ";
          } else {
              saludo += "Mrs. ";
          }
      }
      saludo += nombre;
  }
  
  return saludo;
}

  export default saludador;
