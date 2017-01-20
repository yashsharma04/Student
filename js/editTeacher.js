	document.addEventListener("DOMContentLoaded", function(event) {

		console.log("inside edit teacher ");
		if (localStorage.getItem("loggedin")=="undefined" || localStorage.getItem("loggedin")==null || localStorage.getItem("loggedin")=="false")
		{
			window.open("login.html","_self");
		}
		else 
		{
			var teachersArray = JSON.parse(localStorage.getItem("teachersArray"));
			var username = localStorage.getItem("loggedin");	
			for(var i =0 ;i <teachersArray.length ;i ++)
			{
				if (teachersArray[i].user_name==username)
				{
					document.getElementById("teacher_name").value=teachersArray[i].teacher_name;
					document.getElementById("dept_name").value=teachersArray[i].dep_name;
					document.getElementById("subjects").value = teachersArray[i].sub_name;
					document.getElementById("username").value = teachersArray[i].user_name;
					document.getElementById("role").innerText = teachersArray[i].role;

					var personalArray = JSON.parse(localStorage.getItem("personalArray"));
					document.getElementById("phno").value = personalArray[i].phno;
					document.getElementById("address").value = personalArray[i].address;
					document.getElementById("hsc").value = personalArray[i].hsc;
					document.getElementById("bach").value = personalArray[i].bachelors;
					document.getElementById("masters").value = personalArray[i].masters;
				}
			}
		}
		
	}); 

	function saveDetails()
	{
		var personalArray = JSON.parse(localStorage.getItem("personalArray"));

		var username = localStorage.getItem("loggedin");	
		var phno = document.getElementById("phno").value;
		var address = document.getElementById("address").value;
		var hsc = document.getElementById("hsc").value;
		var bach = document.getElementById("bach").value;
		var masters = document.getElementById("masters").value;

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
			for(var i =0 ;i<personalArray.length ; i++)
			{
				if (personalArray[i].username==username)
				{
					personalArray[i].phno=phno;
					personalArray[i].address=address;
					personalArray[i].hsc=hsc;
					personalArray[i].bachelors=bach;
					personalArray[i].masters=masters;
					localStorage.setItem("personalArray",JSON.stringify(personalArray));
					// alert("Details Saved");
					window.open("teacherLogin.html","_self");
					break;  

				}
			}
		}
		

	}	

	function cancel()
	{
		window.open("teacherLogin.html","_self");
	}
