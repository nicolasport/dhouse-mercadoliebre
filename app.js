const express = require('express')
var path = require('path');
const app = express()
const port = process.env.PORT || 30000


var filePage = {
    index: '/view/home.html',

}


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, filePage['index']));
})


app.listen(port, () => {
    console.log(`Example app listening at http://0.0.0.0:${port}`)
})