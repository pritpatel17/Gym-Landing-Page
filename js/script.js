var countDownDate = new Date("Jun 8, 2023 15:37:25").getTime();
 
var x = setInterval(function() {
 
  var now = new Date().getTime();
  var distance = countDownDate - now;
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  // Define the list of events
  $scope.events = [
    {
      date: '2023-05-01',
      name: 'Areobic'
    },
    {
      date: '2023-05-10',
      name: 'Yoga Session'
    },
    {
      date: '2023-05-15',
      name: 'Cardio'
    }
  ];
  
  // RSVP function
  $scope.rsvp = function(event) {
    alert('You have RSVPed for ' + event.name + ' on ' + event.date + '!');
  };
});
