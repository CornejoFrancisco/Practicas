import supertest from 'supertest';
import app from '../../index.js'

// test /api/peliculas GET
describe('GET /api/eventos', () => {
    it('Deberia devolver todos los eventos', async () => {
        const res = await supertest.agent(app).get('/api/eventos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    fecha: expect.any(String),
                    descripcion: expect.any(String),
                    idioma: expect.any(String),
                    mes: expect.any(String),
                    eliminado: expect.any(Boolean)
                })
            ]),
        );
    });
});
// test /api/peliculas GET
describe('GET api/eventos?idioma=en&descripcion=officially', () => {
    it('Deberia devolver 3 eventos', async () => {
        const res = await supertest.agent(app).get('/api/eventos?idioma=en&descripcion=officially');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    fecha: expect.any(String),
                    descripcion: expect.any(String),
                    idioma: expect.any(String),
                    mes: expect.any(String),
                    eliminado: expect.any(Boolean)
                })
            ]),
        );
        expect(res.body).toHaveLength(3);
    });
});

// test /api/peliculas GET
describe('GET /api/eventos?descripcion=support', () => {
    it('Deberia devolver 5 eventos', async () => {
        const res = await supertest.agent(app).get('/api/eventos?descripcion=support');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    fecha: expect.any(String),
                    descripcion: expect.any(String),
                    idioma: expect.any(String),
                    mes: expect.any(String),
                    eliminado: expect.any(Boolean)
                })
            ]),
        );
        expect(res.body).toHaveLength(5);
    });
});


// test /api/peliculas GET
describe('GET /api/eventos?idioma=es&descripcion=Congo', () => {
    it('Deberia devolver 1 eventos', async () => {
        const res = await supertest.agent(app).get('/api/eventos?idioma=es&descripcion=Congo');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    fecha: expect.any(String),
                    descripcion: expect.any(String),
                    idioma: expect.any(String),
                    mes: expect.any(String),
                    eliminado: expect.any(Boolean)
                })
            ]),
        );
        expect(res.body).toHaveLength(1);
        expect(res.body[0].mes).toBe('Marzo');
        expect(res.body[0].idioma).toBe('es');
    });
});
