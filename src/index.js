const { response } = require('express')
const express = require('express')
const { readFile } = require('fs')

const app = express()

app.get('/',(req, res) => {
    readFile('./src/index.html','utf8',(err, html) => {
        if (err){
            response.status(500).send('sorry out of order')
        }
        response.send(html)
    })

})

app.listen(3000,() => console.log('server live on http://localhost:3000'))