'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('should create sunday date', function() {
        var result = numFormatter(0);
        expect(result.getDay()).to.equal(0);
    });

    it('should create monday date', function() {
        var result = numFormatter(1);
        expect(result.getDay()).to.equal(1);
    });

    it('should create tuesday date', function() {
        var result = numFormatter(2);
        expect(result.getDay()).to.equal(2);
    });

    it('should create wednesday date', function() {
        var result = numFormatter(3);
        expect(result.getDay()).to.equal(3);
    });

    it('should create thursday date', function() {
        var result = numFormatter(4);
        expect(result.getDay()).to.equal(4);
    });

    it('should create friday date', function() {
        var result = numFormatter(5);
        expect(result.getDay()).to.equal(5);
    });

    it('should create saturday date', function() {
        var result = numFormatter(6);
        expect(result.getDay()).to.equal(6);
    });

    it('should return null', function(){
        var result = numFormatter(-1);
        expect(result).to.equal(null)
    });

    it('should return null', function(){
        var result = numFormatter(7);
        expect(result).to.equal(null);
    });

    it('should return sunday date', function(){
        var result = numFormatter(0.9);
        expect(result.getDay()).to.equal(0);
    });

    it('should return exact same date', function(){
        var result = numFormatter(0);
        expect(result).to.equal(numFormatter(0));
    })
});