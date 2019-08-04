// literal expression that helps write cleaner code
// prevents us to write loosey goosey code
'use strict';

// =========== Your web app's Firebase configuration

// as it says, this variable is being assigned the configuration in key pair values 
var firebaseConfig = {
    
    // unique code passed into an api to identify the calling application or user
    apiKey: "AIzaSyDXG3hYPc7UTCljKm7Sv9ZgjyXyajRorOI",
    
    // Your SAS administrator creates an authentication domain definitions while creating a user definition with the User Manager in SAS Management Console.
    // sas stands for Statistical Analysis System
    // the authentication domain is associated with one or more login metadata (info about info) objects, which provide acces to the server
    authDomain: "demo072919.firebaseapp.com",

    // url address of database being used to store the inputs
    databaseURL: "https://demo072919.firebaseio.com",
    
    // name associated with the db in firebase site
    projectId: "demo072919",
    
    // resource representing a bucket in google cloud storage
    storageBucket: "demo072919.appspot.com",
    
    // a unique numerical value created when you create your Firebase project
    messagingSenderId: "311786717415",
    
    // unique id number assigned to the app when created
    appId: "1:311786717415:web:3519b12ad091bebe"
};
// Initialize Firebase
// Creates and initializes a Firebase app instance. firebase-docs-reference
firebase.initializeApp(firebaseConfig);


// create a variable to reference the database
var database = firebase.database();

// function e to be executed when submit button is clicked
$('#submit').on('click', function(e){
    
    // prevent default method cancels the event if it is cancelable (the click in this case)
    // this method is preventing all the data from going away on click
    e.preventDefault();

    // ========= Store inputs in variable
    // each variable defined is being set with the value of its corresponding input field using the .val() method
    // .trim() method is being used to remove white spaces at both sides of the string w/o changing the user input
        var name = $('#train-name').val().trim();
        var destination = $('#destination').val().trim();
        var startTime = $('#start-time').val().trim();
        var frequency = $('#frequency').val().trim();
        var nextArrival = "ADD THIS FUNCTIONALITY";
        var minutesAway = "ADD THIS FUNCTIONALITY";

    // checking what we have so far via the console
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

    console.log('Train Td: ' + nameTd);
    console.log('Destination Td : ' + destinationTd);
    console.log('Start Time Td : ' + startTd);
    console.log('Frequency Td : ' + frequencyTd);
    console.log('Next Arrival Td : ' + nextArrivalTd);
    console.log('Minutes Away Td : ' + totalTd);

    // append table information to newRow
    newRow.append(nameTd, destinationTd, startTd, nextArrivalTd, frequencyTd, totalTd);

    // append the newrow to the table body
    $('tbody').append(newRow);


    // code for handling the push to the database
    database.ref().push( {
        name: name,
        destination: destination,
        startTime: startTime,
        frequency: frequency
    });

    // clear form
    $('#my-form').trigger('reset');

});


    // Firebase watcher .on('child-added)
    database.ref().on('child_added', function(snapshot) {
        // create a new variable for snapshot for convenience
        var sv = snapshot.val();
        console.log("snapshot: " + sv);

        // Handle the errors
    }, function(errorOjbect) {
            console.log("Errors handled: " + errorOjbect.code);
    });
