$(function() {
  const APP_ID_KEY = "1e5d00bd330b9066ed613b4b93fe94a5";

  $(".searchCity input:nth-child(2)").on("click", function(e) {
    var cityName = $("#cityvalue").val();
    var city = $(".searchCity .city");
    var temperature = $(".temperature");
    var icon = $(".icon");
    var humidity = $(".humidity");
    var pressure = $(".pressure");
    var speedWind = $(".speed-wind");

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APP_ID_KEY}`
      )
      .then(result => {
        console.log(cityName);
        console.log(result.data.main.temp);
        temperature.text(
          `${Math.round(result.data.main.temp)}` + " st." + " C"
        );
        city.text(cityName);
        humidity.text("Humidity:" + result.data.main.humidity + "%");
        pressure.text("Pressure:" + result.data.main.pressure + "hPa");
        speedWind.text("Wind speed:" + result.data.wind.speed + "m/s");
      })
      .catch(err => {
        console.log("Error", err.message);
      });
  });
});
