const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://lucas2:lucas@appdb-g7wf7.mongodb.net/tindevDB?retryWrites=true&w=majority',{useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(3333);    

