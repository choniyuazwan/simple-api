const request = require('request');

let _ACCOUNT_URL = 'http://localhost:8080/customers';

const getCustomer = (callback) => {
    request(_ACCOUNT_URL,
        {json: true},
        (err, res, body) => {
            if (err) {
                return callback(err);
            }
            return callback(body);
        }
    );
}

// request.post('http://service.com/upload', {form:{key:'value'}})

export {
    getCustomer
};