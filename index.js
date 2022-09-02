require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

const admin = require('firebase-admin')
const key = require('./key.js')

// const cors = require('cors');
const PORT = process.env.PORT || 4000;

app.listen(PORT)

admin.initializeApp({
    credential: admin.credential.cert(key)
})


const db = admin.firestore();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        "hello": "test"
    })
})

app.post('/post', async (req, res) => {
    

    try {
        console.log(req.body)
        const id = req.body.email;
        const contactJson = {
            fullName: req.body.fullName,
            email: req.body.email,
            whatsapp: req.body.whatsapp,
            uf: req.body.uf,
            city: req.body.city
        };
        const response = db.collection("contacts").add(contactJson);
        res.send(response);
    } catch (error) {
        res.send(error)
        console.log(error)
    }
})



module.exports = app;
