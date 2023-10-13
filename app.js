document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("calculator-form");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operationSelect = document.getElementById("operation");
    const resultDiv = document.getElementById("result");

    calculatorForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerHTML = "Please enter valid numbers.";
        } else {
            let result;
            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "subtract":
                    result = num1 - num2;
                    break;
                case "multiply":
                    result = num1 * num2;
                    break;
                case "divide":
                    if (num2 === 0) {
                        resultDiv.innerHTML = "Division by zero is not allowed.";
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    resultDiv.innerHTML = "Invalid operation selected.";
                    return;
            }
            resultDiv.innerHTML = `Result: ${result}`;

            // Clear input fields
            num1Input.value = "";
            num2Input.value = "";
        }
    });

    // Restore input data on page load
    num1Input.value = sessionStorage.getItem("num1") || "";
    num2Input.value = sessionStorage.getItem("num2") || "";
    operationSelect.value = sessionStorage.getItem("operation") || "add";

    // Save input data 
    num1Input.addEventListener("blur", saveInputData);
    num2Input.addEventListener("blur", saveInputData);

    function saveInputData() {
        sessionStorage.setItem("num1", num1Input.value);
        sessionStorage.setItem("num2", num2Input.value);
        sessionStorage.setItem("operation", operationSelect.value);
    }
});