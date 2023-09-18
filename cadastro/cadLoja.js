const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 20000
    }
);


const produtoSchema = new mongoose.Schema({
    codigo : String,
    descricao: String,
    valor: Number,
    estoque: Number,
});

const Produtos = mongoose.model('Produtos', produtoSchema)

function lerCSVSalvarNoMongo(){
    const resultados = [];

    fs.createReadStream('exemplo - base.csv')
    .pipe(csv())
    .on('data',(dados)=>{
        resultados.push(dados);
    })
    .on('end',()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log("Dados inseridos com sucesso");
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error('Erro ao importar dados', error)
            mongoose.connection.close();
        })
    })
}

lerCSVSalvarNoMongo();

