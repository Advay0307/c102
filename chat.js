var firebaseConfig = {
    apiKey: "AIzaSyAyciNL9iBx139kyKCV42j3sf2cfgQdF2E",
    authDomain: "lets-chat-web-app2-f2b4b.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app2-f2b4b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app2-f2b4b",
    storageBucket: "lets-chat-web-app2-f2b4b.appspot.com",
    messagingSenderId: "691649625932",
    appId: "1:691649625932:web:cde22902e1fe662a8f19e9"
  }

  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



