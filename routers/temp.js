const express = require('express');
const temp_route = express.Router();
temp_route.use(express.json());
temp_route.use(express.urlencoded({extended:true}));
const tempController = require('../controllers/temp')
temp_route.post('/temp',tempController.tempC);

module.exports = temp_route;