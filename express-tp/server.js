const express = require('express');
const app = express();

app.get('/hello-world',function(req,res){
  res.send('hello world')
})

app.get('/message/:message',function(req,res){
  if(req.params.message.length < 20){
  res.send(req.params.message)
  }
  else{
    res.status(400).json({message:"bad request"})
    }
})
app.post('/infos/headers',function(req,res){
  res.send(req.headers)
})


app.listen(3000);
