//create math function to update next arrival time
//add to local storage



class train {
  constructor(name, destination, freq, firstTT) {
   this.name = name;
   this.destination = destination;
   this.freq = freq;
   this.firstTT = firstTT;
   this.firstTimeConverted = moment(this.firstTT, "H:mm").subtract(1, "years");
  console.log(this.firstTimeConverted.format("hh:mm a"));}
  }   

function nextArrival(firstTimeConverted, freq) {
 diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 tRemainder = diffTime % freq;
 console.log(diffTime + "   " +tRemainder + "   " + freq);
 tMinutesTillTrain = freq - tRemainder;
 nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm");
 
return [tMinutesTillTrain, nextTrain];
}
var hogwarts = new train("Hogwarts Express", "Hogwarts", 65, 145);

function add () {
  var trainData = nextArrival(hogwarts.firstTimeConverted);
  $("#nextH").append(trainData[0]);
  console.log(trainData[0]);

}
add();
   
 
//console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
//console.log("ARRIVAL TIME: " + moment(nextTrain));

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
  var first = "";

  $("#submit").on("click", function(){
    event.preventDefault();
    name = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    freq = $("#frequency").val().trim();
    firstTT = $("#firstTrain").val().trim();
    var newTrain = new train(name, destination, freq, firstTT);
    var trainData = nextArrival(newTrain.firstTimeConverted, freq);

    database.ref().set({
      train: name,
      destination: destination,
      frequency: freq,
      firstTrain: firstTT
    });
    $("#trainTable > tbody:last-child").append(
      '<tr>'
      +'<th>' +name+ '</th>' 
      +'<td>' +destination+ '</td>' 
      +'<td>' +freq+ '</td>' 
      +'<td>' +trainData[1]+ '</td>' 
      +'<td>' +trainData[0]+ '</td'
      +'</tr>'
    );
    $("#form")[0].reset();//reset form after each use

  });//add new train to firebase


