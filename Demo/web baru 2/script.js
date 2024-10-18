let display = document.getElementById("display");

function input(value) {
    if (display.value === "0" && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    let expression = display.value.replace("^", "");
    try {
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}