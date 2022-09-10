var firebaseConfig = {
    apiKey: "AIzaSyAyciNL9iBx139kyKCV42j3sf2cfgQdF2E",
    authDomain: "lets-chat-web-app2-f2b4b.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app2-f2b4b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app2-f2b4b",
    storageBucket: "lets-chat-web-app2-f2b4b.appspot.com",
    messagingSenderId: "691649625932",
    appId: "1:691649625932:web:cde22902e1fe662a8f19e9"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML =
"Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);
            window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}
