import { baseUrl } from "./baseUrl.js";
window.onload = ()=>{
    getData();
}
let quizform = document.getElementById("quizform");
quizform.addEventListener("submit",  async function(){
    event.preventDefault();
    let quizquestions = quizform.quizquestions.value;
    let option1 = quizform.option1.value;
    let option2 = quizform.option2.value;
    let option3 = quizform.option3.value;
    let option4 = quizform.option4.value;
    let select = quizform.select.value;
    // let status = form.value.status;
    let objs = {quizquestions,option1,option2,option3,option4,select,reviewStatus:false,};

    // console.log(objs)
    try{
        await fetch(`${baseUrl}/mock2practice`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(objs)
        });
        alert("Question created...");
        quizform.reset();
    }catch(err){
        console.log(err);
        alert("Something went wrong please try again later...");
    }
            
});

function getData(){
    fetch(`${baseUrl}/mock2practice`)
    .then((res)=>res.json())
    .then((data)=>{
        displayData(data);
        // console.log(data);
        // fetch(`${baseUrl}`)
    });
}

function displayData(arr){
    let container = document.getElementById("contaier");
    container.innerHTML = "";
    arr.map((el,i)=>{
        let card = document.createElement("div");
        
        let quizquestions = document.createElement("h3");
        quizquestions.textContent = `Title : ${el.quizquestions}`;
        let option1 = document.createElement("h3");
        option1.textContent = `Option A : ${el.option1}`;
        let option2 = document.createElement("h3");
        option2.textContent = `Option A : ${el.option2}`;
        let option3 = document.createElement("h3");
        option3.textContent = `Option A : ${el.option3}`;
        let option4 = document.createElement("h3");
        option4.textContent = `Option A : ${el.option4}`;
        let select = document.createElement("h3");
        select.textContent = `Correct Answer : ${el.select}`;

        let reviewStatus = document.createElement("h3");
        if(el.reviewStatus == true){
            reviewStatus.textContent = `Status : Reviewed`;
        }else{
            reviewStatus.textContent = `Status : Pending`;
        }

        let reviewbtn = document.createElement("button");
        reviewbtn.textContent = "Mark as Review";
        reviewbtn.addEventListener("click",function(){
            reviewfun(el);
        });

        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.addEventListener("click",function(){
            deletefun(el);
        });

        card.append(quizquestions,option1,option2,option3,option4,select,reviewStatus,reviewbtn,deletebtn);
        container.append(card);
    });
    
}

function reviewfun(el){
    let updatedvalue = {...el,reviewStatus : !el.reviewStatus};
    fetch(`${baseUrl}/mock2practice/${el.id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatedvalue),
    }).then(()=>{
        alert("Are you sure to update the question ...");
        getData();
    }).catch((err)=>{
        console.log(err);
        alert("something went wrong please try again");
    })
}

function deletefun(el){
    fetch(`${baseUrl}/mock2practice/${el.id}`,{
        method:"DELETE",
    }).then((res)=>{
        alert("Are you sure to delete the question....");
        getData();
    }).catch((err)=>{
        console.log(err);
        alert("Something went wrong please try again...");
    })
    
}