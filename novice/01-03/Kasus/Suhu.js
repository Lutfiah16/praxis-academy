function celsiusToFahrenheit(Celcius){
    var Celcius = 100;
    var ToFahrenheit = (Celcius * 9/5) + 32;
    console.log(Celcius + " Celcius adalah " + ToFahrenheit + " Fahrenheit " );
}

function fahrenheitToCelsius(Fahrenheit){
    var Fahrenheit = 30;
    var ToCelsius = (Fahrenheit - 32) * 5/9;
    console.log( Fahrenheit + " Fahrenheit adalah " + ToCelsius + " Celcius ");
}

celsiusToFahrenheit();
fahrenheitToCelsius();

