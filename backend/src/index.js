const express = require('express');
const mongoose = require('mongoose');
const routes = require('./models/routes');

const app = express();

mongoose.connect('mongodb+srv://jhefsalles:@Teste20201.@cluster0-ecswf.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);