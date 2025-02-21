const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.listen(port, () => console.log("listening on port: ", port));

mongoose.connect("mongodb://localhost:27017/dbDaisy")
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => console.log("error occurred during mongo connection",err));

