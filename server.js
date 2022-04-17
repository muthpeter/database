const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const fetch = require('node-fetch');
const res = require('express/lib/response');

const targetUrl = "http://137.184.113.181:8001/admin/jsonList?fbclid=IwAR3uOLKysdlsDY3YpF16ftad1K_1uhfBnJvqyqt4MWVrr-cI-MPRFZJv9bs"

var adattable

app.get('/get', async (req,res) =>{
    fetch(targetUrl)
    .then(res =>  res.json()).then(json => adattable = json)
    res.send(adattable)     
})
     



app.use(express.static(path.join(__dirname)))
 


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 