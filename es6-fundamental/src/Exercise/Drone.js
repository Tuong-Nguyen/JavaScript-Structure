/**
 * Created by nkim on 6/20/2017.
 */
import {Vehicle} from './Vehicle';
import {assert} from 'chai';

export class Drone extends Vehicle{
  constructor(license, model, latlong, airTimeHours, base){
    super(license, model, latlong);
    this.airTimeHours = airTimeHours;
    this.base = base;
  }
}
