import express from 'express'
import bodyParser from 'body-parser' //this allow us to take in  incoming post request body
import userRouter from './routes/users.js'
const app = express()
const PORT =5000
app.use(bodyParser.json()) // use json data

app.use('/users',userRouter)

app.listen(PORT,()=>console.log(`SERVER RUNNING ON PORT : http://localhost:${PORT}`, 
))

