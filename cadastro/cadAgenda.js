//requisitando o pacote mongoose
const mongoose = require('mongoose');

//criar chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
    }
);


//executando a conexão
const db = mongoose.connection;

//códigos de teste de conexão
db.on('error', console.error.bind(console, 'connection error:'))

db.once('open',function(){
    console.log("Estamos conectados no mongoDB")
})

//segunda - fase - usando banco - C de CRUD
// 1- criando um SCHEMA

const pessoaSchema = new mongoose.Schema({
    numero : String,
    nome: String,
    idade: Number,
    email: String,
});

//2 - criando a model
const Pessoa = mongoose.model('Pessoa', pessoaSchema)

//3 - colocar dados dentro dessa collection 

const epaminondas = new Pessoa({
    numero: '1',
    nome: 'Epaminondas',
    idade: 17,
    email: 'epa@gmail.com'
});

epaminondas.save();

const carla = new Pessoa({
    numero: '2',
    nome: ' Carla',
    idade: 18,
    email: 'carla@gmail.com'
});

carla.save();
