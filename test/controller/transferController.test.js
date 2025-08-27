const request = require('supertest');
const sinon = require('sinon');
const app = require('../../app');
const { expect } = require('chai');

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
    });

    describe('GET /transfers', () => {
        // its aqui
    });
});