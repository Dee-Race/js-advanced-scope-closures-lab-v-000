



function produceTipCalculator(tipCalc) {
  return function(marketMultiplier) {
    return marketMultiplier * tipCalc
  }
}


function createDriver(){
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
