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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Romm Name - " + Room_names);
        row  = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName (this.id)' >#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;
 
 firebase.database().ref("/").child(room_name) .update({
     purpose : "adding room"
 })

 localStorage.setItem("room_name" , room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html"
}

names = localStorage.getItem("user_name");
document.getElementById("input").innerHTML = names;
console.log(names)

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}