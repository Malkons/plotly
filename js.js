
var verticalArr = [];

var horizontalArr = [];

function verticalAxis(value) {
  verticalArr = [];
  verticalArr.push(value);
  console.log("vertical Axis: " + verticalArr);
  $("#vertical").text("Vertical Axis set to: " + verticalArr);
};

function horizontalAxis(value) {
  horizontalArr = [];
  horizontalArr.push(value);
  console.log("horizontal Axis: " + horizontalArr);
  $("#horizontal").text("Horizontal Axis set to: " + horizontalArr);
};

function makeplot() {
  Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv", function (data) { processData(data) });
};

function processData(allRows) {
  var vertical = verticalArr[0];
  var horizontal = horizontalArr[0];
  console.log(allRows);
  var x = [], y = [], standard_deviation = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    x.push(row[horizontal]);
    y.push(row[vertical]);
  }
  console.log('X', x, 'Y', y, 'SD', standard_deviation);
  makePlotly(x, y, standard_deviation);
}

function makePlotly(x, y, standard_deviation) {
  var vertical = verticalArr[0];
  var horizontal = horizontalArr[0];
  var plotDiv = document.getElementById("plot");
  var traces = [{
    y: y,
    x: x,
    mode: "markers",
    type: "scatter"

  }];

  Plotly.newPlot('myDiv', traces,
    {
      title: vertical + " vs " + horizontal,
      xaxis: { title: horizontal },
      yaxis: { title: vertical }
    });

};

//makeplot();
