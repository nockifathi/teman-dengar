//jshint esversion:6

const express = require("express");
const request = require("request");
const app = express();

app.use(express.static("public"));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html")
})

app.get("/about", function(req, res){
  res.send("untuk didengar, sahabat baik untuk dibaca")
})
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
