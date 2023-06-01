var express = require('express');
let router = express.Router();
let controller = require('../controller/controller');

router.post('/api/insertData', (req, res) => {
    controller.createData(req,res);
});

router.get('/api/getData',(req,res) => {
    controller.getAlldata(req,res);
});

router.delete('/api/deleteData',(req,res) => {
    controller.deleteAllData(req,res);
});
module.exports = router;