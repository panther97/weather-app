const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedaddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedaddress}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callbackj('unable to connect to google servers');
            }else if(body.status === 'ZERO_RESULTS'){
                callback('wrong address input');
            }else if(body.status === 'OK'){
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
               
            }
       
    });
   
}



module.exports.geocodeAddress = geocodeAddress;


