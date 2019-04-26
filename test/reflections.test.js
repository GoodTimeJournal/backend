const request = require('supertest');
const app = ('https://polar-plateau-24996.herokuapp.com');
const db = require('../data/helper/config.js');
const testData = {
                "id": 2111,
                "week": "Two",
                "fk": 1,
                "journalEntry": "test",
                "insights": "test",
                "trends": "test",
                "surprises": "test",
                "url": null
            }

// Login first to satisfy authorization requirements
beforeAll((done) => {
    request(app)
    .post('/api/login')
    .send({
        username: 'admin',
        password: 'password',
    })
    .end((err, response) => {
        token = response.body.token; // save the token!
        done();
    });
});

describe('Auth tests', () => {
// token not being sent - should respond with a 401
    test('It should require authorization', () => {
        return request(app)
        .get('/reflections')
        .then((response) => {
            expect(response.statusCode).toBe(401);
        });
    });

// send the token - should respond with a 200
    test('It responds with JSON', () => {
        return request(app)
        .get('/')
        .set('Authorization', `${token}`)
        .then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe('text/html');
        });
    });
});

// Testing get request for reflections
describe('Reflection routes', () => {
    test('responds with 200 at get /reflections', () => {
        return request(app)
        .get('/reflections')
        .set('Authorization', `${token}`)
        .then(response => {
            console.log(response.body)
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Array)
        })
    });

//  Testing Get Request for reflections by ID
    test('responds with 200 at /reflections/:id', () => {
        return request(app)
        .get('/reflections/2')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

// Testing Post for reflections
    test('responds with 201 at post /reflections', () => {
        return request(app)
        .post('/reflections')
        .set('Authorization', `${token}`)
        .send(testData)
        .then(response => {
            expect(response.statusCode).toBe(201)
        })
    })

// Testing Put for reflections
    test('responds with 200 at put /reflections/:id', () => {
        return request(app)
        .put('/reflections/2111')
        .set('Authorization', `${token}`)
        .send({
            "id": 2111,
            "week": "Three",
            "fk": 1,
            "journalEntry": "test",
            "insights": "test",
            "trends": "test",
            "surprises": "test",
            "url": null
        })
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.message).toBe("Reflection updated")
        })
    })

// Testing Delete for reflections
    test('responds with 202 at delete /reflections/:id', () => {
        return request(app)
        .delete('/reflections/2111')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.message).toBe("Reflection deleted")
        })
    })
})