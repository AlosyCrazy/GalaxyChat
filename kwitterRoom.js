
const firebaseConfig = {
  apiKey: "AIzaSyBViv1JV-6GhK35mZX7TOuC7bE3Xn0Hc5w",
  authDomain: "galaxy-chat-dbaf1.firebaseapp.com",
  databaseURL: "https://galaxy-chat-dbaf1-default-rtdb.firebaseio.com",
  projectId: "galaxy-chat-dbaf1",
  storageBucket: "galaxy-chat-dbaf1.appspot.com",
  messagingSenderId: "939426326912",
  appId: "1:939426326912:web:213b93d2cb2373495e3965"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
