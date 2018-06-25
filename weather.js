const request = require('request');

var geotemperature = (lat, lang,  callback) => {
    request({
        url: `https://api.darksky.net/forecast/54b26e7fbd540df34554bc76e86662a2/${lat},${lang}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('unable to connect to forecast servers');
            }else if(response.statusCode === 400){
                callback('wrong address input');
            }else if(response.statusCode === 200){
                callback(undefined, {
                   current: body.currently.temperature,
                   apparentTemperature: body.currently.apparentTemperature,
                   humidity: body.currently.humidity
                });
               
            }
       
    });
}

module.exports.geotemperature = geotemperature;