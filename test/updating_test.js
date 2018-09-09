const assert = require('assert');
const MarioChar = require('../models/mario');

describe('updating recoards', () => {
    var char;
    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(() => {
            done();
        });
    });

    it('Update A RECORD', (done) => {
        
        MarioChar.findOneAndUpdate({
            name: 'Mario'
        }, {
            name: 'laugi'
        }).then( () => {
            MarioChar.findOne({
                _id: char._id
            }).then( (result) => {
                assert(result.name === 'laugi');
                done();
            })
        });

    });

    it('Update A RECORD', (done) => {
        
        MarioChar.update({}, {
            $inc: { weight: 1 }
        }).then( () => {
            MarioChar.findOne({
                name: 'Mario'
            }).then( (record) => {
                assert(record.weight === 51);
                done();
            })
        });

    });
    

});