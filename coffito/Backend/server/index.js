const express =  require('express')
const connectDB =  require('./db.js')
const itemModel =  require('./models/item.js')



const app =express()

connectDB()

app.listen(3000, () =>{
    console.log("app is running");
})
