const firebaseConfig = {
    apiKey: "AIzaSyBg1pT15qGTnZ8RdqjZLDbQsoPxhfZKmUU",
    authDomain: "kwitter-project-53cfc.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "kwitter-project-53cfc",
    storageBucket: "kwitter-project-53cfc.appspot.com",
    messagingSenderId: "594981871785",
    appId: "1:594981871785:web:f65118dd27de0f23df49b8"
  };
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

//End code
   });});}
getData();
function send()
{ 
    
 firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
 });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}