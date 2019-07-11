'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the button to check temperature in Fahrenheit scale.' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');
var temperature;
var Ftemperature;
var regex = /^[0-9]+$/;

button.addEventListener('click', function() {
    temperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!temperature.match(regex)) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>' + output.innerHTML;
    }
    else {
        Ftemperature = (temperature * 1.8) + 32;
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + Ftemperature + '°F' + '<br><br>' + output.innerHTML;
        if (temperature == 0) {
            output.innerHTML = 'This temperature is a melting point of ice.' + '<br><br>' + output.innerHTML;
        }
        else if (Ftemperature > 120) {
            output.innerHTML = 'Most bacteria do not live above this temperature.' + '<br><br>' + output.innerHTML;
        }
        else if (temperature >= 20) {
            output.innerHTML = 'Summer is starting!' + '<br><br>' + output.innerHTML;
        }
        else if (temperature <= 10) {
            output.innerHTML = 'We have winter right now.' + '<br><br>' + output.innerHTML;
        }
        else if (10 < temperature < 20) {
            output.innerHTML = 'Winter is over, time for spring!.' + '<br><br>' + output.innerHTML;
        }
    }
});
