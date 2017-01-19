	document.addEventListener("DOMContentLoaded", function(event) { 

				if (localStorage.getItem("arr1")==undefined)
				{
					console.log("inside undefined");
					var arr1 = [] ;
					// arr1.push({"name":"Yash"});
					console.log(arr1.length);
					console.log('arr1',arr1);
					localStorage.setItem("arr1",JSON.stringify(arr1)); 
				}
				else 
				{
					// var arr1 = JSON.parse(localStorage.getItem("arr1"));
					// var len = arr1.length;
					// for(var i =0 ; i<len;i++)
					// {
					// 	document.getElementById("content").innerHTML=document.getElementById("content").innerText+"\n"+arr1[i];	
					// }
				}
				document.getElementById("dep").style.display= "none";
				document.getElementById("tea").style.display= "none";
				document.getElementById("sub").style.display= "none";
				document.getElementById("subd").style.display= "none";
				document.getElementById("subt").style.display= "none";
				document.getElementById("subs").style.display= "none";
				document.getElementById("select").style.display= "none";
				document.getElementById("select_subjects").style.display= "none";
				document.getElementById("select_departments").style.display= "none";
				document.getElementById("showTeacher").style.display= "none";
				document.getElementById("onlySubject").style.display= "none";
				document.getElementById("onlyDepartment").style.display= "none";
				// document.getElementById("bydORs").style.display= "none";
		});

		function onDepartmentChange()
		{
			var department = document.getElementById("dd").value;
			// alert(department);
			var teachersArray = JSON.parse(localStorage.getItem("teachersArray"));
			// var table = document.createElement();
			var arr= [] ;
			for(var i=0 ; i<teachersArray.length;i++)
			{
				if(teachersArray[i].dep_name==department)
				{
					arr.push(teachersArray[i].teacher_name);
				}
			}
			var table = document.getElementById("table");
			var body =  document.getElementById("body");
			body.innerHTML= "";
			for(var i=0;i<arr.length;i++)
			{
				var row = body.insertRow(0);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				cell1.innerHTML=department;
				cell2.innerHTML=arr[i];	
			}
			
			
		}
		function byDepartment()
		{	
			document.getElementById("onlyDepartment").style.display= "block";
			document.getElementById("onlySubject").style.display= "none";
			var select= document.getElementById("dd");
			
			var arr = JSON.parse(localStorage.getItem("arr1"));
			select.innerHTML="";
			for(var i =0 ; i<arr.length;i++)
			{
				var option = document.createElement("option");
				option.textContent = arr[i];
				select.appendChild(option);
			}

			var department =arr[0];
			// alert(department);
			var teachersArray = JSON.parse(localStorage.getItem("teachersArray"));
			// var table = document.createElement();
			var arr= [] ;
			for(var i=0 ; i<teachersArray.length;i++)
			{
				if(teachersArray[i].dep_name==department)
				{
					arr.push(teachersArray[i].teacher_name);
				}
			}
			var table = document.getElementById("table");
			var body =  document.getElementById("body");
			body.innerHTML= "";
			for(var i=0;i<arr.length;i++)
			{
				var row = body.insertRow(0);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				cell1.innerHTML=department;
				cell2.innerHTML=arr[i];	
			}
		}
		function bySubject()
		{
			document.getElementById("onlySubject").style.display= "block";
			document.getElementById("onlyDepartment").style.display= "none";
		}
		function gotoHome() 
		{
			document.getElementById("mainContent").style.display="block";
			document.getElementById("onlySubject").style.display= "none";
			document.getElementById("onlyDepartment").style.display= "none";
			// document.getElementById("bydORs").style.display= "none";
			document.getElementById("showTeacher").style.display= "none";
		}
		function showTeachers()
		{
			document.getElementById("mainContent").style.display="none";
			document.getElementById("showTeacher").style.display="block";
		}
		function change_subjects(obj) 
		{
			// alert(obj.value);
			var department = obj.value ; 
			var select_subjects= document.getElementById("select_subjects");
			for(var i =select_subjects.length -1; i>=0;i--)
			{
				select_subjects.remove(i);
			}
			var subarray = JSON.parse(localStorage.getItem("subarray"));
			for(var i =0 ; i<subarray.length;i++)
			{
				if (subarray[i].department==department)
				{
					var option = document.createElement("option");
					option.textContent=subarray[i].subName ; 
					select_subjects.appendChild(option);
				}
			}
		}
		 
		function dep() 
		{
			document.getElementById("dep").style.display= "block" ;
			document.getElementById("subd").style.display= "block" ;

			
		}
		function tea()
		{
			document.getElementById("tea").style.display= "block" ;
			document.getElementById("subt").style.display= "block";
			document.getElementById("select_subjects").style.display= "block";
			document.getElementById("select_departments").style.display= "block";

			var select_departments= document.getElementById("select_departments");
			var select_subjects= document.getElementById("select_subjects");
			var arr = JSON.parse(localStorage.getItem("arr1"));
			for(var i =0 ; i<arr.length;i++)
			{
				var option = document.createElement("option");
				option.textContent = arr[i];
				select_departments.appendChild(option);
			}
			var subarray = JSON.parse(localStorage.getItem("subarray"));
			for(var i =0 ; i<subarray.length;i++)
			{
				if (subarray[i].department==arr[0])
				{
					var option = document.createElement("option");
					option.textContent=subarray[i].subName ; 
					select_subjects.appendChild(option);
				}
			}
		}
		function sub()
		{
			document.getElementById("sub").style.display= "block" ;
			document.getElementById("subs").style.display= "block";
			document.getElementById("select").style.display= "block";
			var select = document.getElementById("select");
			var subject = document.getElementById("sub");
			var arr = JSON.parse(localStorage.getItem("arr1"));
			
			for(var i =0 ; i<arr.length;i++)
			{
				var option = document.createElement("option");
				option.textContent = arr[i];
				select.appendChild(option);
			}
		}
		function subd() 
		{
			var department = document.getElementById("dep").value;
			if (typeof(Storage) !== "undefined") 
			{
			    var yash =JSON.parse(localStorage.getItem("arr1")) ;
			    yash.push(department);
			    localStorage.setItem("arr1",JSON.stringify(yash));
			    alert("department added");
			    window.open("onLogin.html","_self");
			} 
			else 
			{
			    document.getElementById("content").innerHTML = "Sorry, your browser does not support Web Storage...";
			}
		}
		function subt() 
		{
			if (localStorage.getItem("teachersArray") ==undefined)
			{
				var teacher_name = document.getElementById("tea").value;
				var department=  document.getElementById("select_departments").value;
				var subject = document.getElementById("select_subjects").value;
				var teachersArray = [] ;
				var count =0 ;
				var teacher = {
								"id":0,
								"sub_name" : subject , 
								"dep_name" : department,
								"teacher_name":teacher_name,
								"user_name": teacher_name+"0" ,
								"password":teacher_name+"0"
							   }; 	
				teachersArray.push(teacher);
				localStorage.setItem("teachersArray",JSON.stringify(teachersArray));
				alert("Teacher added");
				window.open("onLogin.html","_self");
			}
			else 
			{
				var teacher_name = document.getElementById("tea").value;
				var department=  document.getElementById("select_departments").value;
				var subject = document.getElementById("select_subjects").value;
				var teachersArray = JSON.parse(localStorage.getItem("teachersArray"));
				var len = teachersArray.length ;
				var id = teachersArray[len-1].id ;
				var count = parseInt(id + 1) ;
				// teachersArray[count]= count ; 
				var teacher =  {
								"id":count,
								"sub_name":subject,
								"dep_name":department,
								"teacher_name":teacher_name,
								"user_name":teacher_name+count,
								"password":teacher_name+count
							};
				teachersArray.push(teacher);
				localStorage.setItem("teachersArray",JSON.stringify(teachersArray));
				alert("Teacher Added");
				window.open("onLogin.html","_self");
			}
		}
		function subs()
		{
			if (localStorage.getItem("subarray")==undefined)
			{
				var subjectValue  = document.getElementById("sub").value ;
				

				var e = document.getElementById("select");
				var department = e.options[e.selectedIndex].value;
				var subarray =[];
				var subjects = {};
				// subarray.subjects = subjects ;
				var subject = {
								  "subName": subjectValue,
								  "department": department
								}
				subarray.push(subject);
				localStorage.setItem("subarray",JSON.stringify(subarray));
				alert("Subject added ");
				window.open("onLogin.html","_self");
			}
			else 
			{
				var subarray= JSON.parse(localStorage.getItem("subarray"));
				var subjectValue  = document.getElementById("sub").value ;
				var e = document.getElementById("select");
				var department = e.options[e.selectedIndex].value;
				var subject = {
								  "subName": subjectValue,
								  "department": department
								}
				subarray.push(subject);
				localStorage.setItem("subarray",JSON.stringify(subarray));
				alert("Subject added ");
				window.open("onLogin.html","_self");
			}
		}		



	