// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Skill');
  data.addColumn('number', 'Points');
  data.addRows([
    ['Food', 200],
    ['Lights', 500],
    ['Furniture', 500],
    ['Transport', 1450],
    ['Tools', 500],

]);


// Set chart options
var options = {
  'title':'Funds',
  'width':1000,
  'height':500
};


var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
chart.draw(data, options);
} // Don’t forget to close your function
