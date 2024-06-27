const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
 
registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    createUser(nameInput.value, emailInput.value, passwordInput.value);
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });

let userTab = []; 
function createUser(name, email, password){
    userTab.push({
        userName: name,
        userEmail: email,
        userPassword: password
    });
}
console.log(userTab);