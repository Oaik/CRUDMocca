const assert = require('assert');
const MarioChar = require('../models/mario');

describe('Finding recoard', () => {
    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    });

    it('FIND A RECORD', (done) => {
        
        MarioChar.findOne({
            name: 'Mario'
        }).then((result) => {
            assert( result.name === 'Mario');
            done();
        });

    });

    it('FIND A RECORD by id', (done) => {
        
        MarioChar.findOne({
            _id: char._id
        }).then((result) => {
            assert( result.id.toString() === char._id.toString() );
            done();
        });

    });
});