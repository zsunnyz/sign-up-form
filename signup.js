const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error")

confirmPasswordInput.addEventListener('input', (e)=>{
    if (passwordInput.value != "" &&  e.target.value != passwordInput.value){
        passwordInput.style.border = "1px solid red";
        confirmPasswordInput.style.border = "1px solid red";
        passwordError.style.visibility = "visible";
    }
    else if(passwordInput.value == e.target.value) {
        passwordInput.style.border = "1px solid lightgrey";
        confirmPasswordInput.style.border = "1px solid lightgrey";
        passwordError.style.visibility = "hidden";
        
    }
})