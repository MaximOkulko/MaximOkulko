const numbers = document.querySelectorAll(".number"),
  operations = document.querySelectorAll(".operator"),
  clearBtns = document.querySelectorAll(".clear-btn"),
  decimalBtn = document.getElementById("decimal"),
  display = document.getElementById("display"),
  point = ".",
  zero = 0,
  clearInput = "c",
  clearInputLast = "ce";
let memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation = "";

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener("click", function (evenly) {
    numberPress(evenly.target.textContent);
  });
}

for (let i = 0; i < operations.length; i++) {
  const operationBtn = operations[i];
  operationBtn.addEventListener("click", function (evenly) {
    operationPress(evenly.target.textContent);
  });
}

for (let i = 0; i < clearBtns.length; i++) {
  const clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", function (evenly) {
    clear(evenly.target.id);
  });
}

decimalBtn.addEventListener("click", addDecimal);

function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === zero) {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operationPress(process) {
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    switch (memoryPendingOperation) {
      case "+":
        memoryCurrentNumber += +localOperationMemory;
        break;
      case "-":
        memoryCurrentNumber -= +localOperationMemory;
        break;
      case "*":
        memoryCurrentNumber *= +localOperationMemory;
        break;
      case "/":
        memoryCurrentNumber /= +localOperationMemory;
        break;
      default:
        memoryCurrentNumber = +localOperationMemory;
        break;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = process;
  }
}

function addDecimal(evenly) {
  let localDecimalMemory = display.value;

  if (memoryNewNumber) {
    localDecimalMemory = zero;
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(point) === -1) {
      localDecimalMemory += point;
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === clearInputLast) {
    display.value = zero;
    memoryNewNumber = true;
  } else if (id === clearInput) {
    display.value = zero;
    memoryNewNumber = true;
    (memoryCurrentNumber = 0), (memoryPendingOperation = "");
  }
}
