var storage=firebase.storage();
var storageRef=storage.ref();
var database=firebase.database();
var rootRef=database.ref("user");
var i=0;
var data=sessionStorage.getItem("coursename");
console.log(data);
rootRef.once("value")
  .then(function(snapshot) {

  	});

console.warn(data);
storageRef.child('courses/'+data+'/').listAll().then(function(result){
	result.items.forEach(function(imageRef){
		++i;
		displayImage(i,imageRef);

	});
});
function displayImage(row,images){
	images.getDownloadURL().then(function(url){
		/*
		let new_html='';
		new_html+='<tr>';
		new_html+='<td>';
		new_html+='<img src="'+url+'" width="40%" style="float:right">';
		new_html+='</td>';
		new_html+='</tr>';
		$('#list').find('tbody').append(new_html);
		*/

		 var img = document.createElement('img'); 
            img.src =  url
            img.width=170;
            img.height=170;

            document.getElementById('all_courses').appendChild(img); 

	});
}