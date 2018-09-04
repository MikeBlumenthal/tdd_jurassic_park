const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let dino1;
let park1;

describe('Park', function() {

  beforeEach(function () {
    dino1 = new Dinosaur("allosaurus", "carnivore", 100);
    dino2 = new Dinosaur("stegosaurus", "herbivore", 50);
    dino3 = new Dinosaur("compsognathus", "omnivore", 20);
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

  it('should be able to add a dinosaur to its collection', function(){
    park1.addDinosaur(dino1);
    const actual = park1.dinosaurCollection;
    const expected = [dino1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park1.dinosaurCollection = [dino1, dino2, dino3];
    park1.removeDinosaur(dino2);
    const actual = park1.dinosaurCollection;
    assert.deepStrictEqual(actual, [dino1, dino3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park1.dinosaurCollection = [dino1, dino2, dino3];
    const actual = park1.mostPopularDinosaur();
    assert.strictEqual(actual, dino1);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
