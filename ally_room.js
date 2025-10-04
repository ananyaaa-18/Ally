function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("firstpage.html");
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

    localStorage.setItem("room_name", room_name);
    
    window.location = "ally_chat.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "ally_room.html";
}


