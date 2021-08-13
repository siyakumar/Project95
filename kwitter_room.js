
var firebaseConfig = {
      apiKey: "AIzaSyBtil2tPzs4rjlJWX4JodTjE7KjZZw8IiM",
      authDomain: "let-s-chat-7e52c.firebaseapp.com",
      projectId: "let-s-chat-7e52c",
      storageBucket: "let-s-chat-7e52c.appspot.com",
      messagingSenderId: "997395377461",
      appId: "1:997395377461:web:7c164556f4ac3b8e66307c"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
     window.location="index.html";
}