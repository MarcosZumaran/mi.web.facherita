console.log("Hola papus");

document.addEventListener("keydown", function(event){
    const allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/", "(", ")", "."
    ];

    if (allowedKeys.includes(event.key)){
        appendToDisplay(event.key);
    }else if(event.key === "Enter" || event.key === "="){
        calculateResult();
    }
    else if(event.key === "Backspace"){
        deleteLast();
    }else if(event.key === "c" || event.key === "C"){
        clearDisplay();
    }
});

let display = document.getElementById("display");

function appendToDisplay(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent === "Several Error!!") {
    display.textContent = "0";
  }
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Several Error!!";
  }
}

function goToIndex() {
  const body = document.getElementById("body");

  body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "./index.html";
  }, 400);
}

window.onload = () => {
  const body = document.getElementById("body");
  body.classList.add("fade-in");
};