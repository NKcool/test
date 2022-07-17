const mongoose = require('mongoose');
const movieQuote = require("popular-movie-quotes");


  mongoose.connect('mongodb://localhost:27017/userDB');


  const persionSchema = new mongoose.Schema({
      _id:{
        type:Number,
        require:true
      },
      name: {
        type:String,
        required:true
      },
      age: Number,
      hobbis: String
    });
  
  const commentSchema = new mongoose.Schema({
        comment: String
      });
  const workSchema = new mongoose.Schema({
     name:String,
     type: String,
     comment:commentSchema
});


  const Persion = mongoose.model('user', persionSchema);
  const Work = mongoose.model('work', workSchema);
  const Comment = mongoose.model('comment',commentSchema);

  const arr =[];

for(let i=0;i<=5;i++){
  const obj = new Comment({
    comment: movieQuote.getRandomQuote()
  })
  arr.push(obj);
}



  const currentUser = new Persion({
      _id:3,
      name:"naveen",
      age: 20,
      hobbis: "cricket"
  });
  const newComment = new Comment({
    comment:"embed comment for persion john "
  })

  const currentUserWork = new Work({
      name:"naveen",
      type:"heavy workload",
      comment:newComment
  })
  

// Comment.insertMany(arr, function(error){
//   if (error) {
//     console.log(error);
//   }else {
//     console.log("all added ......")
//   }
// });


//  currentUserWork.save();
 newComment.save();
// currentUser.save();

Persion.find(function(err,user) {
  if (err) {
    console.log(err);
  }else {

    user.forEach((item, i) => {
      console.log(item.name);
    });
  }
});

// Comment.deleteMany(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("done");
//   }
// })



Work.updateOne({_id:"62c1497b71aaa1506b798196"},{comment:newComment},function (err) {
  if (err) {
    console.log(err);
  }else {
    console.log("item updated.....!");
  }
})
// Work.deleteOne({type : "heavy work"},function (err) {
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("one item deleted");
//   }
// });
// Work.deleteMany({name:"john"},function (err) {
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("all deleted .....");
//   }
// })

