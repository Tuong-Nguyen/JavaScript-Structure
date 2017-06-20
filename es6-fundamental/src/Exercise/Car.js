/**
 * Created by nkim on 6/20/2017.
 */
import {Velhicle} from './Velhicle';
import {assert} from 'chai';

class Car extends Velhicle {
  constructor(license, model, latlong, make, miles){
    super(license, model, latlong);
    this.make = make;
    this.miles = miles;
}

  toString(){
    return this.license + this.model + this.miles;
  }
}

fdescribe('Test', () => {
  "use strict";
  it('Test1', () => {
    let a = new Car('aaa', 'bbb', '20', 'suzuki', 1000);
    assert(a.toString(), "aaabbb1000");
  });

})
