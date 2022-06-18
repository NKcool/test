const express = require("express")
const request = require("request")
const bodyParser = require("body-parser")
const https = require("https");





const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
var name = "naveen";

const birthday = new Date();
const day = birthday.getDay();
let currentDay = "";
let local_task = []
let work_task = []
switch (day) {

    case 0:
      currentDay = "It's Sunday!"
      break;
    case 1:
        currentDay = "It's Monday"
      break;
    case 2:
        currentDay = "It's Tuesday"
      break;
    case 3:
        currentDay = "It's Wednesday"
      break;
    case 4:
        currentDay = "It's Thursday"
      break;
    case 5:
        currentDay = "It's Friday"
      break;
    case 6:
        currentDay = "It's Saturday"
      break;

  }
  
app.get("/",function(req,res){
    res.render("home",{currentDay:currentDay,task:local_task,tital:"local list"});
})

app.post("/",function(req,res){
  
  if(req.body.button === "work list"){
    work_task.push(req.body.newTask)
    res.redirect("/work")
  }
  else{
    if(req.body.newTask === ""){
      res.redirect("/")
    }
    else{
    local_task.push(req.body.newTask);
    res.redirect("/")
    }
  }
  
})

app.get("/work",function(req,res){
    res.render("work",{currentDay:currentDay,task:work_task,tital:"work list"})
})

app.post("/clear",function(req,res){
  if(req.body.button === "work list"){
    work_task = []
    res.redirect("/work")
  }
  else{
    local_task = []
    res.redirect("/")
  }
})
app.listen(3000,function(){
    console.log("server is running at port 3000")
})