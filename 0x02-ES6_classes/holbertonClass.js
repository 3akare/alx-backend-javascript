export default class HolbertonClass {
    constructor(year, location) {
      this._year = year;
      this._location = location;
    }
  
    get year() {
      return this._year;
    }
  
    get location() {
      return this._location;
    }
  }
  