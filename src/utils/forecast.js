const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=850cfda6651dc44a72e*****1bd16488&query=+ encodeURIComponent(latitude, longitude) +&units=m'
    
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error ) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                weather_description: body.current.weather_descriptions,
                Temperature: body.current.temperature,
                Feels_like: body.current.feelslike
            })
        }
    
    } )

}

module.exports = forecast
