const {expect} = require('chai');
const apiReqress = require('../API/api_user_reqress');

describe('Test API user reqress', async () => {
    it('test api create user result should return success', async () => {
        const response = await apiReqress.createUser(); 

        console.log(response.status);
        expect(response.status).to.equal(201);
    });
});

