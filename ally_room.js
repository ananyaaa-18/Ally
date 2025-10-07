function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChgtbqRDldmIRC5s0YO8DqscQG5yO2Gq0",
  authDomain: "ally1-9883b.firebaseapp.com",
  databaseURL: "https://ally1-9883b-default-rtdb.firebaseio.com",
  projectId: "ally1-9883b",
  storageBucket: "ally1-9883b.firebasestorage.app",
  messagingSenderId: "182587643841",
  appId: "1:182587643841:web:e2ce82ecc80e550c2d8140",
  measurementId: "G-141GPVY0W9"
};

firebase.initializeApp(firebaseConfig);

let user_name = localStorage.getItem("user_name");
let room_name = localStorage.getItem("room_name");

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });


    redirectToChatName(room_name);
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       room_names = childKey;
       console.log("Room Name - " + room_names);
       row = "<div class='room_name' id="+room_names+" onclick='redirectToChatName(this.id)' >#"+ room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToChatName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "ally_chat.html";
}


