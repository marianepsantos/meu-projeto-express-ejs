const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produto = [
  {id: 1, nome: "Body Splash Infinity", preço: "R$99,00", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "https://wepink.vtexassets.com/arquivos/ids/156226-800-auto?v=638017234609830000&width=800&height=auto&aspect=true" },
]

pp.get('/produto', (req, res) => {
  res.render('produto', { message: 'Bem vindo a página de produtos!' });
});

app.get('/', (req, res) => {
  res.render('index', { message: 'Produtos WEPINK' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});