const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

confirmPasswordInput.addEventListener('input', (e)=>{
    if (passwordInput.value != "" &&  e.target.value != passwordInput.value){
        passwordInput.style.outline = "1px solid red";
        confirmPasswordInput.style.outline = "1px solid red";
        
    }
})