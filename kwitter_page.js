//YOUR FIREBASE LINKS
//Your web app's Firebase configuration
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
  
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


function Send()
{
 msg = document.getElementById("msg").value;
 console.log(msg)
 console.log(user_name)
 firebase.database().ref(room_name).push({
       message:msg,
       username:user_name,
       like:0
 });
}