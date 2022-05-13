const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

//define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

//setup static direcotry to serve
app.use(express.static(publicDirectoryPath))

// setup handlebars hbs engine and custmised views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help page',
        name: 'ketan'
    })
})


//app.com
//app.com/help
//app.com/about

app.get('/weather', (req, res) => {
    if(!req.query.address){
       return res.send({
          error: 'Address is not provided'
        })
    }
    
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
     
        if(error) {
            return res.send({
                error: error
            })
        }
          
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                 return res.send({
                    error
               })
            }
            res.send({
                forecast: forecastData,
                location,
                aaddress: req.query.address
            })
        })
           
   })

})

app.get('/products', (req, res) => {
     if(!req.query.search){
        return res.send({
             error: 'search term is not provided'
         })
     }
    
    res.send({
         products: []
     })

})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})

