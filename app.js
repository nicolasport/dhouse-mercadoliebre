const express = require('express')
const bodyParser = require("body-parser");
var path = require('path');
const app = express()
const port = process.env.PORT || 3000


var filePage = {
    index: '/view/home.html',
    register: '/view/register.html',
    login: '/view/login.html',

}


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, filePage['index']));
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, filePage.register));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, filePage.login));
})
app.post('/login',(req, res) => {
    var user_name = req.body.username;
    var password = req.body.password;
    console.log(`Nombre de usuario: ${user_name} y contraseña: ${password}`);
    res.redirect("/")
});
app.post('/register',(req, res) => {
    console.log(req.body);
    res.redirect("/")
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})