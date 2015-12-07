//Wait document.ready event


var setting = {
  
          method:"GET",
          url:"http://localhost:27017/articles",
          dataType:"json",
}

$.ajax(setting).done(function(data){
  
  console.log(data);
  //Get all keys](attribute names) From json object
  console.log(Object.keys(data[0]));
  
//Check that there are elements in array
if(data.length > 0){
  
        var headers = Object.keys(data[0]);
    
    //Create table headers dynamicaly
    var row = $("<tr></tr>");
    for(var i = 1; i < headers.length; i++){
      
      //Create row for headers
      $("<th>" + headers[i] + "</th>").appendTo(row);
    }
    /*Add row to thead element*/
    $(row).appendTo("thead");
      
    }
  
  //Create table content dynamically
  for(var i=0; i < data.length; i++){
    
    
      var html = "<tr>" +   
                 "<td>" + data[i].title + "</td>" +
                  "<td>" + data[i].content + "</td>"
                  "</tr>";
    
    $(html).appendTo("tbody");
  }

});

