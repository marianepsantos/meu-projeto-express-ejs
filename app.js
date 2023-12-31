const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));


const produtos = [
  {id: 1, nome: "Body splash Summer ", preço: "R$99,10", descricao: "Um bem-estar envolvente como o verão", imagem: "sumer.png" },
  {id: 2, nome: "Body Splash Pink ", preço: "R$99,20", descricao: "Reivindique o seu estilo Pink da melhor forma!", imagem: "pink.webp" },
  {id: 3, nome: "Body Splash Infinity", preço: "R$99,30", descricao: "Transmita determinação da melhor forma com WEPINK", imagem: "infinity.webp" },
  {id: 4, nome: "Body Splash Liberté", preço: "R$99,40", descricao: "Transborde a essência da elegância!", imagem: "liperté.webp" },
  {id: 5, nome: "Body Splash Red ", preço: "R$99,50", descricao: "Um aroma brilhante para despertar desejo e sofisticação", imagem: "red.webp" },
  {id: 6, nome: "Body Splash Pureblixx", preço: "R$99,60", descricao: "O verdadeiro elixir inebriante feito para você", imagem: "Vf.png" },
  {id: 7, nome: "Body Splash Infinity Star", preço: "R$99,70", descricao: "Encontro celestial de bem-estar", imagem: "star.webp" },
  {id: 8, nome: "Body Splash VF Aqua", preço: "R$99,80", descricao: "Pele perfumada em uma essência única e refrescante", imagem: "infinity.webp" },
  {id: 9, nome: "Body Splash Obsessed", preço: "R$99,90", descricao: "Uma fragrância marcante e intensa para o seu bem-estar", imagem: "obsessed.png" },
  {id: 10, nome: "Body Splash One Touch", preço: "R$99,99", descricao: "Exale poder e bem-estar", imagem: "onetouch.webp" },
]

function buscarProdutosPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null
}


app.get('/produto/:id', (req, res) => {
  const produto = buscarProdutosPorID(req.params.id);
  res.render('produto', {produto});
});

app.get('/', (req, res) => {
  res.render('index', {produtos });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});