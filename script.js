function calculate() {
    // Obtener valores de los inputs y el tipo de operaci�n
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Validar entradas
    if (isNaN(num1) || isNaN(num2) || !operation) {
        document.getElementById('result').textContent = "Por favor, ingresa ambos n�meros y selecciona una operaci�n.";
        return;
    }

    let result;

    // Realizar la operaci�n seleccionada
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
                document.getElementById('result').textContent = "Error: Divisi�n por cero no permitida.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Operaci�n no v�lida.";
            break;
    }

    // Mostrar el resultado
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
