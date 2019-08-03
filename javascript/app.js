// =========== Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXG3hYPc7UTCljKm7Sv9ZgjyXyajRorOI",
    authDomain: "demo072919.firebaseapp.com",
    databaseURL: "https://demo072919.firebaseio.com",
    projectId: "demo072919",
    storageBucket: "demo072919.appspot.com",
    messagingSenderId: "311786717415",
    appId: "1:311786717415:web:3519b12ad091bebe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// create a variable to reference the database
var database = firebase.database();


$('#submit').on('click', function(e){
    e.preventDefault();

    // ========= Store inputs in variable
        var name = $('#train-name').val().trim();
        var destination = $('#destination').val().trim();
        var startTime = $('#start-time').val().trim();
        var frequency = $('#frequency').val().trim();
        var nextArrival = "ADD THIS FUNCTIONALITY";
        var minutesAway = "ADD THIS FUNCTIONALITY";

        console.log('Train: ' + name);
        console.log('Destination: ' + destination);
        console.log('Start Time: ' + startTime);
        console.log('Frequency: ' + frequency);
        console.log('Next Arrival: ' + nextArrival);
        console.log('Minutes Away: ' + minutesAway);

    // ========== Dynamically add rows to the table with user input
    
    // create a new table row element
    var newRow = $('<tr>');

    // create variables to store td info
    var nameTd = $('<td>').text(name);
    var destinationTd = $('<td>').text(destination);
    var startTd = $('<td>').text(startTime);
    var nextArrivalTd = $('<td>').text(nextArrival);
    var frequencyTd = $('<td>').text(frequency);
    var totalTd = $('<td>').text(minutesAway);

    // append table information to newRow
    newRow.append(nameTd, destinationTd, startTd, nextArrivalTd, frequencyTd, totalTd);

    // append the newrow to the table body
    $('tbody').append(newRow)


    // code for handling the push to the database
    database.ref().push( {
        name: name,
        destination: destination,
        startTime: startTime,
        frequency: frequency
    });

    // clear form
    $("#myForm").trigger("reset")

});


    // Firebase watcher .on('child-added)
    database.ref().on('child_added', function(snapshot) {
        // create a new variable for snapshot for convenience
        var sv = snapshot.val();
        console.log("snapshot: " + sv);

        // Handle the errors
    }, function(errorOjbect) {
        console.log("Errors handled: " + errorOjbect.code)
    });
