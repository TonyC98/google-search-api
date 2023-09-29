//import express
const express = require('express')
//run the express function
const app = express()
//create routes
app.get('/', (req, res) => {
  res.send('Welcome to Google Search')
})
//keep the server active
app.listen(4000, () => {
  console.log('active server')
})
