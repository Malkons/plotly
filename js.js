
var verticalArr = [];
var horizontalArr = [];
var colorArr = [];

$(".plot").hide("fast");

function verticalAxis(value) {
  verticalArr = [];
  verticalArr.push(value);
  console.log("vertical Axis: " + verticalArr);
  $("#vertical").html("Dependent Variable set to: " + "<strong>" + verticalArr + "</strong>");
};

function horizontalAxis(value) {
  horizontalArr = [];
  horizontalArr.push(value);
  console.log("horizontal Axis: " + horizontalArr);
  $("#horizontal").html("Independent Variable set to: " + "<strong>" + horizontalArr + "</strong>");
};

function colorAxis(value) {
  colorArr = [];
  colorArr.push(value);
  console.log("Color Axis: " + colorArr);
  $("#color").html("Color Variable set to: " + "<strong>" + colorArr + "</strong>");
};

function makeplot() {


  Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/auto-mpg.csv", function (data) { processData(data) });
};

function processData(allRows) {
  var vertical = verticalArr[0];
  var horizontal = horizontalArr[0];
  var color = colorArr[0];
  console.log(allRows);
  var x = [], y = [], colorPlot = [];

  for (var i = 0; i < allRows.length; i++) {
    row = allRows[i];
    x.push(row[horizontal]);
    y.push(row[vertical]);
    colorPlot.push(row[color]);
  }
  console.log('X', x, 'Y', y, 'color plot', colorPlot);
  makePlotly(x, y, colorPlot);
}

function makePlotly(x, y, colorPlot) {
  var vertical = verticalArr[0];
  var horizontal = horizontalArr[0];
  var color = colorArr[0];
  var plotDiv = document.getElementById("plot");

  var traces = [{
    y: y,
    x: x,
    mode: "markers",
    type: "scatter",
    marker: {
      color: colorPlot,
      showscale: true,
      colorbar: {
        title: color,
      },
    },

  }];



  Plotly.newPlot('myDiv', traces,
    {
      title: horizontal + " vs " + vertical + " vs " + color,
      xaxis: { title: horizontal },
      yaxis: { title: vertical }
    });
  $(".plot").show("fast");
};

//makeplot();
