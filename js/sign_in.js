let signInBtn = document.querySelector(".submit_btn")
let nameValue = document.querySelector(".name")
let emailValue = document.querySelector(".email")

// error massage
let nameErr = document.querySelector(".name_noti")
let emailErr = document.querySelector(".email_noti")

// validation
let emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

signInBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(!nameValue.value){
        nameErr.innerHTML = "Enter your name"
    }else{
        nameErr.innerHTML = ""
    }
    if(!emailValue.value){
        emailErr.innerHTML = "Enter valid mail"
    }else{
        if(emailValue.value.match(emailValidate)){
            console.log("ok");
            emailErr.innerHTML = ""
        }else{
            console.log("no");
            emailErr.innerHTML = "Enter valid mail"
        }
    }
})