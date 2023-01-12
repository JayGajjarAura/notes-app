const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 5000

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../views')
const partialpath = path.join(__dirname, '../partial')

//setup handelbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialpath)

//setup static dictioary to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        
    })
})

app.listen(port, () => {
    console.log('server is up on port ' + port)
})