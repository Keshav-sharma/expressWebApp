var express = require('express')
var morgan = require('morgan')
var path = require('path')
var app = express()

app.use(morgan('tiny'))
// app.use(morgan('combined'))

app.use('/', express.static(__dirname + '/public'))
app.use('/css',express.static(path.join(__dirname,'node_modules\\bootstrap\\dist\\css\\')))
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js/')))
app.use('/jquery',express.static(path.join(__dirname,'node_modules/jquery/dist/')))

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,'views/index.html'))
})

app.get('/', (req,res) => {
    res.send("Hello World!!!")
})

app.listen(3000, () => {
    console.log("Server listening at : 3000")
})