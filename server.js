if(process.env.NODE_ENV !=='production')
{
    require('dotenv').config()

}
const express=require('express')
const app=express()
const expresslayouts=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
app.set('views','./views')
app.set('view engine','ejs')


app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(express.static('public'))

const mongoose=require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db=mongoose.connection
db.on('error',error=> console.error(error))
db.on('open',()=> console.log('Connected to mongoose'))
app.use('/',indexRouter)
app.listen(process.env.ORT|| 3000)
