const express = require('express');

const app=express();
app.get('/',(req,res)=>res.send('hello word express'))
app.listen(3000);
console.log('funciona en el puerto 3000');