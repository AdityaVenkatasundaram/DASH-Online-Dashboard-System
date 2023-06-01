let model = require('../model/model');

const createData = (req,res) => {
    let cat = req.body;
    model.insertdata(cat, (err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat Successfully Added'});
        }
    });
}

const getAlldata = (req,res) => {
    model.getAlldata((err, result) => {
        if (err) {
            res.json({statusCode: 400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successful'});
        }
    });
}

const deleteAllData = (req, res) => {
    let cat = req.body;
    model.removedata(cat, (err, result) => {
        if (err) {
            res.json({statusCode:400, message: err});
        } else {
            res.json({statusCode: 200, data: result, message: 'Cat successfully Deleted'});
        }
    });
};

module.exports = {createData,getAlldata,deleteAllData}