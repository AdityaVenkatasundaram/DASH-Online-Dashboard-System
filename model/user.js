let client = require('../dbConnection');
let user = client.db('test').collection('User');

function userData(data, callback) {
    console.log("entered the database")
    user.insertOne(data, callback);
}
function getdata(data,callback){
    user.find(data.username).toArray(callback);
}
function getAlldata(callback){
    user.find().toArray(callback);
}
function removedata(data, callback) {
    user.deleteOne(data, callback);
}


module.exports = {userData,getAlldata,removedata,getdata}