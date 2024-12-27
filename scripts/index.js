let form  = document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    let obj = {email,password};

    if(email === "empher@gmail.com" && password === "empher@123"){
        alert("Login sucess....");
        window.location.href="quiz.html";
    }else{
        alert("something went wrong plaser try again later....")
    }
})