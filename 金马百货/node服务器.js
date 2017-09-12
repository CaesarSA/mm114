var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){ 
    res.setHeader("Access-Control-Allow-Origin","*");
}).listen(6060); 
