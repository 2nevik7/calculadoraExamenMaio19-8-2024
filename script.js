function calculate() {
    // Obtener valores de los inputs y el tipo de operación
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Validar entradas
    if (isNaN(num1) || isNaN(num2) || !operation) {
        document.getElementById('result').textContent = "Por favor, ingresa ambos números y selecciona una operación.";
        return;
    }

    let result;

    // Realizar la operación seleccionada
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById('result').textContent = "Error: División por cero no permitida.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Operación no válida.";
            break;
    }

    // Mostrar el resultado
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
