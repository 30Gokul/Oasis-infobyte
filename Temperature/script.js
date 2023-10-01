document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const temperatureInput = document.getElementById("temperature");
    const unitRadios = document.querySelectorAll('input[name="unit"]');
    const resultDisplay = document.getElementById("convertedTemperature");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        let convertedTemperature;
        let convertedUnit;

        if (isNaN(temperature)) {
            resultDisplay.textContent = "Please enter a valid number.";
            return;
        }

        unitRadios.forEach(function (radio) {
            if (radio.checked) {
                switch (radio.value) {
                    case "celsius":
                        convertedTemperature = (temperature - 32) * (5 / 9);
                        convertedUnit = "Celsius (°C)";
                        break;
                    case "fahrenheit":
                        convertedTemperature = (temperature * 9 / 5) + 32;
                        convertedUnit = "Fahrenheit (°F)";
                        break;
                    case "kelvin":
                        convertedTemperature = temperature + 273.15;
                        convertedUnit = "Kelvin (K)";
                        break;
                }
            }
        });

        resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
    });
});
