(function(){
'use strict';

class Vehicle{
  constructor(type, license){
    this.type = type;
    this.license = license;
  }
}

class Space{
  constructor(type, capacity){
    this.type = type;
    this.capacity = capacity;
    this.spots = [];
    this.carSpotLocation = {};
  }

  size(){
    return this.spots.length;
  }

  insertCar(carInstance){
    if (carInstance.type === this.type && ){
      
    }
  }

  findCar(){

  }

  removeCar(){

  }

}

class Floor{
  constructor(largePerFloor, compactPerFloor){

  }
}


class ParkingLot{
  constructor(floors, largePerFloor, compactPerFloor){
    
  }
}

})()