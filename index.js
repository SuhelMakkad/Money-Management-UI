//navigation bar
let navList = document.querySelectorAll(".nav-items");
navList.forEach((item) => {
  item.addEventListener("click", () => {
    navList.forEach((itm) => {
      itm.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// bar graph
let bigBarChartContext = document
  .getElementById("bar-chart-big")
  .getContext("2d");

let options = {
  tooltips: { enabled: false },
  scales: {
    xAxes: [
      {
        barPercentage: 0.5,
        gridLines: {
          display: false,
        },
        stacked: true,
      },
    ],
    yAxes: [
      {
        gridLines: {
          // You can change the color, the dash effect, the main axe color, etc.
          borderDash: [1, 5],
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 0 || value === 100 || value === 200 || value === 300)
              return "$" + value;
          },
          beginAtZero: true,
        },
        stacked: true,
      },
    ],
  },
  legend: {
    display: false,
  },
};
let barChartBig = new Chart(bigBarChartContext, {
  type: "bar",
  data: {
    labels: ["20", " ", "25", " ", "30", " ", "40 ", " ", "60", " ", "65"],
    datasets: [
      {
        label: "Employer: K 73,500",
        data: [20, 30, 35, 40, 50, 55, 65, 75, 80, 90, 100],
        backgroundColor: [
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
        ],
      },
      {
        label: "Employee: K 52,500",
        data: [20, 30, 35, 40, 50, 55, 65, 75, 80, 90, 100],
        backgroundColor: [
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
        ],
      },
      {
        label: "Total Interst K 244,313",
        data: [30, 35, 45, 50, 55, 65, 75, 80, 90, 100, 120],
        backgroundColor: [
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
        ],
      },
    ],
  },
  options: options,
});

let samllBarChartContext = document
  .getElementById("bar-chart-small")
  .getContext("2d");
let smallChartBig = new Chart(samllBarChartContext, {
  type: "bar",
  data: {
    labels: ["20", "25", "30", "40 ", "60", "65"],
    datasets: [
      {
        label: "Employer: K 73,500",
        data: [20, 35, 50, 65, 80, 100],
        backgroundColor: [
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
          "#0800A3",
        ],
      },
      {
        label: "Employee: K 52,500",
        data: [20, 35, 50, 65, 80, 100],
        backgroundColor: [
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
          "#4935FF",
        ],
      },
      {
        label: "Total Interst K 244,313",
        data: [30, 45, 55, 75, 90, 120],
        backgroundColor: [
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
          "#85AFFF",
        ],
      },
    ],
  },
  options: options,
});

//slliders

let sliderPercentage = document.getElementById("myRangePercentage");
let outputPercentage = document.getElementById("slider-percentage");
outputPercentage.innerHTML = sliderPercentage.value;

outputPercentage.innerHTML = "12%";
sliderPercentage.oninput = function () {
  outputPercentage.innerHTML = this.value / 4 + "%";
};

let sliderNumber = document.getElementById("myRangeNumber");
let outputNumber = document.getElementById("slider-number");
outputNumber.innerHTML = sliderNumber.value;

outputNumber.innerHTML = "65";
sliderNumber.oninput = function () {
  outputNumber.innerHTML = this.value;
};

//notification
