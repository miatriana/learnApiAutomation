const httpLib = require('supertest');

const reqressServer = httpLib('https://reqres.in/api');

function createUser(){
        return reqressServer
        .post('/users')
        .send({
            "name": "morpheus",
            "job": "leader"
        });
    }

    module.exports = {
        createUser
    };