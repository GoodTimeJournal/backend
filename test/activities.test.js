const request = require('supertest');
const app = ('https://polar-plateau-24996.herokuapp.com');
const db = require('../data/helper/config.js');
const testData = {
                "id": 2111,
                "name": "Test",
                "fk": 1,
                "enjoymentRating": 3,
                "energyLevel": 2,
                "engagement": 2
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

// Testing Get request for activities
describe('Activity routes', () => {
    test('responds with 200 at get /activities', () => {
        return request(app)
        .get('/activities')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body).toBeInstanceOf(Array)
        })
    });

// Testing Post for activities
    test('responds with 201 at post /activities', () => {
        return request(app)
        .post('/activities')
        .set('Authorization', `${token}`)
        .send(testData)
        .then(response => {
            expect(response.statusCode).toBe(201)
        })
    })

// Testing Get Request for activities by ID
    test('responds with 200 at /activities/:id', () => {
        return request(app)
        .get('/activities/2111')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.statusCode).toBe(200)
        })
    })

// Testing Put for activities
    test('responds with 200 at put /activities/:id', () => {
        return request(app)
        .put('/activities/2111')
        .set('Authorization', `${token}`)
        .send({
            "id": 2111,
            "name": "TestChanged",
            "fk": 1,
            "enjoymentRating": 1,
            "energyLevel": 1,
            "engagement": 1
        })
        .then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.body.message).toBe("Activity updated")
        })
    })

// Testing Get Request for activities by ID on updated
    test('responds with 200 at /activities/:id', () => {
        return request(app)
        .get('/activities/2111')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.body.name).toBe('TestChanged')
        })
    })

// Testing Delete for activities
    test('responds with 202 at delete /activities/:id', () => {
        return request(app)
        .delete('/activities/2111')
        .set('Authorization', `${token}`)
        .then(response => {
            expect(response.statusCode).toBe(202)
            expect(response.body.message).toBe("Activity deleted")
        })
    })
})