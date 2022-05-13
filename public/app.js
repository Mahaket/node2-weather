const url = 'http://api.weatherstack.com/current?access_key=850cfda6651dc44a72e691481bd16488&query=+ encodeURIComponent(latitude, longitude) +&units=m'



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
          e.preventDefault()

          const location = search.value

          messageOne.textContent = 'Loading weather'

          fetch('urhttp://localhost:3000/weather?address=' + location).then((response) => {
          response.json().then((data) => {
        if(data.error){

            messageTwo.textContent = data.error

        } else {

            console.log(data.temperature)
            console.log(data.location)
        }
    })
})


} )


