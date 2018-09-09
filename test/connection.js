const mongoose = require('mongoose');

// ES6 Promise
mongoose.Promise = global.Promise;

// Connect to the db first
before((done) => {

    // Connect to monogodb
    mongoose.connect("mongodb://localhost:27017/testaroo", { useNewUrlParser: true });

    mongoose.connection.once('open', ()=> {
        console.log('Great! we connected');
        done();
    }).on('error', (err) => {
        console.log(`Connect Error ${err}`);
    });
    

});

beforeEach( (done) => {
    mongoose.connection.collections.mariochars.drop( () => {
        done();
    });
});

after( () => {
    mongoose.connection.close();
})