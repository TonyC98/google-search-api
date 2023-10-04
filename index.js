//import express, cors and mongodb
const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

//run the express and cors functions
const app = express()
app.use(cors())
const client = new MongoClient(
  'mongodb+srv://antocaricati98:7yj0nEzIuUIC7G6r@cluster0.zhl5dbi.mongodb.net/google-search'
)
//mongodb configuration
const db = client.db('google-search')
const Results = db.collection('results')
console.log(Results)

//create results route to read data from mongodb database
app.get('/results', async (req, res) => {
  await client.connect()
  // Get all the results
  let results = await Results.find({}).toArray()

  // Filter data searched
  let filteredData = results.filter(
    (element) =>
      element.title.toLowerCase().includes(req.query.search.toLowerCase()) ||
      element.description
        .toLowerCase()
        .includes(req.query.search.toLowerCase()) ||
      element.url.toLowerCase().includes(req.query.search.toLowerCase()) ||
      element.links.includes(req.query.search)
  )
  // Send filtered results
  res.send(filteredData)
})
//create root route
app.get('/', (req, res) => {
  res.send('Welcome to Google Search')
})

//create results route of type get
// app.get('/results', (req, res) => {
//   const data = [
//     {
//       title: 'JS tutorials',
//       description: 'The best JavaScript tutorials in the galaxy!',
//       url: 'https://www.w3schools.com',
//       links: [
//         {
//           title: 'JS for Beginners',
//           url: 'https://www.w3schools.com/js',
//         },
//         {
//           title: 'JS for the Web',
//           url: 'https://www.w3schools.com/js',
//         },
//       ],
//     },
//     {
//       title: 'Python tutorials',
//       description: 'Python tutorials',
//       url: 'https://www.w3schools.com',
//       links: [
//         {
//           title: 'Python for Beginners',
//           url: 'https://www.w3schools.com/js',
//         },
//         {
//           title: 'Python for the Web',
//           url: 'https://www.w3schools.com/js',
//         },
//       ],
//     },
//   ]

// })

//keep the server active
app.listen(4000, () => {
  console.log('active server')
})
