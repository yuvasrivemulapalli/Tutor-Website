var storage=firebase.storage();
var storageRef=storage.ref();
var database=firebase.database();
var cRef=database.ref("courses");
var i=0;
var data=sessionStorage.getItem("username");
var registerRef=database.ref("user/"+data+"/courses");

registerRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log(childKey);
    console.log(childData);
    var main_div= document.createElement("Div");
	main_div.setAttribute('class','card');

	// Styling it
	main_div.style.width = "400px";
	var img = document.createElement('img'); 
    img.src = "https://static.toiimg.com/thumb/msid-60132235,imgsize-169468,width-800,height-600,resizemode-75/60132235.jpg";
    img.setAttribute('class','card-img-top');
    main_div.appendChild(img);
    var inner_div=document.createElement("Div");
    inner_div.setAttribute('class','card-body');
    var h4 = document.createElement("H4") ;
    h4.setAttribute('class','card-title')  ;             // Create a <h1> element
	var t = document.createTextNode(childKey);     // Create a text node
	h4.appendChild(t);  
	inner_div.appendChild(h4);
	var button = document.createElement("Button");
    button.classList.add('btn','bth-primary');
	var textForButton = document.createTextNode("open");
	button.appendChild(textForButton);
	button.addEventListener("click", function(){

    sessionStorage.setItem("coursename",childKey);
    window.location="course.html";

	});
	inner_div.appendChild(button);
	main_div.appendChild(inner_div);

// Appending the div element to body
document.getElementById("registered_courses").appendChild(main_div);




  });
});

cRef.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log(childKey);
    console.log(childData);
    var main_div= document.createElement("Div");
	main_div.setAttribute('class','card');

	// Styling it
	main_div.style.width = "400px";
	var img = document.createElement('img'); 
    img.src = "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg";
    img.setAttribute('class','card-img-top');
    main_div.appendChild(img);
    var inner_div=document.createElement("Div");
    inner_div.setAttribute('class','card-body');
    var h4 = document.createElement("H4") ;
    h4.setAttribute('class','card-title')  ;             // Create a <h1> element
	var t = document.createTextNode(childKey);     // Create a text node
	h4.appendChild(t);  
	inner_div.appendChild(h4);
	var paragraph = document.createElement("P");
	var text = document.createTextNode(childData['description']);
	paragraph.appendChild(text);
	paragraph.setAttribute('class','card-text');
	inner_div.appendChild(paragraph);
	var button = document.createElement("Button");
    button.setAttribute('class','btn');
	var textForButton = document.createTextNode("Register");
	button.appendChild(textForButton);
	button.addEventListener("click", function(){
    database.ref("user/"+data+"/courses/"+childKey).set({"description":childData['description']});
    alert("regietered");

	});
	inner_div.appendChild(button);
	main_div.appendChild(inner_div);

// Appending the div element to body
document.getElementById("all_courses").appendChild(main_div);




  });
});




