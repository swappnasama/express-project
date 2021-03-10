const express = require('express');
const app=express();

// const path=require('path');

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('./public'));


app.use(function(request,response){
  response.status(404);
  response.send('custom 404: File Not Found');

});

const PORT=process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log(`Listening on port:${PORT}`);
});