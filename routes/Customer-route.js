import express from 'express';
import * as CustomerService from '../services/Customer-service';


const CustomerRoutes = express.Router();

CustomerRoutes.post('/customers', (req, res, next) => {
    // const customer = 
});

CustomerRoutes.get('/customers', (req, res, next) => {
    CustomerService.getCustomer(function(response){
        console.log(JSON.stringify(response));
        res.json(response);
        res.end();
    });
});

export default CustomerRoutes;