const signinBtn = document.getElementById("signinBtn");
// console.log(signinBtn);
signinBtn.addEventListener('click', (e) => {
       e.preventDefault();
       const emailValue = document.getElementById("email").value

       const passwordValue =  document.getElementById("password").value
    //    console.log( emailValue, passwordValue);

    if(!emailValue || !passwordValue){
         alert("please provide the email and  password");
    } else if(emailValue === "agency@agency.com" && passwordValue  === "admin123"){
           alert("Login Successfully");
    } else{
         alert("Invalid Email And Password");
    }
})