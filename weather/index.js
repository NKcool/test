const express = require("express");
const bodyPhaser = require("body-parser");
const https = require("https")
var app = express();


app.use(bodyPhaser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html")
})

app.post("/",function(req,res){



    const city = req.body.city
    const api = "c7c61f76639958dc387fe1f5f5fe5c75"
    const url = "https://api.openweathermap.org/data/2.5/weather?appid="+api+"&q="+city+""
    https.get(url,function(responce){
        responce.on("data",function(data){

            const mainData = JSON.parse(data)
            const temp = Math.round(mainData.main.temp - 273.15);
            const description = mainData.weather[0].description;
            const place = mainData.name
            const iconCode = mainData.weather[0].icon
            const icon_url = "http://openweathermap.org/img/wn/"+iconCode+"@2x.png"

            
            console.log(responce.statusCode)
            res.write("<h1>Temprature at " + place +" is "+temp+"d/c</h1>")
            res.write("<br> And weather is currently "+description)
            res.write(`<img src="`+icon_url+`">`)
            res.send()

        })
    })
})

app.listen(3000,function(){
    console.log("running")
})
