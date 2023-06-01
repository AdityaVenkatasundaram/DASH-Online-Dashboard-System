const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://rprashanth1211:Pr%40%24h%40nth1211@cluster0.cp00gz8.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;