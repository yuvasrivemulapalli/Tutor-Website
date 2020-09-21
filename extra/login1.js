var uid=null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid=user.uid;
  }else{
  	uid=null;
  	window.location.replace("signup1.html");
  }
});

function logout(){
	firebase.auth().signOut();
	
}