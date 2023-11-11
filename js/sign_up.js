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

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(!accName.value){
        console.log("ny");
    }else{
        console.log("ok");
    }
})