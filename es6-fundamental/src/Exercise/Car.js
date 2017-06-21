/**
 * Created by nkim on 6/20/2017.
 */
import {Vehicle} from './Vehicle';
import {assert} from 'chai';

export class Car extends Vehicle {
  constructor(license, model, latlong, make, miles){
    super(license, model, latlong);
    this.make = make;
    this.miles = miles;
}

  toString(){
    return this.license + this.model + this.miles;
  }
}

describe('Test', () => {
  "use strict";
  it('Test1', () => {
    let a = new Car('aaa', 'bbb', '20', 'suzuki', 1000);
    assert(a.toString(), "aaabbb1000");
  });

})
