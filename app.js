/**
 * Created by Andrea on 20/05/2015.
 */
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app);
app.configure(function() {
    //Here we allow to parse JSON
   app.use(express.bodyParser());
    //We can override HTTP methods
    app.use(express.methodOverride());
    //Allows us to create customized routes
    app.use(app.router);
});

app.get('/', function(request, response) {
    var user = {name: "Chesca", password:"123"};
   response.send(user);
});
app.get('/chesco', function(request, response) {
    var chesco = {name: "Chesco", password:"456"};
    response.send(chesco);
});

server.listen(3000, function() {
   console.log("Node is running in chesca REST service");
});