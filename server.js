// import fetch from 'node-fetch';
const axios = require("axios");
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors());

// Can send an html file
// app.get('/', (req, res) => {
//   res.send('Hello World!')
    // res.sendFile(__dirname + '../front_end/index.html')
    // res.sendFile("/Users/tommy/Documents/term_1/comp_1537/lab9-weather-app-node-js-and-express-js-TommyJu/front_end/index.html");
    
// })
// app.get("/", (req, res) => res.type('html').send(html));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/weather', async (req, res) => {
    console.log(req.query.city)
    resp = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=7e0b4d751df9c8683642fcd8e6807653&units=metric`)
    weatherData = resp.data;
    temperature = weatherData.main.temp;
    description = weatherData.weather[0].description;
    icon = weatherData.weather[0].icon;
    
    res.json = await ({temperature, description, icon});
    // console.log(resJson)
    // res.send(resJson)
})

// app.get('/weather', async (req, res) => {
//   console.log(req.query.city)
//   resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=7e0b4d751df9c8683642fcd8e6807653&units=metric`)

//   resJson = await resp.json();
//   console.log(resJson)
//   res.send(resJson)
// })

// app.get('/weather', async (req, res) => {
//   console.log(req.query.city)
//   resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=7e0b4d751df9c8683642fcd8e6807653&units=metric`)

//   resJson = await resp.json();
//   console.log(resJson)
//   res.send(resJson)
// })

