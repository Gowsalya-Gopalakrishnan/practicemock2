const navbar = ()=>{
    let cart =`<div id="nav-container">
        <a id="top" href="index.html">EmpowerHer Quiz App</a>
        <div id="nav-items">
            <a href="index.html">Home</a>
            <a href="quiz.html">Quiz</a>
            <a href="questions.html">Questions</a>
        </div>
    </div>`;

    document.getElementById("nav").innerHTML =cart;
}
navbar();

export {navbar};