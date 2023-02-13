const firebaseConfig = { 
      apiKey : "AIzaSyDczqXe5pdsET30rCzwPTN5nR_HNkhK-hM" , 
      authDomain : "project-letschat.firebaseapp.com" , 
      databaseURL : "https://project-letschat-default-rtdb.firebaseio.com" , 
      projectId : "project-letschat" , 
      storageBucket : "project-letschat.appspot.com" , 
      messagingSenderId : "731103031904" , 
      appId : "1:731103031904:web:082cf3321a9ceb04ef8905" , 
      measurementId : "G-K087K0XX92" 
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
      get_username=localStorage.getItem("username");
      document.getElementById("user_name").innerHTML="Hi "+get_username;

      function add_chat(){
            chat_name=document.getElementById("chat_name").value;
            firebase.database().ref("/").child("chat_name").update({
                  goal: "get chat name"
            });

            localStorage.setItem("chat_name", chat_name);

            window.location=kwitter_room.html;
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Chat_names = childKey;
      //Start code
      console.log("Chat_names - "+Chat_names);
      row="<div class='chat_name' id="+Chat_names+"onclick='redirectToChatName(this.id)'>"+Chat_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToChatName(name){
      console.log(name);
      localStorage.setItem("chat_name", name)
      window.location=kwitter_room.html;
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("chat_name");
      window.location.replace("index.html");
}