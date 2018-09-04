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

Park.prototype.mostPopularDinosaur = function () {
  this.dinosaurCollection.sort(function (a, b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  })
  return this.dinosaurCollection[0];
};
module.exports = Park;
