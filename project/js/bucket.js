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




$(document).ready(function() {

  $("a.btn").click(function(event) {
    event.preventDefault();
    $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
    $('h1').text('Whatup!');
  });

  $('.jumbotron').hide().delay(1000).fadeIn(1400);

  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});






function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 18.507024, lng: 73.849575}
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 18.507024, lng: 73.849575},
    map: map,
    icon: image
  });
}





// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = new
google.visualization.DataTable();
  data.addColumn('string', 'Skill');
  data.addColumn('number', 'Points');
  data.addRows([
    ['HTML', 922],
    ['CSS', 2679],
    ['JavaScript', 12899],
    ['PHP', 1450],
    ['Development Tools', 1459],
    ['Java', 275],
    ['Digital Literacy', 40],
    ['Databases', 1786],
    ['Security', 540],
    ['Quality Assurance', 207]
]);


// Set chart options
var options = {
  'title':'Tony\'s Earned Treehouse Study Units',
  'width':550,
  'height':400
};


// Display the chart
var chart = new
google.visualization.PieChart(document.getElementById('pieChart'));
chart.draw(data, options);
} // Don’t forget to close your function
