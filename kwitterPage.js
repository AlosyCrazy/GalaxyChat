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

function getData() { 
      firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
            nameData = messageData["name"];
            message = messageData["message"];
            like = messageData["like"];
            nameWithTag = "<h4>"+nameData+"<img src='tick.png' class='user_tick'></h4>";
            messageWithTag = "<h4 class='message_h4'>"+message+"</h4>";
            likeButton = "<button class='btn' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'";
            spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
            row = nameWithTag+messageWithTag+likeButton+spanWithTag;
            document.getElementById("output").innerHTML+=row; 
      } });  }); }
getData();

function updateLike(messageID){
      buttonID = messageID;
      likes = document.getElementById(buttonID).value;
      updatedLikes = Number(likes)+1;
      firebase.database().ref(roomName).child(messageID).update({
            like: updatedLikes
      });
}
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
          window.location = "index.html";
      }
