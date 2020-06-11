import express, { request, response } from 'express';

const app = express();

app.use(express.json());

    // Rota: Endereço completo da nossa requisição
    // Recurso: Qual entidade estamos acessando do sistema

    // Requisições:
    // GET: Buscar uma ou mais informações do back-end
    // POST: Criar uma nova informação do back-end
    // PUT: Atualizar uma informação do back-end
    // DELETE: Remover uma informação do back-end

    // POST http://localhost:3333/users = Criar um usuário
    // GET http://localhost:3333/users = Listar usuários
    // GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

    // Requesr Param: Parâmetro que vem na própria rota que identifica um recurso
    // Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
    // Resquet Body: Parâmetros para criação/atualização de informações

    const users = [
            'Diego', //0
            'Cliton', //1
            'Robson', //2
            'Fabiano' //3
    ];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users; 

    // JSON para retornar uma variavel ou um array com dados

    return response.json(filteredUsers);

    // SEND retornaria o texto fixo

    // response.send('Hello World!');
});

app.get('/users/:id', (resquest, response) => {
    const id = Number(resquest.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);