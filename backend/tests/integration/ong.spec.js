const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();

  })

  it('Should be  able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      //.set('Authorization', 'ID'); Para passar parametro no teste.
      .send({
        name: "EM@",
        email: "contato@respect.art.br",
        whatsapp: "11989158102",
        city: "São Paulo",
        uf: "RJ"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});