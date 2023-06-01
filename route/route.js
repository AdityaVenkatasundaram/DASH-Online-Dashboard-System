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


router.get('/registration', function (req, res, next) {
	controller.loginSuccessful(req,res,next);
});


router.post('/', function(req, res, next) {
	controller.userRegistartion(req,res,next);
});

router.get('/login', function (req, res, next) {
	controller.registrationSuccesful(req,res,next)
});

router.post('/login', function (req, res, next) {
    controller.userLogin(req,res,next)
	
});

router.get('/logout', function (req, res, next) {
	controller.logout(req,res,next);
});

router.get('/forgetpass', function (req, res, next) {
	controller.forgetPassword(req,res,next);
});

router.post('/forgetpass', function (req, res, next) {
	controller.forgotPasswordSuccess(req,res,next);
});

router.get('/main', function (req, res, next) {
	controller.main(req,res,next);
});


module.exports = router;