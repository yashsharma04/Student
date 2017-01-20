
document.addEventListener("DOMContentLoaded", function(event) { 
	
	// alert("inside teacher login");
	console.log("inside teacher login");

	if(localStorage.getItem("loggedin")=="undefined" || localStorage.getItem("loggedin")=="false" || localStorage.getItem("loggedin")== null)
	{
		window.open("login.html","_self");
		// break ;
	}
	else
	{
		document.getElementById("name").innerText= localStorage.getItem("username");	
		var teachersArray = JSON.parse(localStorage.getItem("teachersArray"));
		for(var i=0 ;i<teachersArray.length ;i++)
		{
			if (teachersArray[i].user_name==localStorage.getItem("username"))
			{
				document.getElementById("teacher_name").innerText= teachersArray[i].teacher_name;
				document.getElementById("dept_name").innerText= teachersArray[i].dep_name;
				document.getElementById("subjects").innerText= teachersArray[i].sub_name;	
				document.getElementById("username").innerText= teachersArray[i].user_name;
				document.getElementById("role").innerText= teachersArray[i].role;

				// personal details 
				var personalArray = JSON.parse(localStorage.getItem("personalArray"));
				document.getElementById("phno").innerText= personalArray[i].phno;				
				document.getElementById("addr").innerText= personalArray[i].address;
				document.getElementById("hsc").innerText= personalArray[i].hsc;
				document.getElementById("bach").innerText= personalArray[i].bachelors;
				document.getElementById("masters").innerText= personalArray[i].masters;
			}
		}	
	}
	
});

function editDetails() 
{
	// alert("HELLO");
	window.open("editTeacher.html","_self");
}
function logout() 
{
	localStorage.setItem("loggedin","false");
	window.open("login.html","_self");
}
function changePassword()
{

	document.getElementById("main_content").innerHTML = "";
	// document.getElementById("main_content")+="";
	

}

