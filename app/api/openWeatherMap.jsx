var axios = require('axios');

//41b2d2af68357ea2ff2f8f4c1c848966

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=41b2d2af68357ea2ff2f8f4c1c848966&units=metric';

module.exports = {
  getTemp: function(location){
    var encodeLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestUrl).then(function(res){
      // debugger;
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
