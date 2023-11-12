let submitBtn = document.querySelector(".submit_btn")
let accName = document.querySelector(".acc_name")
let accMail = document.querySelector(".acc_mail")
let accPass = document.querySelector(".acc_pass")
let accConPass = document.querySelector(".acc_con_pass")

// errors
let accNameErr = document.querySelector(".acc_name_err")
let accEmailErr = document.querySelector(".acc_mail_err")
let accPassErr = document.querySelector(".acc_pass_err")
let accConPassErr = document.querySelector(".acc_con_pass_err")

let emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

let passValidate = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(!accName.value){
        accNameErr.innerHTML = "Enter your name"
    }else{
        accNameErr.innerHTML = ""
    }
    if(!accMail.value){
        accEmailErr.innerHTML = "Enter mail"
    }else{
        if(accMail.value.match(emailValidate)){
            accEmailErr.innerHTML = ""
        }else{
            accEmailErr.innerHTML = "Enter valid mail"
        }
    }

    if(!accPass.value){
        accPassErr.innerHTML = "Enter password"
    }else{
        if(accPass.value.match(passValidate)){
            accPassErr.innerHTML = "strong"
        }else{
            accPassErr.innerHTML = "Weak"
        }
    }
    if(!accConPass.value){
        accConPassErr.innerHTML = "Retype your password"
    }else{
        if(accConPass.value == accPass.value){
            accConPassErr.innerHTML = ""
        }else{
            accConPassErr.innerHTML = "Dose'nt match"
        }
    }


})