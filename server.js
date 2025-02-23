const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');

const app = express();
const port = 3000;
const app_mail = "daisytestmail01@gmail.com";

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => console.log("listening on port: ", port));

mongoose.connect("mongodb://localhost:27017/dbDaisy")
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log("error occurred during mongo connection",err));

    
const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    service: "gmail",
    auth: {
        user: "daisytestmail01@gmail.com",
        pass:"bgbywgbaoadkyjtq"
    },
});

function SendMail(to, subject, Message){
    transporter.sendMail({
        from: app_mail,
        to: to,
        subject: subject,
        text: Message
    }, (error, info) => error ? console.log("error during sending mail: ",error) : console.log("Email sent!"));
}


app.post("/sendEmail", async (req, res) => {
    console.log("received request");
    try {
        const {Name, Address, PhoneNumber, UserMsg} = req.body;
        SendMail(Address, 
            "Přijat dotaz", 
            "Dobrý den vážený pane / vážená paní "+ Name +", \n přijali jsme vaši zprávu z našeho webu: \n \n \t" + UserMsg + "\n \n odpovíme vám případně na vaše telefonní číslo: " + PhoneNumber);
        
    } catch (err) {
        console.log("mail error:", err);
        return res.status(500).json({Message: "Internal server error:"})
    }
});