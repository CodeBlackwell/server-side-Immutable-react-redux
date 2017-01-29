var express = require('express')
var app     = express()

app.get('/', function (request, response) {
    const html = '<h1>Hello World</h1>'
    response.send(html)
});

var PORT = 3000
app.listen(PORT, function () {
    console.log('Now serving from http://localhost:' + PORT)
})
