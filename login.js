const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    emailInput.value = "";
    passwordInput.value = "";
    if (emailInput.value == "prentisbloom@gmail.com" && passwordInput.value == "prent_24")
        alert("You are loge in.")
        store(emailInput.value,passwordInput.value);
        window.open("index.html");
});

const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function(){
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    if(togglePassword.src.match("assets/hide-grey.png")){
        togglePassword.src = "assets/eye-grey.png";
    } else {
        togglePassword.src = "assets/hide-grey.png";
    }
}
);

function store(email, password)
{
    localStorage.setItem("userMail", email);
    localStorage.setItem("userPass", password);
}

