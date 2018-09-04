const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaurToDelete) {
  const dinosaurArray = this.dinosaurCollection.filter( dinosaur => dinosaur !== dinosaurToDelete );
  this.dinosaurCollection = dinosaurArray;
};

Park.prototype.mostPopularDinosaur = function () {
  this.dinosaurCollection.sort(function (a, b){
    return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  })
  return this.dinosaurCollection[0];
};

Park.prototype.findDinosaursBySpecies = function (species) {
  const matchingDinosaurs = this.dinosaurCollection.filter( dinosaur => dinosaur.species === species );
  return matchingDinosaurs;
};

Park.prototype.removeDinosaursBySpecies = function (species) {
  const savedDinosaurs = this.dinosaurCollection.filter( dinosaur => dinosaur.species !== species );
  this.dinosaurCollection = savedDinosaurs;
};

Park.prototype.totalVisitorsPerDay = function () {
  let array = this.dinosaurCollection;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = count + array[i].guestsAttractedPerDay;
  }
  return count;
};

Park.prototype.totalVisitorsPerYear = function () {
  const day = this.totalVisitorsPerDay();
  return (day * 365);
};

Park.prototype.ticketRevenuePerYear = function () {
  const yearVisitors = this.totalVisitorsPerYear();
  return (yearVisitors * this.ticketPrice);
};

module.exports = Park;
