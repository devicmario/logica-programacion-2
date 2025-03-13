// Función anónima para convertir grados Celsius a Kelvin
const cnvCelciusToKelvin = (() => { 
    return (celsius) => celsius + 273.15;
})();

// Función anónima para convertir grados Celsius a Fahrenheit
const cnvCelciusToFarenheit = (() => {
    return (celsius) => (celsius * 1.8) + 32;
})();

// Función anónima de entrada y salida de las conversiones
const ioConvertions = (() => {
    // Variable condicional del bucle
    let checkInput = false;
    // Almacenará la entrada de datos
    let celsius;
    while (!checkInput) {
        // Entrada de datos
        const inputUser = prompt("Introduce una temperatura en grados Celsius:");
        // Casteo de datos a tipo número
        celsius = parseFloat(inputUser);
        if (isNaN(celsius)) {
            console.error("Error: El dato introducido no es de tipo número. Inténtalo de nuevo.");
        } else {
            checkInput = true;
        }
    }
    // Salida de datos
    console.log(`Grados Kelvin: ${cnvCelciusToKelvin(celsius)}`);
    console.log(`Grados Fahrenheit: ${cnvCelciusToFarenheit(celsius)}`);
})();
