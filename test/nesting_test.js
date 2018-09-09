const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/authors');

// Descrive a test
describe('Nesting records', () => {
    beforeEach( (done) => {
        mongoose.connection.collections.authors.drop(() => {
            done();
        });
    });
    // create test
    it('Creates author', (done) => {
        
        var pat = new Author({
            name: 'Ana Omar',
            books: [
                {
                    title: 'Whoooo',
                    pages: 350
                }
            ]
        });

        pat.save().then( () => {
            Author.findOne({
                name: 'Ana Omar'
            }).then( (record) => {
                assert(record.books.length === 1);
                done();
            })
        });

    });

    it('Adds a book to an author', (done) => {

        var pat = new Author({
            name: 'Ana Omar',
            books: [
                {
                    title: 'Whoooo',
                    pages: 350
                }
            ]
        });

        pat.save().then( () => {
            Author.findOne({
                name: 'Ana Omar'
            }).then( (record) => {
                record.books.push({
                    title: 'Fooaaa',
                    pages: 550
                });
                record.save().then(() => {
                    Author.findOne({
                        name: 'Ana Omar'
                    }).then( (result) => {
                        assert( result.books.length === 2);
                        done();
                    })
                });
            });
        });

    });

});