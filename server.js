const express = require('express');
const expressLayouts= require('express-ejs-layouts');
require('dotenv').config();

//routes
const indexRouter=require('./routes/index');

//connecting to database
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true,
  useUnifiedTopology: true 
 });
    const db=mongoose.connection;
    db.on('error',error => console.log(error));
    db.once('open',() => console.log('conected to database'));

const app= express();

app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/',indexRouter);




app.listen(process.env.PORT || 3000, ()=>console.log('server up and running'));