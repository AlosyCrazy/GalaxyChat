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

let userName = localStorage.getItem("userName"); 
let roomName = localStorage.getItem("roomName");

function send(){
      let msg =  document.getElementById("msg").value;
      firebase.database().ref(roomName).push({
            name: userName,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código

//Fim do código
      } });  }); }
getData();
