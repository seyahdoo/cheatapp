import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    var Firebase = require("firebase");
    fireapp = Firebase.initializeApp({
        apiKey: "AIzaSyA6ZTHIXpGA9rsblb5FFJ4EnVrxCwno_60",
        authDomain: "project-6738432073580211766.firebaseapp.com",
        databaseURL: "https://project-6738432073580211766.firebaseio.com",
        storageBucket: "project-6738432073580211766.appspot.com"
    });
    
    
    //TODO consider doing this way.
    //if authenticated redirect to channels
    //else redirect to loginPage

    

});