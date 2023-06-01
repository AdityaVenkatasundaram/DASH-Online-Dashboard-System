let client = require('../dbConnection');
let collection = client.db('test').collection('GraphicalData1');
let user = client.db('test').collection('GraphicalData1');

function insertdata(data, callback) {
    collection.insertOne(data, callback);
}

function getAlldata(callback){
    collection.find().toArray(callback);
}

function removedata(data, callback) {
    collection.deleteOne(data, callback);
}





module.exports = {insertdata,getAlldata,removedata}