const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose')
const userRoutes = require("./routes/userRoutes")
const messageRoutes = require("./routes/messageRoutes")
require("dotenv").config()

const app = express()


PORT = process.env.PORT | 5000

app.use(cors())
app.use(express.json())

app.use("/api/auth", userRoutes)
app.use("/api/messages", messageRoutes)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("db connected successfully")
}).catch((err) => {
  console.log(err.message)
})


const server = app.listen(PORT, () => {
  console.log(`Server stated on port ${PORT}`)
})