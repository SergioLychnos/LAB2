
//Name: Sergio Dos Santos
// cyclic url : https://jade-tame-piglet.cyclic.app/
// github url: https://github.com/SergioLychnos/LAB2


var HTTP_PORT = process.env.PORT || 3000;

var express = require("express");
var app = express();


app.use(express.json());                                                       
app.use(express.urlencoded({ extended: false }));     

app.get("/", (req, res) =>{                                               
    res.send(`<h1>WEB222 LAB2<h1>`);
});



const server = app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});


