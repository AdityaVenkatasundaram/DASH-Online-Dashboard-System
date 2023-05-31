var expect  = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/api/beaches";
let cat = {
    title: 'kitten-unique-3',
    link: 'kitten',
    path: 'kitten',
    description: 'kitten'
}

describe('test get all cats', function() {
    it('return status code of 200', function(done){
        request(url, function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return succesful message', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('returns an array', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('test post a cat', function() {
    it('insert a cat to database', function(done){
        request.post({url:url, form:cat}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Cat Successfully Added');
            done();
        });
    });
});

describe('delete a cat', function(){
    it('delete a cat from database', function(done){
        request.delete({url:url, form: cat}, function(error,response,body){
            body = JSON.parse(body);

            expect(body.message).to.contain('Cat successfully Deleted');
            done();
        });
    });
});