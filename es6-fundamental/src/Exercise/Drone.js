/**
 * Created by nkim on 6/20/2017.
 */
import {Velhicle} from './Velhicle';
import {assert} from 'chai';

class Drone extends Velhicle{
  constructor(license, model, latlong, airTimeHours, base){
    super(license, model, latlong);
    this.airTimeHours = airTimeHours;
    this.base = base;
  }
}
