const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaurToDelete) {
  const newArray = this.dinosaurCollection.filter( dinosaur => dinosaur !== dinosaurToDelete );
  this.dinosaurCollection = newArray;
};

module.exports = Park;
