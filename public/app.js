const url = 'http://api.weatherstack.com/current?access_key=850cfda6651dc44a72e691481bd16488&query=+ encodeURIComponent(latitude, longitude) +&units=m'

fetch('urhttp://localhost:3000/weather?address=Mumbai').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log('Try another search')
        } else {
            console.log(data.temperature)
            console.log(data.location)
        }
    })
})

