const express = require ('express')

const app = express()
const port = 5000


//Static Files(Here we route our html to use the public folder)
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/jss'))

//body parser for
app.use(express.urlencoded({extended: true}));

//Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))