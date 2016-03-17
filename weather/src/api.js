var rootURL = 'http://api.openweathermap.org/data/2.5/weather?APPID=c7b3d30ab575475a7da0d00952346ec1';

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F';
}

module.exports = function(latitude, longitude) {
  var url = `${rootURL}&lat=${latitude}&lon=${longitude}`;

  // Fetch API takes a URL and some options and returns a promise
  return fetch(url)
    .then(function(response) {
      // Produces actual JSON data from the response. This also returns a promise.
      return response.json();
    })
      .then(function(json){
        return {
          city: json.name,
          temperature: kelvinToF(json.main.temp),
          description: json.weather[0].description
        };
      });
}
