var db=firebase.firestore();
function test(){
    var name=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    var deviceid=document.getElementById("d_id").value;
	var devicepass=document.getElementById("d_pass").value;
	var mnum=document.getElementById("mnum").value;
    // Add a new document in collection "cities"
    db.collection("Register").doc(deviceid).set({
        Name: name,
		mail: mail,
		devicepass: devicepass,
		mnum: mnum
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Document successfully written!")
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
	writeUserData(deviceid,name,mail)
}

function writeUserData(userId, username, useremail) {
  firebase.database().ref('users/' + userId).set({
    email: useremail,
    username: username
  });
  window.alert("Real Time Database Also Written")
}
