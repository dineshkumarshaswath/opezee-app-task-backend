
 const express=require('express')
 const cors=require("cors")
 const dbConnection=require("./db.js")
const appRouter = require('./Router/appRouter.js')

 const app=express()
 const PORT=8888

 app.use(express.json())
 app.use(cors())

 dbConnection()
 

 app.get("/",(req,res)=>{
    res.send("Server condition fine")

 })

 app.use("/windows",appRouter)


app.listen(PORT,()=>console.log(`server running on localhost:${PORT}`))