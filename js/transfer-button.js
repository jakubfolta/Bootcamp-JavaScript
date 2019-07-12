'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the red button to check temperature in Fahrenheit scale.' + '<br><br>';

var foutput = document.getElementById('greeter-foutput');
foutput.innerHTML = 'Click the blue button to check temperature in Celcius scale.' + '<br><br>';

var button = document.getElementById('greeter-button');
var fbutton = document.getElementById('greeter-fbutton');
var temperature;
var fTemperature;
var regex = /^[0-9]+$/;

var zero = 0;
var warm = 10;
var hot = 20;
var veryHot = 49;

var answer1 = 'This temperature is a melting point of ice.' + '<br><br>' + output.innerHTML;
var answer2 = 'Most bacteria do not live above this temperature.' + '<br><br>' + output.innerHTML;
var answer3 = 'Summer is starting!' + '<br><br>' + output.innerHTML;
var answer4 = 'We have winter right now.' + '<br><br>' + output.innerHTML;
var answer5 = 'Winter is over, time for spring!.' + '<br><br>' + output.innerHTML;


var answer = function(text) {
    output.innerHTML = text
}

var cTempConvert = function(number) {
    number = (number * 1.8) + 32;
    return number;
}

var fTempConvert = function(number) {
    number =(number - 32) * (5/9);
    return number;
}
/*
var tempInfo = funtion(temperature) {
    ....
}
*/
button.addEventListener('click', function() {
    temperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!temperature.match(regex)) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        fTemperature = cTempConvert(temperature);
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + fTemperature + '°F' + '<br><br>';
        switch (true) {
            case (temperature == zero):
                answer = answer(answer1);
                break;
            case (temperature >= hot):
                answer = answer(answer3);
                break;
            case (temperature > veryHot):
                answer = answer(answer2);
                break;
            case (temperature <= warm):
                answer = answer(answer4);
                break;
            case (warm < temperature < hot):
                answer = answer(answer5);
                break;
        }

        if (temperature == zero) {

        }
        else if (temperature > veryHot) {

        }
        else if (temperature >= hot) {

        }
        else if (temperature <= warm) {
            \;
        }
        else if (warm < temperature < hot) {
            ;
        }
    }
});

fbutton.addEventListener('click', function() {
    fTemperature = window.prompt('What\'s the temperature? Enter the number: ');

    if (!fTemperature.match(regex)) {
        foutput.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        temperature = fTempConvert(fTemperature);
        foutput.innerHTML = 'Fahrenheit temperature is ' + fTemperature + '°F' + '\n' +
        ' and Celcius temperature is ' + temperature + '°C' + '<br><br>';
        if (fTemperature == 32) {
            foutput.innerHTML = 'This temperature is a melting point of ice.' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature > 120) {
            foutput.innerHTML = 'Most bacteria do not live above this temperature.' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature >= 68) {
            foutput.innerHTML = 'Summer is starting!' + '<br><br>' + foutput.innerHTML;
        }
        else if (fTemperature <= 50) {
            foutput.innerHTML = 'We have winter right now.' + '<br><br>' + foutput.innerHTML;
        }
        else if (50 < fTemperature < 68) {
            foutput.innerHTML = 'Winter is over, time for spring!.' + '<br><br>' + foutput.innerHTML;
        }
    }
});
