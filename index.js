let express = require('express')

let app = express()

app.use(express.json())

let catDataBase = ['sparkles', 'jumpy', 'gogi', 'banjo', 'messi', 'binx', 'comet']

//we are going to use express.static()
//what it does, is it takes the path to a folder in my project as a parameter
//and it does some "black magic" to make it so there are GET endpoints associated with
//every file in that folder
//so once we do this express.static()
//there will be a GET endpoint, '/index.html' that serves the HTML file as a response,
//a GET enpoint, '/main.js' that serves the JS file as a response,
//a GET enpoint, '/styles.css', that serves the CSS file as a response
//a GET endpoint, '/', that serves index.html's HTML specifically


app.use(express.static(__dirname + '/public'))


app.get('/cat', (req, res) => {
  let randomIndex = Math.floor(Math.random() * catDataBase.length + 1)

  res.status(200).send(catDataBase[randomIndex])
})


app.listen(4001, () => {
  console.log('server running on port 4001')
})