console.log("Hola mundo");

function showResult(result){
  const resultDiv = document.getElementById("resultDisplay");
  resultDiv.textContent = "Resultado: " + result;
}

function greet() {
  alert("Hola papu, este es mi primer saludo usando JS");
}

function askForNumber(mesage) {
  let number;
  while (true) {
    let input = prompt(mesage);
    if (input === null) return null;
    number = Number(input);
    if (!isNaN(number) && number !== 0) return number;
  }
}

function pseudoCalc() {
  let result = null;

  while (true) {
    let usePrevious =
      result !== null
        ? confirm("¿Quieres usar el resultado anterior (" + result + ")?")
        : false;
    let a = usePrevious ? result : askForNumber("Ingresa el primer número :");
    if (a === null) break;

    let operation = prompt(
      "Elije qué operacion quieres realizar:\n" +
        "1.- Sumar.\n" +
        "2.- Restar.\n" +
        "3.- Multiplicar.\n" +
        "4.- Dividir.\n" +
        "5.- Potencia.\n" +
        "6.- Raíz.\n" +
        "(Escriba 'salir' para terminar)"
    );

    if (operation === null || operation.toLowerCase() === "salir") break;

    let b = askForNumber("Ingresa el segundo número:");
    if (b === null) break;

    switch (operation) {
      case "1":
        result = a + b;
        break;
      case "2":
        result = a - b;
        break;
      case "3":
        result = a * b;
        break;
      case "4":
        if (b === 0) {
          alert("No se puede dividir por 0");
          continue;
        }
        result = a / b;
        break;
      case "5":
        result = Math.pow(a, b);
        break;
      case "6":
        if (a < 0 && b % 2 == 1) {
          alert(
            "No podemos sacar raiz con índice impar a los numeros negativos"
          );
          continue;
        }
        result = Math.pow(a, 1 / b);
        break;
      default:
        alert("Operacion inválida.");
        continue;
    }

    showResult(result);
    alert("El resultado de la operación es: " + result);
  }
}

function goToCalculator() {
  const body = document.getElementById("body");

  body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "./calc.html";
  }, 400);
}

window.onload = () => {
  const body = document.getElementById("body");
  body.classList.add("fade-in");
};