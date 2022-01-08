const firebaseConfig = {
    apiKey: "AIzaSyBg1pT15qGTnZ8RdqjZLDbQsoPxhfZKmUU",
    authDomain: "kwitter-project-53cfc.firebaseapp.com",
    databaseURL: "https://testkwitter.firebaseio.com",
    projectId: "kwitter-project-53cfc",
    storageBucket: "kwitter-project-53cfc.appspot.com",
    messagingSenderId: "594981871785",
    appId: "1:594981871785:web:f65118dd27de0f23df49b8"
  };

  firebase.initializeApp(firebaseConfig);
  console.log(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name-" +Room_names);
   row = "<div class= 'room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML+= row;
//End code
   });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";


}