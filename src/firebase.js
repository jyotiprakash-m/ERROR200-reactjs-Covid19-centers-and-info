import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCTkxS4MqCD64thDRqxLmHM4fhYGiP4aUM",
    authDomain: "covidcenterdb.firebaseapp.com",
    databaseURL: "https://covidcenterdb.firebaseio.com",
    projectId: "covidcenterdb",
    storageBucket: "covidcenterdb.appspot.com",
    messagingSenderId: "988625600841",
    appId: "1:988625600841:web:7739f1b25ba5af25029a98"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();