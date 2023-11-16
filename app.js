const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 2, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 3, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 4, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 5, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 6, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 7, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 8, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 9, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
  {id: 10, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
]


function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}


app.get('/produto/:id', (req, res) => {
  res.render('produto', {produtos });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos WEPINK', produtos });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);   
});