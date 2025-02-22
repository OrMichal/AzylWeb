const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => console.log("listening on port: ", port));

mongoose.connect("mongodb://localhost:27017/dbDaisy")
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log("error occurred during mongo connection",err));

const _mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "daisytestmail01@gmail.com",
        pass:"Dt123456"
    }
});

_mail.sendMail({
    from: "daisytestmail01@gmail.com",
    to: "misaorsah5@gmail.com",
    subject: "test",
    text: "testovací zpráva"
}, (error, info) => error ? console.log(error) : console.log("email sent: ", info.response));

app.post("/sendEmail", (req, res) => {
    console.log("received request");
    
    const {Name, Address, PhoneNumber, UserMsg} = req.body.json();
    _mail.sendMail({
        from: "daisytestmail01@gmail.com",
        to: Address,
        subject: "Received message",
        text: "Dobrý den, \n přijali jsme vaši zprávu: " + UserMsg
    }, (error, info) => {
        if(error){
            console.log(error);
            return;
        }
        console.log("Email sent: ", info.response);
    });
});