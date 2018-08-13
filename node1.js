var http= require("http");

var PORT=7000;
var PORT2=7500;

function handleRequest(req,res){
    res.end("it is good! Path:"+req.url);
}

function handleRequest2(req,res){
    res.end("it is bad! Path:"+req.url)
}

var server=http.createServer(handleRequest);
var server2=http.createServer(handleRequest2);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

server2.listen(PORT2,function(){
    console.log("Server listening on: http://localhost"+PORT2)
})
  