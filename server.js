const express = require('express');
const app=express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(3000,(req,res)=>{
  console.log("Your Server is Listning at PORT http://localhost:3000")
})