const assert = require('assert');
const MarioChar = require('../models/mario');

describe('Save data to DB', () => {
    it('sAVES A RECORD', (done) => {
        
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(() => {
            assert(char.isNew === false);
            done();
        });
    })
});