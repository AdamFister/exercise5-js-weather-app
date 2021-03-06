

function myFunction() {
    let zipCode = document.getElementById("zipCode").value;
    fetch('http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&APPID=53f03e4e31f2a70d7b4aa1cdf081e981')  
  .then(function(response) {
    if (!response.ok) {
      document.getElementById("WeatherStuff").style.display = 'none';
      throw alert("Please enter a valid zip code");
  } else {
  //document.getElementById("Error").innerHTML = "";
  return response.json();
  }})
  .then(function(myJson) {
    document.getElementById("WeatherStuff").style.display = 'block';
    let tempKelvin = JSON.stringify(myJson.list[0].main.temp);
    let city = JSON.stringify(myJson.city.name);
    let condition = JSON.stringify(myJson.list[0].weather[0].description);

    city = city.slice(1, -1);
    condition = condition.slice(1, -1);

    let tempNumKelvin = parseFloat(tempKelvin);
    let tempFahrenheit = (tempNumKelvin - 273.15) * 9/5 + 32;
    let tempCelsius = tempNumKelvin - 273 ;

    document.getElementById("TempKelvinHere").innerHTML = Math.round(tempNumKelvin) + " K";
    document.getElementById("TempFahrenheitHere").innerHTML = Math.round(tempFahrenheit) + "°F";
    document.getElementById("TempCelsiusHere").innerHTML = Math.round(tempCelsius) + "°C";
    document.getElementById("CityHere").innerHTML = city;
    document.getElementById("ConditionHere").innerHTML = condition;

    if (tempFahrenheit>=50) {
        document.getElementById("PictureHere").src = "/img/hot.jpg";
    } else {
        document.getElementById("PictureHere").src = "/img/cold.jpg";
    }
  }).catch(function(error) {
    console.log(error);
    
});  
}







