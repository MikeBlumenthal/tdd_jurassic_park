const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park1;

describe('Park', function() {

  beforeEach(function () {
    park1 = new Park("Jurassic World", 25);
  })

  it('should have a name', function(){
    const actual = park1.name;
    assert.strictEqual(actual, "Jurassic World");
  });

  it('should have a ticket price', function(){
    const actual = park1.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park1.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
