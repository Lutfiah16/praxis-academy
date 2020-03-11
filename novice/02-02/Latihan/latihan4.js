const MyPoly = class Poly {
  getPolyName() {
    ChromeSample.log('Hi. I was created with a Class expression. My name is ' +
      Poly.name);
  }
};

let inst = new MyPoly();
inst.getPolyName();