#Olá!

Este é o repositório do back end (api) do projeto desenvolvido para o teste técnico da MyPharma.

Link para o repositório do front end:
https://github.com/viniciusgrp/MyPharma-FrontEnd

Para clonar esse repositório digite o seguinte comando em um terminal git:
git clone git@github.com:viniciusgrp/MyPharma-BackEnd.git

1 - Após clonar o repositório é necessário instalar as dependencias, abra um terminal e digite o seguinte comando:
yarn install

2 - É necessário a criação de um banco de dados em MongoDB, abra o MongoDBCompass e crie um banco (Caso crie com o nome my_pharma não é necessário o próximo passo)

3 - Caso queira colocar um nome diferente de my_pharma no banco de dados, vá em:
src/database/index.js
Altere a linha 4 
mongoose.connect("mongodb://127.0.0.1/my_pharma");

Coloque as informações de conexão com o banco de dados. Exemplo:
mongoose.connect("mongodb://127.0.0.1/nome_do_banco");

Caso dê erro de conexão ao banco de dados altere a linha para:
mongoose.connect("mongodb://localhost:27017/nome_do_banco);

4 - Após a instação execute o servidor com o comando:
yarn dev

5 - Após iniciar o front end, caso as categorias e produtos não apareçam:
Vá em: src/index.js

Altere a linha 9 

app.use(cors({origin: "http://127.0.0.1:5173"}))

Coloque no lugar de "http://127.0.0.1:5173" o link que está rodando o servidor front end, caso não funcione coloque "*".

6 - Para a execução dos testes execute no terminal o seguinte comando:
yarn test

========== Rotas e exemplos ==========

Rotas de categorias:

Criação:
Método: POST
Endpoint: /categories
Exemplo de body: {
    name: "frutas",
    img: "link_de_uma_imagem_para_representar_a_categoria.com.br/infodafoto.png"
}
A resposta segue o exemplo do body com adição do campo _id com o ID da categoria criada.

Leitura:
Método: GET
Endpoint: /categories
Resposta: [{name: "frutas", img: "linkdafoto.com/foto.png"}] - Array de categorias

Atualização:
Método: PATCH
Endpoint: /categories/:id
Exemplo de body: {
    img: "uma_foto_melhor_para_a_categoria.com/foto.png"
}
Resposta segue o modelo da resposta de criação.

Exclusão:
Método DELETE
Endpoint: /categorias/:id
Resposta: Status 200

Rotas de produtos:

Criação:
Método: POST
Endpoint: /products
Exemplo de body: {
    name: "maca",
    img: "url_foto_produto.com.br/infodafoto.png",
    price: 10,
    category: "frutas,
    quantityStock: 100
}
Campos opcionais do body: {
    discont: true,
    discontPrice: 8.88
}
A resposta segue o exemplo do body com adição do campo _id com o ID do produto criado.

Leitura:
Método: GET
Endpoint: /products
Exemplos de Query Params:
sort=price
sort=-price
sort=name
sort=-name
category=frutas
skip=10 (Quantos itens devem ser ignorados)
limit=10 (Quantos itens devem ser retornados após os ignorados)

Atualização:
Método: PATCH
Endpoint: /products/:id
Exemplo de body: {
    img: "uma_foto_melhor_para_o_produto.com/foto.png"
}
Resposta segue o modelo da resposta de criação.

Exclusão:
Método DELETE
Endpoint: /products/:id
Resposta: Status 200

================ INFORMAÇÕES ================

Tecnologias utilizadas:

Node.Js / express.js / mongoose / cors / jest / api-query-params / nodemon / sucrase / 

================ Observações extras ================

Assim como no front end fiz esse projeto em JavaScript por pensar em utilizar o tempo gasto nas tipagens na execução das funcionalidades, e também percebi que foi uma decisão errada, pois valeria a pena fazer as tipagens.

Foi a primeira vez que utilizei MongoDB, aprendi como utilizar com mongoose em um curso online que comprei para a realização do projeto, antes somente havia trabalhado com bancos SQL nos quais eu utilizava o TypeORM.