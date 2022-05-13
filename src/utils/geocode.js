const request = require('request')


const geocode = (address, callback) => {
      
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2V0YW5wIiwiYSI6ImNsMm9yZG5oMzE5bnQzaW11OHM1cW5vbzgifQ.MlPp6fd3-pk08ny6UclgQA&limit=1'
    
    request({url, json: true}, (error, { body }) => {
         if(error) {
              callback('Unabale to connect to server', undefined)
         } else if (body.features.length === 0) {
              callback('Unable to find location. Try another search', undefined)
         } else {
              callback(undefined, {
                   latitude: body.features[0].center[1],
                   longitude: body.features[0].center[0],
                   location: body.features[0].place_name
              })
         }

    })
}



module.exports = geocode

