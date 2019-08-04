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

    // checking the work aye! or nay, it will be revealed in the console
        console.log('Train: ' + name);
        console.log('Destination: ' + destination);
        console.log('Start Time: ' + startTime);
        console.log('Frequency: ' + frequency);
        console.log('Next Arrival: ' + nextArrival);
        console.log('Minutes Away: ' + minutesAway);

    // ========== Dynamically add rows to the table with user input
    
    // create a new table row element
    // declaring new variable and using jquery to create a table row while assigning  the variable its value 
    var newRow = $('<tr>');

    // create variables to store td info
    // declaring new variables to hold the values of the new table data elements being created using jquery
    // .text() method is used to get the the combined text contents of each element in the set of matched its matched counterpart
    // nameTd gets name, destinationTd gets destination, so on and so forth
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
    // the .append() is used to add the content specified in its content as the last child to the element being selected
    // new row a variable declared in line 70 with the value of the new row to be creaed is going to have the values of the variables declared from lines 76 to 81 added to it
    newRow.append(nameTd, destinationTd, startTd, nextArrivalTd, frequencyTd, totalTd);

    // append the newrow to the table body
    // the .append() is used to add the content specified in its content as the last child to the element being selected
    // the contents of newRow are being added to table body
    $('tbody').append(newRow);


    // code for handling the push to the database
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // in this case the method push is used to add the child to the firebase data as opposed to replacing it whe .set()is used
    // the child being added has its values in key pairs, not all of the being appended on the pages is being passed to the database
    database.ref().push( {
        name: name,
        destination: destination,
        startTime: startTime,
        frequency: frequency
    });

    // clear form
    // the trigger() method is being used to clear the div selected (the fillable form in this case); user inputs the information and on click trigger() clears the form and is ready for the next input  
    $('#my-form').trigger('reset');

});


    // Firebase watcher .on('child-added)
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // The child_added event is typically used when retrieving a list of items from the database. Unlike value which returns the entire contents of the location, child_added is triggered once for each existing child and then again every time a new child is added to the specified path (firebase-real time database - docs - guides)
    // on child added, the function snapshot will be be run
    database.ref().on('child_added', function(snapshot) {
        
        // create a new variable for snapshot for convenience
        // A snapshot is a picture of the data at a particular database reference at a single point in time
        var sv = snapshot.val();
        console.log("snapshot: " + sv);

        // Handle the errors
    }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
    });
