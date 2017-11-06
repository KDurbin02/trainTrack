//create math function to update next arrival time
//add firebase

var freq = 0
var firstT = "00:00";
var nextTrain;
var tMinutesTillTrain;

// trainTime = {
//  freq: 0,
//  firstT: "00:00",
//  firstTimeConverted: moment(firstT, "hh:mm").subtract(1, "years"),
//  currentTime: moment(),
//  diffTime: moment().diff(moment(firstTimeConverted), "minutes"),
//  tRemainder: diffTime % freq,
//  tMinutesTillTrain: freq - tRemainder,
// //console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
//  nextTrain: moment().add(tMinutesTillTrain, "minutes"),
// //console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
// }

// function hogwarts () {
//   trainTime.freq = 65;
//   trainTime.firstT = "12:01";
//   trainTime();
//   $('#table tr').eq(0).find('.next').text(trainTime.nextTrain);
//   $('#table tr').eq(0).find('.away').text(trainTime.tMinutesTillTrain);
//   console.log("hi");
// }
// hogwarts();

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9dmHdLs9CAuixad2srjDcJjTD7dFek2o",
    authDomain: "trainstation-9d3e5.firebaseapp.com",
    databaseURL: "https://trainstation-9d3e5.firebaseio.com",
    projectId: "trainstation-9d3e5",
    storageBucket: "trainstation-9d3e5.appspot.com",
    messagingSenderId: "993239770256"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var place = "";
  var frequency = "";

  $("#submit").on("click", function(){
    event.preventDefault();
    name = $("#trainName").val().trim();
    place = $("#destination").val().trim();
    frequency = $("#frequency").val().trim();

    database.ref().set({
      train: name,
      destination: place,
      frequency: frequency
      
    });
  });

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var newTrain = $("#trainName").val();
    var newDestination = $("#destination").val();
    var newFirst = $("#firstTrain").val();
    var newFrequency = $("#frequency").val();
    $("#trainTable > tbody:last-child").append(
      '<tr>'
      +'<th>' +newTrain+ '</th>' 
      +'<td>' +newDestination+ '</td>' 
      +'<td>' +newFrequency+ '</td>' 
      +'<td>' +''+ '</td>' 
      +'<td>' +''+ '</td'
      +'</tr>'
    );
    $("#form")[0].reset();//reset form after each use
  });//add new train to table


