const request = require('supertest');
const sinon = require('sinon');
const app = require('../../app');
const { expect } = require('chai');

//mock
const transferService = require('../../service/transferService');

describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinatário inexistentes recebo 404', async () =>{
            const response = await request(app)
                .post('/transfers')
                .send({
                    from: 'user1',
                    to: 'user2',
                    value: 100
            });
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');
        });

        // No dia a dia só terá mocks no controller
        // Aqui é só para exemplificar o uso de mocks apenas a função do service
        // que é chamada pelo controller
        it('Usando Mocks: Quando informo remetente e destinatário inexistentes recebo 404', async () =>{
            const transferServiceMock = sinon.stub(transferService, 'transfers');
            transferServiceMock.throws({ status: 404, body: { error: 'Usuário remetente ou destinatário não encontrado.' } });
            
            const response = await request(app)
                .post('/transfers')
                .send({
                    from: 'user1',
                    to: 'user2',
                    value: 100
            });
            expect(response.status).to.equal(404);
            expect(response.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado.');
        
            //Resetar o mock
            sinon.restore();
        });

        it('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 created', async () =>{
            const transferServiceMock = sinon.stub(transferService, 'transfers');
            transferServiceMock.returns({
                from: "user1", 
                to: "user2", 
                value: 100, 
                date: new Date().toISOString()
            });
            transferServiceMock.returns({ status: 201, body: { message: 'Transferência realizada com sucesso.' } });
            
            const response = await request(app)
                .post('/transfers')
                .send({
                    from: 'user1',
                    to: 'user2',
                    value: 100
            });
            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('message', 'Transferência realizada com sucesso.');
        
            //Resetar o mock
            sinon.restore();
        });
    });

    describe('GET /transfers', () => {
        // its aqui
    });
});