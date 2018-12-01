// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}




// $(document).ready(function() {
//
//   $("a.btn").click(function(event) {
//     event.preventDefault();
//     $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
//     $('h1').text('Whatup!');
//   });
//
//   $('.jumbotron').hide().delay(1000).fadeIn(1400);
//
//   // jQuery UI Widgets
//
//   $( "#tabs" ).tabs();
//   $( "#accordion" ).accordion();
//
// });






// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: {lat: 18.507024, lng: 73.849575}
//   });
//
//   var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
//   var beachMarker = new google.maps.Marker({
//     position: {lat: 18.507024, lng: 73.849575},
//     map: map,
//     icon: image
//   });
// }





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


// Display the chart
if(window.location.pathname == "/Users/bilwa/Desktop/Eventus/project/charts.html"){
  var chart = new google.visualization.PieChart(document.getElementById('pieChart'));
  chart.draw(data, options);
}

} // Don’t forget to close your function
