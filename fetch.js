const fetch = require('node-fetch');


const targetUrl = "http://137.184.113.181:8001/admin/jsonList?fbclid=IwAR3uOLKysdlsDY3YpF16ftad1K_1uhfBnJvqyqt4MWVrr-cI-MPRFZJv9bs"



fetch(targetUrl)
    .then(res =>  res.json()).then(json => adattable = json).then(() => {
     var {id, price} = adattable[1]
     console.log(adattable[1])
     console.log(id,price)
     })
    

module.exports = fetch()