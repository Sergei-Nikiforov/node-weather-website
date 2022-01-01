const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=8bc2713ef09a9c705d81825cc7a7e205&query=' + latitude + ',' + longitude;

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree out. It feels like a ' + body.current.feelslike + ' degrees out.')
        }
    });
}

module.exports = forecast;