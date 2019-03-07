
function myFunction() {
    let zipCode = document.getElementById("zipCode").value;
    fetch('http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&APPID=53f03e4e31f2a70d7b4aa1cdf081e981')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let tempKelvin = JSON.stringify(myJson.list[0].main.temp);
    let city = JSON.stringify(myJson.city.name);
    let condition = JSON.stringify(myJson.list[0].weather[0].description);

    let tempNumKelvin = parseFloat(tempKelvin);
    let tempFahrenheit = (tempNumKelvin - 273.15) * 9/5 + 32;
    let tempCelsius = tempNumKelvin - 273 ;

    document.getElementById("TempKelvinHere").innerHTML = Math.round(tempNumKelvin) + " K";
    document.getElementById("TempFahrenheitHere").innerHTML = Math.round(tempFahrenheit) + "°F";
    document.getElementById("TempCelsiusHere").innerHTML = Math.round(tempCelsius) + "°C";
    document.getElementById("CityHere").innerHTML = city;
    document.getElementById("ConditionHere").innerHTML = condition;

    if (tempFahrenheit>=50) {
        var pic = document.createElement("IMG");
        pic.setAttribute("src", "/img/hot.jpg");
        pic.setAttribute("alt", "hot");
        document.body.appendChild(pic);
    } else if (tempFahrenheit<50) {
        var pic = document.createElement("IMG");
        pic.setAttribute("src", "/img/cold.jpg");
        pic.setAttribute("alt", "cold");
        document.body.appendChild(pic);
    }
  });  
}





