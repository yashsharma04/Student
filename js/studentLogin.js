
document.addEventListener("DOMContentLoaded", function(event) { 
	
	// alert("inside teacher login");
	console.log("inside teacher login");

	if(localStorage.getItem("loggedin")=="admin" || localStorage.getItem("loggedin")=="undefined" || localStorage.getItem("loggedin")=="false" || localStorage.getItem("loggedin")== null)
	{
		window.open("login.html","_self");
		// break ;
	}
	else if(localStorage.getItem("loggedin")==localStorage.getItem("username"))
	{
		document.getElementById("name").innerText= localStorage.getItem("loggedin");	
		var students = JSON.parse(localStorage.getItem("students"));

		for(var i=0 ;i<students.length ;i++)
		{
			if (students[i].username==localStorage.getItem("username"))
			{
				
				document.getElementById("student_name").innerText= students[i].name;
				document.getElementById("dept_name").innerText= students[i].dep_name;
					
				document.getElementById("username").innerText= students[i].username;
				// document.getElementById("role").innerText= teachersArray[i].role;

				// personal details 
				var personalArray = JSON.parse(localStorage.getItem("personalArray"));
				document.getElementById("phno").innerText= students[i].phno;				
				document.getElementById("addr").innerText= students[i].address;
				document.getElementById("hsc").innerText= students[i].hsc;
				
			}
		}	
	}
	
});

function editDetails() 
{
	// alert("HELLO");
	window.open("editStudent.html","_self");
}
function logout() 
{
	localStorage.setItem("loggedin","false");
	window.open("login.html","_self");
}


