const express = require('express');
const bodyParser = require('body-parser');
const festivaisRouter = require('./routes/festivaisRoutes'); 
const mongoose = require('mongoose')// Importa rota

let url = 'mongodb+srv://thiagocazuni:24491372@cluster0.vzngj.mongodb.net/eventos?retryWrites=true&w=majority';

let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', festivaisRouter);



let port = 3000;
app.listen(port, () => {
    console.log('Servidor em execução no porto' + port);
});
app.use(express.static(__dirname + '/View'));
app.use(express.static(__dirname + '/public'));


//app.listen(8081)// não pode ter nada abaixo desta linha