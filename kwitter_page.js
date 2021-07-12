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

function getData() 
{ 
  console.log("getData  : getting data from DB")
  firebase.database().ref("/"+room_name).on('value', function(snapshot) 
  { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) 
    { 
      childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") 
      {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
            console.log(firebase_message_id);
            console.log(message_data);
            if('-' == firebase_message_id.charAt(0))
            {
              firebase_message_id = firebase_message_id.slice(1);
            }
            console.log(firebase_message_id)

            usrname = message_data['username'];
            message = message_data['message'];
            like = message_data['like'];
            name_with_tag = "<h4>" + usrname + "<img class = 'user_tick' src = 'tick.png'></h4>";
            message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>"; 
            like_button = "<button class = 'btn btn-warning' id ='"+firebase_message_id+"' value = '" + like + "' onclick = updateLike(" +firebase_message_id+")>";
            span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

            row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
            //End code
             
      } 
    });  
  }); 
  console.log("getData : Finished reading and rendering the data from DB");
}
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
 firebase.database().ref("/"+room_name).push({
       message:msg,
       username:user_name,
       like:0
 });
 console.log("Send button: Updated db")
}

function updateLike (message_id)
{
  button_id = message_id;
  button_id = button_id.id;
  console.log("clicked on like button : " + button_id);
  
  var btn = document.getElementById(button_id);
  likes = btn.value;
  updated_likes = Number (likes) + 1;
  btn.value = updated_likes;
  console.log(updated_likes);

  button_id = "-" + button_id
  firebase.database().ref("/"+room_name).child(button_id).update({
    like : updated_likes
  }); 
  console.log("Like button: Updated db")
}