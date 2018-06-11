const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send("<h1>ROOT</h1>"));
app.get('/alex',(req,res)=>res.send("<h1>Alex Page</h1>"));
app.listen(3000,()=>console.log('listening...'))