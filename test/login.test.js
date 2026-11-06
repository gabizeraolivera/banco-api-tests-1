
const request = require('supertest'); //importando supertest
const { expect } = require('chai'); // importando chai

describe('Login', () => { // o teste principal de login, o agrupamento de teste com dois parametros
    describe('POST /login', () => { // quando fizer um POST em login
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => { //precisa ter esse retorno, é o teste em si

            const resposta = await request('http://localhost:3000') //faz a requisicao pra localhost e guarda em resposta
                .post('/login')//chamada para a url /login, no metodo POST
                .set('Content-Type', 'application/json')//NO SWAGGER DIZ QUE TEM QUE MANndar um content-type do tipo json
                .send({//aqui envio o body
                    username: 'julio.lima',
                    senha: '123456'
                });

            console.log(resposta.status)
            console.log(resposta.body)
            
            expect(resposta.status).to.equal(200);//valida que o status é 200
            expect(resposta.body.token).to.be.a('string');//valida que o token é do tipo string


            
        });
    });
});
//adicionar no package json
// no terminal rodar npm test