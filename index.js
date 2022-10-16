const express = require("express")

const cors = require("cors")

const mongoose = require("mongoose")

require("dotenv").config()

const Contact = require("./schema")

const {DB_URL, PORT=3001} = process.env

const path = require("path")


const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, "front/build")))


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "front/build", "index.html"))
})

app.get("/contacts", async(req, res)=>{
    const allContacts = await Contact.find()
    res.send(allContacts)
})

app.post("/contacts", async (req, res) =>{
    const newContact = await Contact.create(req.body) 

    res.send(newContact)
})

app.delete("/contacts/:id", async (req, res) =>{
    const delContact = await Contact.findOneAndDelete({id:req.params.id} )

    res.send(delContact)
})

app.get("/contacts/:id", async (req, res) =>{
    const contact = await Contact.findOne({id:req.params.id}) 

    res.send(contact)
})

app.use((req, res, next)=>{
    res.status(404).send("Page not found")
})

app.use((err, req, res, next)=>{
    const {status = 500, message} = err
    res.status(status).send(message)
})


mongoose.connect(DB_URL, ()=>{
    console.log("Ok")
})
app.listen(PORT, ()=>{
    console.log(`${PORT} yes`)
})

