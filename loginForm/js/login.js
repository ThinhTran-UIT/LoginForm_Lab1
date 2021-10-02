var username = document.getElementById("user");
var password = document.getElementById("password");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var welcome = document.getElementById("welcome");
var login = document.getElementById("loginbox");

eyeIcon.onclick=function()
{
    if(password.type=="password")
    {
        password.type = "text";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    }
    else
    {
        password.type= "password";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    }
}

function loginClick()
{
    var name = document.querySelector("#username");
    login.style.display = 'none';
    welcome.style.display = 'block';
    if(username != "")
    {
        name.innerHTML=username.value;
    }
    else
    {
        name.innerHTML="Noname";
    }
}

function logoutButton()
{
    welcome.style.display = 'none';
    login.style.display = 'block';    
}