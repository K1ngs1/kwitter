// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAN-x18Zv7AIJkn2bAE0vFjMhCbEMWPaRI",
      authDomain: "welcome-heiy.firebaseapp.com",
      databaseURL: "https://welcome-heiy-default-rtdb.firebaseio.com",
      projectId: "welcome-heiy",
      storageBucket: "welcome-heiy.appspot.com",
      messagingSenderId: "935724807816",
      appId: "1:935724807816:web:9b33bf63ec7c8e090b913d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
