/**
 * Created by nkim on 6/21/2017.
 */

import data from './JsonData';
import {DataError} from './DataError';
import {Car} from './Car';
import {Drone} from './Drone';
import {assert} from 'chai';


class FleetDataService {
  constructor(){
    this.velhicles = [];
  }

  loadData(jsonArray){
    let dataError = [];

    for(let obj of jsonArray){

      if (obj.type == 'car'){
        let newCar = new Car(obj.license, obj.model, obj.latlong, obj.make, obj.miles);
        this.velhicles.push(newCar);
      } else if (obj.type == 'drone'){
        let newDrone = new Drone(obj.license, obj.model, obj.latlong, obj.airTimeHours, obj.base);
        this.velhicles.push(newDrone);
      } else{
        dataError.push(new DataError("unknown object", obj));
      }
    }

    return dataError;
  }

  getCars(){
    let cars = [];
    for(let i of this.velhicles){
      if(i instanceof Car) {
        cars.push(i);
      }
    }
    return cars;
  }

  getCarByLicense(license){
    let cars = this.getCars();
    for(let car of cars){
      if (car.license == license){
        return car;
      }
    }
  }

  getCarsSortedByLicense(license){
    let cars = this.getCars();
    cars.sort((a,b) => a.license.localeCompare(b.license));
    return cars;
  }

  getDrones(){
    let drones = [];
    for(let i of this.velhicles){
      if(i instanceof Drone){
        drones.push(i);
      }
    }
    return drones;
  }

  filterCarsByMake(filter){
    let cars = [];
    for(let i of this.getCars()){
      if (i.make == filter){
        cars.push(i);
      }
    }
    return cars;
  }
}

fdescribe("Test Service", () => {
  "use strict";

  let service;
  beforeEach(() => {
    service = new FleetDataService();
    service.loadData(data);}
  );

  it('load data', () => {
    assert.equal(service.velhicles.length, 7);
  });

  it('get cars', () => {
    assert.equal(service.getCars().length, 4);
  });

  it('get car by license', () => {
    let car = service.getCarByLicense('AT9900');
    assert.equal(car.miles, '15600');
  });

  it('get car sorted by license', () => {
    let licenseArray = [];
    let licenseArrayFromSortByLicense = [];

    for(let i of service.getCars()){
      licenseArray.push(i.license);
    }
    licenseArray.sort();

    let carsSortByLicense = service.getCarsSortedByLicense();
    for (let i of carsSortByLicense){
      licenseArrayFromSortByLicense.push(i.license);
    }

    assert.deepEqual(licenseArray, licenseArrayFromSortByLicense);
  });

  it('filter cars by Make', () => {
    let cars = service.filterCarsByMake('Grab');
    assert.equal(cars.length, 2);
  });

  it('get drones', () => {
    assert.equal(service.getDrones().length, 3);
  });

});
