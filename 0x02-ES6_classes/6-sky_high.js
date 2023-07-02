import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
 // call constructor of super class (building) using super()
    super(sqft);
 // set the _floors property specific to the SkyHighBuilding class
    this._floors = floors;
  }

 // define a getter for floors property
  get floors() {
    return this._floors;
  }
 
  // define a setter for floor property
  set floors(value) {
  // Check the type of the provided value
    if (typeof value !== 'number') {
  // Throw a TypeError if the value is not a number
      throw new TypeError('floors must be a Number');
    }
  // Set the _floors property to the provided value
    return this._floors;
  }

  // Implement the evacuationWarningMessage method required by the Building superclass
  evacuationWarningMessage() {
  // Return a message specific to the SkyHighBuilding class
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
