
document.addEventListener("DOMContentLoaded", function(event) { 
	
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
		}
	}
	
});


function changePassword()
{
	
}

