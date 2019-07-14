'use strict'

var output = document.getElementById('greeter-output');
output.innerHTML = 'Click the red button to check temperature in Fahrenheit scale.' + '<br><br>';

var foutput = document.getElementById('greeter-foutput');
foutput.innerHTML = 'Click the blue button to check temperature in Celcius scale.' + '<br><br>';

var button = document.getElementById('greeter-button');
var fbutton = document.getElementById('greeter-fbutton');

var rbutton;

var temperature;
var fTemperature;

var zero = 0;
var warm = 10;
var hot = 20;
var veryHot = 49;

var answer1 = 'This temperature is a melting point of ice.' + '<br><br>';
var answer2 = 'Most bacteria do not live above this temperature.' + '<br><br>';
var answer3 = 'Summer is starting!' + '<br><br>';
var answer4 = 'We have winter right now.' + '<br><br>';
var answer5 = 'Winter is over, time for spring!' + '<br><br>';

var checkAnswer = function(number) {
    return number == zero ? answer1
        : (number < veryHot && number >= hot) ? answer3
        : number <= warm ? answer4
        : (warm < number && number < hot) ? answer5
        : answer2;
}

var giveAnswer = function(text) {
    return rbutton == true ? output.innerHTML = text + output.innerHTML
        : foutput.innerHTML = text + foutput.innerHTML;
}

var cTempConvert = function(number) {
    number = (number * 1.8) + 32;
    return number;
}

var fTempConvert = function(number) {
    number =(number - 32) * (5/9);
    return number;
}

button.addEventListener('click', function() {
    temperature = parseInt(window.prompt('What\'s the temperature? Enter the number: '));
    if (isNaN(temperature) == true) {
        output.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        rbutton = true;
        fTemperature = cTempConvert(temperature);
        output.innerHTML = 'Celsius temperature is ' + temperature + '°C' + '\n' +
        ' and Fahrenheit temperature is ' + fTemperature + '°F' + '<br><br>';

        giveAnswer(checkAnswer(temperature));
    }
});

fbutton.addEventListener('click', function() {
    fTemperature = parseInt(window.prompt('What\'s the temperature? Enter the number: '));
    if (isNaN(fTemperature) == true) {
        foutput.innerHTML = 'You have to enter the number!' + '<br><br>';
    }
    else {
        rbutton = false;
        temperature = fTempConvert(fTemperature);
        foutput.innerHTML = 'Fahrenheit temperature is ' + fTemperature + '°F' + '\n' +
        ' and Celcius temperature is ' + temperature + '°C' + '<br><br>';

        giveAnswer(checkAnswer(temperature));
    }
});
