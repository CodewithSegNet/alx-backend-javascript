export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('parameter must be a String');
    }
    if (typeof code !== 'string') {
      throw new TypeError('parameter must be a String');
    }
    //set _parameter properties to the specific Airport class
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
