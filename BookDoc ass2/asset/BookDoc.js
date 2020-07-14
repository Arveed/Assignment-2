
function validateFirstName(){
	var fName = document.getElementById("firstName").value;
	var input = /[a-zA-Z]{2,15}/;

	if (input.test(fName))
	{
		document.getElementById("firstNamePrompt").style.color="green";
		document.getElementById("firstNamePrompt").innerHTML="valid";
		return true;
	}
		else {
		document.getElementById("firstNamePrompt").style.color="red";
		document.getElementById("firstNamePrompt").innerHTML="invalid";
		return false;
		}
}

function validateLastName(){
	var LName = document.getElementById("lastName").value;
	var input = /[a-zA-Z]{2,15}/;

	if (input.test(LName))
	{
		document.getElementById("lastNamePrompt").style.color="green";
		document.getElementById("lastNamePrompt").innerHTML="valid";
		return true;
	}
		else {
		document.getElementById("lastNamePrompt").style.color="red";
		document.getElementById("lastNamePrompt").innerHTML="invalid";
		return false;
		}
}
function validateemail(){
	var email = document.getElementById("email").value;
	var input = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (input.test(email))
	{
		document.getElementById("emailPrompt").style.color="green";
		document.getElementById("emailPrompt").innerHTML="valid";
		return true;
	}
		else {
		document.getElementById("emailPrompt").style.color="red";
		document.getElementById("emailPrompt").innerHTML="invalid";
		return false;
		}
}

function validatemessage (){
	var message = document.getElementById("message").value;
	var input = /[a-zA-Z]{2,100}/;

	if (input.test(message))
	{
		document.getElementById("messagePrompt").style.color="green";
		document.getElementById("messagePrompt").innerHTML="valid";
		return true;
	}
		else {
		document.getElementById("messagePrompt").style.color="red";
		document.getElementById("messagePrompt").innerHTML="invalid";
		return false; 
		}
}

function submit(){
  var fname=document.getElementById("firstName").value;
  var LName=document.getElementById("lastName").value;
  var username = fname + "  "+ LName;

  document.getElementById("submitted").innerHTML= "Thank you";
  document.getElementById("submitted").innerHTML += username;
  document.getElementById("submitted").innerHTML= "we will reply you as soon as possible";

}