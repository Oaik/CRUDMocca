const assert = require('assert');
const MarioChar = require('../models/mario');

describe('Deleting recoard', () => {
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

    it('Deletes A RECORD', (done) => {
        
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then( () => {
            MarioChar.findOne({
                name: 'Mario'
            }).then( (result) => {
                assert(result === null);
                done();
            });
        })

    });

});