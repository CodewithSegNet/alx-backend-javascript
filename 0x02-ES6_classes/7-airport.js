export default class Airport {
  constructor(name, code) {
    // set _parameter properties to the specific Airport class
    this._name = name;
    this._code = code;
  }

  // define a getter for constructor parameter
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // return the default string of code
  toString() {
    return this._code;
  }
}
