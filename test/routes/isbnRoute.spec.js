var request = require('supertest');
require = require('really-need');

describe('API', function () {
    this.timeout(10000);

    before(() => {
        server = require('../../server', {bustCache: true});
    });

    after((done) => {
        server.close(done);
    });

    describe('responds status 200', () => {
        var expectedResponseForIsbnLookup = {
            title: 'JavaScript: The Good Parts: Working with the Shallow Grain of JavaScript',
            isbn: '0596517742',
            author: ['Douglas Crockford'],
            edition: '1',
            publisher: ['O\'Reilly and Associates'],
            numberOfPages: '170'
        };

        it('when valid isbn is provided', (done) => {
            request(server)
                .post('/api/isbn')
                .send({'isbn': '0596517742'})
                .expect(200, expectedResponseForIsbnLookup)
                .end(done);
        });

        it('when valid isbn containing dashes is provided', (done) => {
            request(server)
                .post('/api/isbn')
                .send({'isbn': '059-651774-2'})
                .expect(200, expectedResponseForIsbnLookup)
                .end(done);
        });
    });

    describe('responds status 400', () => {
        it('when invalid isbn is provided', (done) => {
            request(server)
                .post('/api/isbn')
                .send({'isbn': 'a very invalid isbn'})
                .expect(400, {
                    error: 'You provided an invalid isbn!'
                })
                .end(done);
        });
    });
});