class Street {
    // startIntersection is an integer
    // endIntersection is an integer
    // name is a string
    // Length is an integer
  constructor(startIntersection, endIntersection, name, length) {
      this.startIntersection = startIntersection;
      this.endIntersection = endIntersection;
      this.name = name;
      this.length = length;
  }
}

module.exports.Street = Street
