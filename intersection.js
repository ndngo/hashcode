// An intersection can have many streets starting from it and many streets ending at it
class Intersection {
    // id is a single integer
    // startStreets is an array of strings
    // endStreets is an array of strings
    constructor(id, startStreets, endStreets) {
        this.id = id
        this.startStreets = startStreets
        this.endStreets = endStreets
    }

    // add intersections together
    addIntersections(a, b) {
        
        if (a.id == b.id) {
            let start = [];
            let end = [];
            
            this.startStreets = a.startStreets + "," + b.startStreets;
            this.endStreets = a.endStreets + "," + b.endStreets;

            let c = new Intersection();
            
            return c;
        }

    }

    addStartStreet(startStreets) {
        this.startStreets = startStreets;
    }

    addEndStreet(endStreets) {
        this.endStreets = endStreets;
    }

  }
  
  module.exports.Intersection = Intersection
  