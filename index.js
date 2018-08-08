
function produceDrivingRange(rangeDist) {
  return function()
}


function produceTipCalculator(percent) {
  return function(amount) {
    return amount * percent
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
