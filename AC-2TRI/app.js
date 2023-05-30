const url = 'http://localhost:3000/produtos'
fetch(url)
.then((req) => req.json())
.then((data) => mostraProdutos(data));

function mostraProdutos(produtosPerfumes){
const htmlProdutos = produtosPerfumes.map(
(produtoPerfumes) =>`

<div class="col">
            <div class="card h-100">
              
              <div class="card-body">
              <img src=${produtoPerfumes.imagem}>
                <a href="#" class="btn btn-primary dourado">Comprar</a>
              </div>
              <div class="card-footer">
              <h2>${produtosPerfumes.descricao}</h2>
              <h4>Valor : ${produtoPerfumes.valor}</h4>
              </div>
            </div>
          </div>`
);
document.getElementById('app').innerHTML = htmlProdutos;
}
