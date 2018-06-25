const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const geotemperature = require('./weather')
const argv = yargs.options({

 a: {
     demand: true,
     alias: 'address',
    describe: 'weather of address',
    string: true
 }
}).help().alias('help','h').argv;

geocode.geocodeAddress(argv.address, (errormessage,  results) => {
    if(errormessage){
        console.log(errormessage);
        }
        else{
            console.log(JSON.stringify(results, undefined, 2));
            geotemperature.geotemperature(results.Latitude,results.Longitude, (errormessage,  weatherresults) => {
                if(errormessage){
                    console.log(errormessage);
                    }
                    else{
                        console.log(JSON.stringify(weatherresults, undefined, 2));
                    }
            });
        }
});



//54b26e7fbd540df34554bc76e86662a2