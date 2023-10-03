//import express and cors
const express = require('express')
const cors = require('cors')

//run the express and cors functions
const app = express()
app.use(cors())

//create root routes
app.get('/', (req, res) => {
  res.send('Welcome to Google Search')
})

//create results route of type get
app.get('/results', (req, res) => {
  const data = [
    {
      title: 'JS tutorials',
      description: 'The best JavaScript tutorials in the galaxy!',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JS for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'JS for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
    {
      title: 'Python tutorials',
      description: 'Python tutorials',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'Python for Beginners',
          url: 'https://www.w3schools.com/js',
        },
        {
          title: 'Python for the Web',
          url: 'https://www.w3schools.com/js',
        },
      ],
    },
  ]
  let filteredData = data.filter(
    (element) =>
      element.title.toLowerCase().includes(req.query.search.toLowerCase()) ||
      element.description
        .toLowerCase()
        .includes(req.query.search.toLowerCase()) ||
      element.url.toLowerCase().includes(req.query.search.toLowerCase()) ||
      element.links.includes(req.query.search)
  )
  res.send(filteredData)
})

//keep the server active
app.listen(4000, () => {
  console.log('active server')
})
