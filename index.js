//import express
const express = require('express')
//run the express function
const app = express()
//keep the server active
app.listen(4000, () => {
  console.log('active server')
})
