
const firebaseConfig = {
  apiKey: "AIzaSyBAResqwpCbj94IkuHuGqqdhan3pwyIlJA",
  authDomain: "guyschat-3e9c4.firebaseapp.com",
  databaseURL: "https://guyschat-3e9c4-default-rtdb.firebaseio.com",
  projectId: "guyschat-3e9c4",
  storageBucket: "guyschat-3e9c4.appspot.com",
  messagingSenderId: "917145533593",
  appId: "1:917145533593:web:57d2ed134d39d5fac38c08"
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
