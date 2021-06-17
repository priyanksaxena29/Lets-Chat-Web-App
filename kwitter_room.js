// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvc-CsFTgbsof4qWKwTKdbfp-rzIteGDg",
    authDomain: "let-chat-a2828.firebaseapp.com",
    databaseURL: "https://let-chat-a2828-default-rtdb.firebaseio.com",
    projectId: "let-chat-a2828",
    storageBucket: "let-chat-a2828.appspot.com",
    messagingSenderId: "359566501229",
    appId: "1:359566501229:web:f51fcad67d480961fb2664"
  };
  // Initialize Firebase  
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name) .update({
     purpose : "adding room"
 })
}
