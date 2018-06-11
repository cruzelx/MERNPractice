var express = require("express");
var app = express();
var path = require('path');

app.get('/',(req,res)=>res.send("<h1>ROOT</h1>"));
app.get('/alex',(req,res)=>res.send("<h1>Alex Page</h1>"));
app.post('/',(req,res)=>res.send("<h1>Post Request</h1>"));
app.use('/static',express.static(path.join(__dirname,'public')));
app.all('/serve',(req,res,next)=>{
    res.send("<h1>Server</h1>");
    next();
});
app.set('port',process.env.PORT || 8000);
app.listen(app.get('port'),()=>console.log('listening...'));
