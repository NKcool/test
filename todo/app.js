//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose  = require("mongoose")
const app = express();

mongoose.connect('mongodb://localhost:27017/todoListDB');



const itemSchema = {
  item: String
}

const Item = mongoose.model("item",itemSchema);

const newItem1 = new Item ({
  item:"Buy Food"
})
const newItem2 = new Item ({
  item:"cook food"
})
const newItem3 = new Item ({
  item:"Eat food"
})


const items = [];



// Item.deleteMany(function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("done")
//   }
// });

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const workItems = [];

app.get("/", function(req, res) {

const day = date.getDate();



Item.find(function(err,item){
  if(err){
    console.log(err);
  }else{
    if(item.length==0){
      newItem1.save()
      newItem2.save()
      newItem3.save()
      console.log("predefined item are saved done !")
      res.redirect("/");
    }else{
    res.render("list", {listTitle: day, newListItems: item});
    }
  }
});

  

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {

    const newestItem = new Item({
      item:item
    })
    newestItem.save();

    res.redirect("/");
  }
});

app.post("/delete",function(req,res){
  const responseData = req.body.checkbox;
  Item.findByIdAndRemove(responseData,function(err){
    if(err){
      console.log(err);
    }else{
      console.log("item deleted !")
    }
  })
  res.redirect("/");
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

