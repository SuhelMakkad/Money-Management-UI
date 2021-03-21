let sliderPercentage = document.getElementById("myRangePercentage");
let outputPercentage = document.getElementById("slider-percentage");
outputPercentage.innerHTML = sliderPercentage.value;

outputPercentage.innerHTML = "12";
sliderPercentage.oninput = function () {
  outputPercentage.innerHTML = this.value / 4;
};

let sliderNumber = document.getElementById("myRangeNumber");
let outputNumber = document.getElementById("slider-number");
outputNumber.innerHTML = sliderNumber.value;

outputNumber.innerHTML = "65";
sliderNumber.oninput = function () {
  outputNumber.innerHTML = this.value;
};
