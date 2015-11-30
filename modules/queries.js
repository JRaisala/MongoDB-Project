var db = require('./database');
     /*
     this function gets all documents from person collection*/
exports.getAllArticles = function(req,res){

  db.Article.find(function(err,data){
    
            if(err){  
                    console.log(err.message);
                    res.send("Error in database");
                }
                else{
                    res.send(data);
                             }
                 });
}