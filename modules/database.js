var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma',connectionStatus);
/** 
Connection callback for fail and ok cases
**/
function connectionStatus(err,ok){
  
  if(err){
      console.log(err.message);
}else{
    console.log("We are connected!");
  }
}

var Article = mongoose.model('Article',{
  title:String,
  content:String,
},'article' );

//Using exports objects you expose the data to other modules
exports.Article = Article;

exports.myFunction = function(){
  console.log("This ");
} 