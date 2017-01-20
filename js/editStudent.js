	document.addEventListener("DOMContentLoaded", function(event) {

		console.log("inside edit student ");
		if (localStorage.getItem("loggedin")=="undefined" || localStorage.getItem("loggedin")==null || localStorage.getItem("loggedin")=="false")
		{
			window.open("login.html","_self");
		}
		else if(localStorage.getItem("loggedin")==localStorage.getItem("username"))
		{
			var students = JSON.parse(localStorage.getItem("students"));
			var username = localStorage.getItem("loggedin");	
			for(var i =0 ;i <students.length ;i ++)
			{
				if (students[i].username==username)
				{
					document.getElementById("student_name").value = students[i].name;
					// document.getElementById("dept_name").value=students[i].dep_name;
					document.getElementById("username").value = students[i].username;
					document.getElementById("phno").value = students[i].phno;
					document.getElementById("address").value = students[i].address;
					document.getElementById("hsc").value = students[i].hsc;					
				}
			}
		}
		
	}); 

	function saveDetails()
	{
		var students = JSON.parse(localStorage.getItem("students"));

		var username = localStorage.getItem("loggedin");	
		var phno = document.getElementById("phno").value;
		var address = document.getElementById("address").value;
		var hsc = document.getElementById("hsc").value;
		alert(phno);
		if(phno.length!=10)
		{
			document.getElementById("error").innerText= "Undefined Phone Number";
			document.getElementById("error").style.color = "red";
		}
		else if (address.length<5)
		{
			document.getElementById("error").innerText= "Minimum 5 characters in Address Required";
			document.getElementById("error").style.color = "red";			
		}
		else 
		{
			alert(students.length);
			for(var i =0 ;i<students.length ; i++)
			{

				if (students[i].username==username)
				{
					students[i].phno=phno;
					students[i].address=address;
					students[i].hsc=hsc;
					localStorage.setItem("students",JSON.stringify(students));
					alert("Details Saved");
					window.open("studentLogin.html","_self");
					break;  

				}
			}
		}
		

	}	

	function cancel()
	{
		window.open("studentLogin.html","_self");
	}
