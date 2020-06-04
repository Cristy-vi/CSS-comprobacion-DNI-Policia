
// *** VARIABLES
// Crear un Array de la lista de letras de la policia
var dniCompleto = [],
  resultado,
  letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

// *** LOGICA
do {
  // preguntar al usuario
  var numeroDni = prompt("Escribe tu numero de DNI sin la letra");

  // sacar el resto de la division
  const resto = numeroDni % 23;

  //Condicional para no permitir introducir malas contestaciones
  switch (true) {
    case numeroDni < 0:
    case numeroDni.length !== 8:
    case numeroDni === "":
      if (numeroDni === "salir") {
        alert("Adios!");
        break;
      }
      alert("ERROR!!! Vuelve a intentarlo");
      break;
    default:
      resultado = numeroDni + letras[resto];
      dniCompleto.push(resultado);
  }
} while (numeroDni !== "salir");

// *** Resultado por pantalla
for (var dni of dniCompleto) {
  document.write(dni + "<br>");
}